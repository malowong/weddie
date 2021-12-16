import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../../style';

export default function SettingScreen() {
  const [phoneNumber, setPhoneNumber] = useState(61210767);

  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>用戶設定</Text>
      <Text style={styles.baseText}>設定設定設定設定設定設定</Text>
      <Text style={styles.baseText}>{phoneNumber}</Text>
      <Button
        title="Change Phone Number"
        onPress={() => {
          setPhoneNumber(phoneNumber === 61210767 ? 61210768 : 61210767);
        }}
      />
    </View>
  );
}
