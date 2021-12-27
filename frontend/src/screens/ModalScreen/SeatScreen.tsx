import { Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { styles } from '../../../style';
import TopBar from '../../components/TopBar';

export default function SeatScreen() {
  return (
    <TopBar pageName="座位安排" show="true" navigate="AddTodoItem">
      <Text style={styles.baseText}>
        座位安排座位安排座位安排座位安排座位安排
      </Text>
    </TopBar>
  );
}
