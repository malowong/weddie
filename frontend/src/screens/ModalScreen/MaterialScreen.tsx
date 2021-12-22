import React from 'react';
import { Button, Text } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';

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
  const materialList = useSelector(
    (state: IRootState) => state.logistics.materialList
  );

  console.log(materialList);
  return (
    <TopBar pageName="物資管理">
      <TouchableOpacity style={materialStyles.addButton}>
        <Button
          colorScheme="secondary"
          onPress={() =>
            navigation.navigate('CreateStackScreen', {
              screen: 'AddMaterialItem',
            })
          }
        >
          新增
        </Button>
      </TouchableOpacity>

      {materialList.map((material) => {
        return (
          <TouchableOpacity
            key={material.id}
            style={materialStyles.tableRow}
            onPress={() =>
              navigation.navigate('EditStackScreen', {
                screen: 'EditMaterialItem',
                params: {
                  id: material.id,
                  itemName: material.itemName,
                  amount: material.amount,
                },
              })
            }
          >
            <Text fontSize={19}>{material.itemName}</Text>
            <Text fontSize={19}>${material.amount}</Text>
          </TouchableOpacity>
        );
      })}
    </TopBar>
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
  addButton: {
    marginBottom: 10,
  },
});
