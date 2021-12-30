import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';
import { View, Text, HStack, Box, Heading, VStack } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../../app.json';
import { useQuery } from 'react-query';
import { ErrorMsg } from '../../components/ErrorMsg';
import { LoadingMsg } from '../../components/LoadingsMsg';
import { IRootState } from '../../redux/store';

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
  const budget: number = parseInt(
    useSelector((state: IRootState) => state.event.event!.budget)
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

  return (
    <TopBar pageName="婚禮預算" show="true" navigate="AddBudgetItem">
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
                navigation.push('EditStackScreen', {
                  screen: 'EditBudgetItem',
                  params: {
                    id: expenditure.id,
                    // category: expenditure.category,
                    amount: expenditure.expenditure,
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
