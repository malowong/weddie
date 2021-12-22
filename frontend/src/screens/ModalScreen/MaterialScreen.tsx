import React, { useEffect } from 'react';
import { Button, Text } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import { getAllMaterialItemsThunk } from '../../redux/logistics/thunk';

export default function MaterialScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const materialList = useSelector(
    (state: IRootState) => state.logistics.materialList
  );

  useEffect(() => {
    dispatch(getAllMaterialItemsThunk());
  }, [dispatch]);

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
            {material.amount ? (
              <Text fontSize={19}>${material.amount}</Text>
            ) : (
              <Text fontSize={19}>NA</Text>
            )}
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
