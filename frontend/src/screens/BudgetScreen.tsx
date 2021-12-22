import React, { useState } from 'react';
import { styles } from '../../style';
import TopBar from '../components/TopBar';
import { View, Text } from 'native-base';

const expenditures = [
  {
    category: '酒席',
    amount: 50000,
  },
  {
    category: '禮金',
    amount: 5000,
  },
  {
    category: '戒指',
    amount: 2000,
  },
  {
    category: '婚攝',
    amount: 20000,
  },
];

const totalExpenditure = expenditures.reduce((pre, cur) => {
  return pre + cur.amount;
}, 0);

export default function BudgetScreen() {
  const [budget, setBudget] = useState(100000);

  return (
    <TopBar pageName="婚禮預算">
      <View mb={5} mt={3}>
        <Text fontSize={17}>總預算: {budget}</Text>
        <Text fontSize={17}>總支出: {totalExpenditure}</Text>
        <Text fontSize={17}>剩餘預算: {budget - totalExpenditure}</Text>
      </View>
      <View borderBottomColor="black" borderBottomWidth={1} />
      <View marginTop={5}>
        <Text fontSize={17} marginBottom={2}>
          支出
        </Text>
        {expenditures.map((expenditure, idx) => {
          return (
            <Text fontSize={15} key={idx}>
              {expenditure.category}: ${expenditure.amount}
            </Text>
          );
        })}
      </View>
    </TopBar>
  );
}
