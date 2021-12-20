import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AddMaterialItem } from '../components/AddMaterialItem';
import MaterialList from '../components/MaterialList';
// import TopBar from '../components/TopBar';

const Stack = createNativeStackNavigator();

export default function MaterialScreen() {
  return (
    <Stack.Navigator
      initialRouteName="MaterialList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MaterialList" component={MaterialList} />
      <Stack.Screen name="AddMaterialItem" component={AddMaterialItem} />
    </Stack.Navigator>
  );
}
