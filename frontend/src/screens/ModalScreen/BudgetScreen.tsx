import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import TopBar from '../../components/TopBar';
import { View, Text, HStack, Box, Heading, VStack, Button } from 'native-base';
import { useSelector } from 'react-redux';
import { config } from '../../../app.json';
import { useQuery } from 'react-query';
import { ErrorMsg } from '../../components/ErrorMsg';
import { LoadingMsg } from '../../components/LoadingsMsg';
import { IRootState } from '../../redux/store';
import { useRefreshOnFocus } from '../../../hooks/useRefreshOnFoncus';
import { ProgressChart } from 'react-native-chart-kit';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Expenditure {
  id: number;
  wedding_event_id: number;
  budget_cat_id: number;
  description: string;
  expenditure: number;
}

const budgetCategoryMap = new Map([
  [1, '攝影'],
  [2, '婚前中式禮儀'],
  [3, '派帖'],
  [4, '美容'],
  [5, '早上敬茶、出門入門'],
  [6, '証婚'],
  [7, '晚上婚宴'],
  [8, '婚禮服飾'],
  [9, '婚禮當日化妝'],
  [10, '交通'],
  [11, '回門'],
  [12, '其他'],
]);

export default function BudgetScreen({ navigation }: { navigation: any }) {
  const { height, width } = useWindowDimensions();
  const [sorting, setSorting] = useState(false);
  const budget: number = parseInt(
    useSelector((state: IRootState) => state.event.event!.budget)
  );
  const eventId = useSelector(
    (state: IRootState) => state.event.event?.wedding_event_id
  );
  console.log('eventId: ', eventId);
  useRefreshOnFocus(() =>
    fetch(`${config.BACKEND_URL}/api/budget/list/${eventId}`)
      .then((res) => res.json())
      .then((data) => setExpenditureList(data.expenditureList))
  );

  const [expenditureList, setExpenditureList]: any = useState([]);
  const { isLoading, error, data } = useQuery('budgetData', () =>
    fetch(`${config.BACKEND_URL}/api/budget/list/${eventId}`)
      .then((res) => res.json())
      .then((data) => setExpenditureList(data.expenditureList))
  );
  // console.log(expenditureList);
  if (isLoading) return <LoadingMsg />;

  if (error) return <ErrorMsg />;

  const totalExpenditure = expenditureList.reduce(
    (pre: number, cur: Expenditure) => {
      return pre + cur.expenditure;
    },
    0
  );

  const chartData = {
    labels: ['支出'],
    data: [totalExpenditure / budget],
  };

  return (
    <TopBar pageName="婚禮預算" show="true" navigate="AddBudgetItem">
      {totalExpenditure <= budget && (
        <ProgressChart
          data={chartData}
          width={width * 0.9}
          height={height * 0.2}
          strokeWidth={20}
          radius={65}
          chartConfig={{
            backgroundColor: '#f2f2f2',
            backgroundGradientFrom: '#f2f2f2',
            backgroundGradientTo: '#f2f2f2',
            // f2f2f2
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(233, 30, 98, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(233, 30, 98, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          hideLegend={true}
        />
      )}

      <View mb={5} mt={3} marginX={2}>
        <View display="flex" flexDirection="row" justifyContent="space-between">
          <Text fontSize={22}>總預算</Text>
          <Text fontSize={22}>{budget}</Text>
        </View>
        <View display="flex" flexDirection="row" justifyContent="space-between">
          <Text fontSize={22}>總支出</Text>
          <Text fontSize={22}>{totalExpenditure}</Text>
        </View>
        <View display="flex" flexDirection="row" justifyContent="space-between">
          <Text fontSize={22}>剩餘預算</Text>
          <Text fontSize={22}>{budget - totalExpenditure}</Text>
        </View>
      </View>
      <View borderBottomColor="black" borderBottomWidth={1} />
      <View marginTop={5}>
        <View style={budgetStyles.addRow}>
          <Text fontSize={24} fontWeight="bold" marginLeft={2}>
            支出
          </Text>
          <Button
            backgroundColor="#f2f2f2"
            size="lg"
            marginRight={15}
            onPress={() => {
              const sortedExpenditureList = expenditureList.sort(
                (a: Expenditure, b: Expenditure) => {
                  if (sorting) {
                    return a.expenditure - b.expenditure;
                  } else {
                    return b.expenditure - a.expenditure;
                  }
                }
              );
              setSorting(!sorting);
              setExpenditureList(sortedExpenditureList);
            }}
          >
            <Ionicons name="ios-funnel-outline" color="#e91e63" size={30} />
          </Button>
        </View>

        {expenditureList.map((expenditure: Expenditure, idx: number) => {
          return (
            <TouchableOpacity
              key={expenditure.id}
              style={budgetStyles.tableRow}
              onPress={() =>
                navigation.navigate('EditStackScreen', {
                  screen: 'EditBudgetItem',
                  params: {
                    id: expenditure.id,
                    categoryId: expenditure.budget_cat_id,
                    expenditure: expenditure.expenditure,
                    description: expenditure.description,
                  },
                })
              }
            >
              <Box
                py="3"
                alignSelf="center"
                width={375}
                maxWidth="100%"
                borderBottomWidth="1"
                borderColor="muted.300"
              >
                <HStack>
                  <VStack>
                    <View>
                      <Heading size="md">{expenditure.description}</Heading>
                    </View>
                    <View>
                      <Text fontSize="md">
                        {budgetCategoryMap.get(expenditure.budget_cat_id)}
                      </Text>
                    </View>
                  </VStack>
                  <Box
                    flex="1"
                    flex-direction="column"
                    alignItems="flex-end"
                    justifyContent="flex-end"
                  >
                    <Box px="2" py="0.5" rounded="md">
                      <Text fontSize="md" color="black" fontFamily="arial">
                        ${expenditure.expenditure}
                      </Text>
                    </Box>
                  </Box>
                </HStack>
              </Box>
            </TouchableOpacity>
          );
        })}

        {expenditureList.length === 0 && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CreateStackScreen', {
                screen: 'AddBudgetItem',
              })
            }
          >
            <Text
              fontSize={18}
              color="danger.600"
              marginTop={10}
              marginLeft={15}
            >
              尚未有任何支出，按此新增
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </TopBar>
  );
}

const budgetStyles = StyleSheet.create({
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 3,
  },
  touch: {
    marginBottom: 8,
  },
  button: {
    width: 90,
    borderRadius: 10,
  },
  addRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
});
