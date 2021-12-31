import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import TopBar from '../../components/TopBar';
import { View, Text, HStack, Box, Heading, VStack } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../../app.json';
import { useQuery } from 'react-query';
import { ErrorMsg } from '../../components/ErrorMsg';
import { LoadingMsg } from '../../components/LoadingsMsg';
import { IRootState } from '../../redux/store';
import { useRefreshOnFocus } from '../../../hooks/useRefreshOnFoncus';
import { ProgressChart } from 'react-native-chart-kit';

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
  const budget: number = parseInt(
    useSelector((state: IRootState) => state.event.event!.budget)
  );

  useRefreshOnFocus(() =>
    fetch(`${config.BACKEND_URL}/api/budget/list`)
      .then((res) => res.json())
      .then((data) => setExpenditureList(data.expenditureList))
  );

  const [expenditureList, setExpenditureList]: any = useState([]);
  const { isLoading, error, data } = useQuery('userData', () =>
    fetch(`${config.BACKEND_URL}/api/budget/list`)
      .then((res) => res.json())
      .then((data) => setExpenditureList(data.expenditureList))
  );

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
      {/* <PieChart
        data={chartData}
        width={350}
        height={300}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
      /> */}
      <ProgressChart
        data={chartData}
        width={width * 0.9}
        height={height * 0.2}
        strokeWidth={20}
        radius={50}
        chartConfig={{
          // backgroundColor: '#ffffff',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        hideLegend={false}
      />

      <View mb={5} mt={3}>
        <Text fontSize={22} marginLeft={15}>
          總預算: {budget}
        </Text>
        <Text fontSize={22} marginLeft={15}>
          總支出: {totalExpenditure}
        </Text>
        <Text fontSize={22} marginLeft={15}>
          剩餘預算: {budget - totalExpenditure}
        </Text>
      </View>
      <View borderBottomColor="black" borderBottomWidth={1} />
      <View marginTop={5}>
        <View style={budgetStyles.addRow}>
          <Text
            fontSize={24}
            marginBottom={2}
            fontWeight="bold"
            marginLeft={15}
          >
            支出
          </Text>
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
                    <Box px="2" py="0.5" rounded="md" bg="primary.600">
                      <Text fontSize="md" color="white">
                        {expenditure.expenditure}
                      </Text>
                    </Box>
                  </Box>
                </HStack>
              </Box>
            </TouchableOpacity>
          );
        })}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 8,
  },
});
