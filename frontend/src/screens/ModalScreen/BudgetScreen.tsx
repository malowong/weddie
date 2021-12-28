import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';
import { View, Text } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import { getExpenditureListThunk } from '../../redux/expenditure/thunk';

export default function BudgetScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const [budget, setBudget] = useState(100000);
  const expenditures = useSelector(
    (state: IRootState) => state.expenditure.expenditureList
  );

  const totalExpenditure = expenditures.reduce((pre, cur) => {
    return pre + cur.amount;
  }, 0);

  useEffect(() => {
    dispatch(getExpenditureListThunk());
  }, [dispatch]);

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
            fontSize={22}
            marginBottom={2}
            fontWeight="bold"
            marginLeft={15}
          >
            支出
          </Text>
        </View>

        {expenditures.map((expenditure, idx) => {
          return (
            <TouchableOpacity
              key={expenditure.id}
              style={budgetStyles.tableRow}
              onPress={() =>
                navigation.navigate('EditStackScreen', {
                  screen: 'EditBudgetItem',
                  params: {
                    id: expenditure.id,
                    category: expenditure.category,
                    amount: expenditure.amount,
                  },
                })
              }
            >
              <Text fontSize={20}>{expenditure.category}</Text>
              <Text fontSize={20}>${expenditure.amount}</Text>
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
