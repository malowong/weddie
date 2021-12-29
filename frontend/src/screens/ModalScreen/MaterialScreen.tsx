import React, { useEffect, useState } from 'react';
import { Checkbox, Text } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import { getAllMaterialItemsThunk } from '../../redux/logistics/thunk';
import { useQuery } from 'react-query';
import { config } from '../../../app.json';
import { ErrorMsg } from '../../components/ErrorMsg';
import { LoadingMsg } from '../../components/LoadingsMsg';

export default function MaterialScreen({ navigation }: { navigation: any }) {
  const eventId = useSelector((state: IRootState) => state.event.event?.id);

  // const dispatch = useDispatch();
  // const materialList = useSelector(
  //   (state: IRootState) => state.logistics.materialList
  // );

  const [materialList, setMaterialList] = useState([]);
  const { isLoading, error, data } = useQuery('logisticsData', () =>
    fetch(`${config.BACKEND_URL}/api/logistics/list/${eventId}`)
      .then((res) => res.json())
      .then((data) => setMaterialList(data.logisticsList))
  );

  if (isLoading) return <LoadingMsg />;

  if (error) return <ErrorMsg />;

  // useEffect(() => {
  //   dispatch(getAllMaterialItemsThunk());
  // }, [dispatch]);

  return (
    <TopBar pageName="物資管理" show="true" navigate="AddMaterialItem">
      {materialList &&
        materialList.map((material: any) => {
          return (
            <TouchableOpacity
              key={material.id}
              style={materialStyles.tableRow}
              onPress={() =>
                navigation.navigate('EditStackScreen', {
                  screen: 'EditMaterialItem',
                  params: {
                    id: material.id,
                    itemName: material.logistics_item,
                    remarks: material.logistics_remarks,
                  },
                })
              }
            >
              <Text fontSize={25}>{material.logistics_item}</Text>
              <Checkbox
                colorScheme="green"
                value={material.id}
                aria-label="Attend"
              />
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
    marginTop: 5,
  },
});
