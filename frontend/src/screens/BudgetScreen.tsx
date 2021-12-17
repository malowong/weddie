import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../style';
import TopBar from '../components/TopBar';

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

export default function BudgetScreen() {
  const [budget, setBudget] = useState(50000);

  return (
    <TopBar pageName="婚禮預算">
      <View>
        <Text>預算: {budget}</Text>
      </View>
      <View>
        <Text>支出</Text>
        {expenditures.map((expenditure, idx) => {
          return (
            <Text key={idx}>
              {expenditure.category}: {expenditure.amount}
            </Text>
          );
        })}
      </View>
    </TopBar>
  );
}
