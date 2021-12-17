import { Text } from 'native-base';
import React from 'react';
import { styles } from '../../style';
import TopBar from '../components/TopBar';

export default function MaterialScreen() {
  return (
    <TopBar pageName="物資管理">
      <Text style={styles.baseText}>
        物資管理物資管理物資管理物資管理物資管理
      </Text>
    </TopBar>
  );
}
