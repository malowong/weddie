import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../style';

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
    <View style={styles.screen}>
      <Text style={styles.titleText}>婚禮預算</Text>
      <View>
        <Text>預算: {budget}</Text>
      </View>
      <View>
        <Text>支出</Text>
        {expenditures.map((expenditure) => {
          return (
            <Text>
              {expenditure.category}: {expenditure.amount}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
