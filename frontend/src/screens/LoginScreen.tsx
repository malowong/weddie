import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../style';
import { Login } from '../components/Login';

export default function LoadingScreen({ navigation }: { navigation: any }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    const navigation = useNavigation();
    setIsLoggedIn(true);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <TextInput placeholder="username"></TextInput>
      <TextInput placeholder="password"></TextInput>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MainStackScreen')
        }>
        <Text>登入</Text>
      </TouchableOpacity>
    </View>
  );
}
