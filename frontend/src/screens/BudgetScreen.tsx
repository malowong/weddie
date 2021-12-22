import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../components/TopBar';
import { View, Text, Button } from 'native-base';

const expenditures = [
  {
    id: 1,
    category: '酒席',
    amount: 50000,
  },
  {
    id: 2,
    category: '禮金',
    amount: 5000,
  },
  {
    id: 3,
    category: '戒指',
    amount: 2000,
  },
  {
    id: 4,
    category: '婚攝',
    amount: 20000,
  },
];

const totalExpenditure = expenditures.reduce((pre, cur) => {
  return pre + cur.amount;
}, 0);

export default function BudgetScreen({ navigation }: { navigation: any }) {
  const [budget, setBudget] = useState(100000);

  return (
    <TopBar pageName="婚禮預算">
      <View mb={5} mt={3}>
        <Text fontSize={20}>總預算: {budget}</Text>
        <Text fontSize={20}>總支出: {totalExpenditure}</Text>
        <Text fontSize={20}>剩餘預算: {budget - totalExpenditure}</Text>
      </View>
      <View borderBottomColor="black" borderBottomWidth={1} />
      <View marginTop={5}>
        <View style={budgetStyles.addRow}>
          <Text fontSize={20} marginBottom={2}>
            支出
          </Text>
          <Button
            style={budgetStyles.button}
            colorScheme="secondary"
            onPress={() =>
              navigation.navigate('CreateStackScreen', {
                screen: 'AddBudgetItem',
              })
            }
          >
            新增支出
          </Button>
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
                    category: expenditure.category,
                    amount: expenditure.amount,
                  },
                })
              }
            >
              <Text fontSize={19}>{expenditure.category}</Text>
              <Text fontSize={19}>${expenditure.amount}</Text>
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
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 8,
  },
});
