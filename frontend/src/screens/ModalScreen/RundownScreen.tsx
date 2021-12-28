import { Text } from 'native-base';
import React from 'react';
import { styles } from '../../../style';
import TopBar from '../../components/TopBar';

export default function RundownScreen() {
  return (
    <TopBar pageName="當日流程" show="true" navigate="AddTodoItem">
      <Text style={styles.baseText}>當日流程當日流程當日流程當日流程</Text>
    </TopBar>
  );
}
