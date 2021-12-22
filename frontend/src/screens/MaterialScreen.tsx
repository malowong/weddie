import React from 'react';
import { Button, Text } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../components/TopBar';

const materialList = [
  {
    id: 1,
    item: '攝影師',
    amount: 4000,
  },
  {
    id: 2,
    item: '化妝師',
    amount: 4000,
  },
  {
    id: 3,
    item: '大冚姐',
    amount: 3000,
  },
  {
    id: 4,
    item: '司機',
    amount: 900,
  },
  {
    id: 5,
    item: '佈置工人',
    amount: 800,
  },
];

export default function MaterialScreen({ navigation }: { navigation: any }) {
  return (
<<<<<<< HEAD
    <TopBar pageName="物資管理">
      <TouchableOpacity style={materialStyles.touch}>
        <Button
          colorScheme="secondary"
          onPress={() => navigation.navigate('CreateStackScreen', {screen: 'AddMaterialItem'})}
        >
          新增
        </Button>
      </TouchableOpacity>

      {materialList.map((material) => {
        return (
          <TouchableOpacity key={material.id} style={materialStyles.tableRow}>
            <Text fontSize={18}>{material.item}</Text>
            <Text fontSize={18}>${material.amount}</Text>
          </TouchableOpacity>
        );
      })}
    </TopBar>
=======
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MaterialList" component={MaterialList} />
      <Stack.Screen name="AddMaterialItem" component={AddMaterialItem} />
    </Stack.Navigator>
>>>>>>> 34756f1a3ec9faba72286cc07004c2f8e81a1321
  );
}

const materialStyles = StyleSheet.create({
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 3,
  },
  touch: {
    marginBottom: 8,
  },
});