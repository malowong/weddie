import { Text } from 'native-base';
import React from 'react';
import { styles } from '../../style';
import TopBar from '../components/TopBar';

export default function CheckListScreen() {
  return (
    <TopBar pageName="待辦事項">
      <Text style={styles.baseText}>
        待辦事項待辦事項待辦事項待辦事項待辦事項
      </Text>
    </TopBar>
  );
}
