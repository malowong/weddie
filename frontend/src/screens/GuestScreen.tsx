import { Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { styles } from '../../style';
import TopBar from '../components/TopBar';

export default function GuestScreen() {
  return (
    <TopBar pageName="來賓名單">
      <Text style={styles.baseText}>來賓名單來賓名單來賓名單來賓名單 </Text>
    </TopBar>
  );
}
