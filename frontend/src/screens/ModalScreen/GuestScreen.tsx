import { Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';
import { useDispatch, useSelector } from 'react-redux';
import { getGuestListThunk } from '../../redux/guest/thunk';
import { IRootState } from '../../redux/store';
import { useQuery } from 'react-query';
import { config } from '../../../app.json';
import { LoadingMsg } from '../../components/LoadingsMsg';
import { ErrorMsg } from '../../components/ErrorMsg';

export default function GuestsScreen({ navigation }: { navigation: any }) {
  const { isLoading, error, data } = useQuery('userData', async () => {
    const postData = (
      await fetch(`${config.BACKEND_URL}/api/guest/list`)
    ).json();

    return postData;
  });

  if (isLoading) return <LoadingMsg />;

  if (error) return <ErrorMsg />;

  console.log('data: ', data.guestList);

  const guestList = data.guestList;

  // useEffect(() => {
  //   (async () => {
  //     await fetch(`${config.BACKEND_URL}/api/guest/list`);
  //   })();
  // }, []);

  return (
    <TopBar pageName="賓客名單" show="true" navigate="AddGuest">
      <View>
        <View style={guestStyles.tableRow}>
          <Text style={[guestStyles.tableColumn, guestStyles.tableHeader]}>
            名稱
          </Text>
          <Text style={[guestStyles.tableColumn, guestStyles.tableHeader]}>
            電話號碼
          </Text>
          <Text
            style={[
              guestStyles.tableColumn,
              guestStyles.tableRelationShip,
              guestStyles.tableHeader,
            ]}
          >
            關係
          </Text>
        </View>
        {/* <Text>{data.guestList.length}</Text> */}
        {guestList.map((guest: any) => {
          return (
            <TouchableOpacity
              key={guest.id}
              style={guestStyles.tableRow}
              onPress={() =>
                navigation.navigate('EditStackScreen', {
                  screen: 'EditGuest',
                  params: {
                    id: guest.id,
                    name: guest.name,
                    phone: guest.phone,
                    relationship: guest.relationship,
                  },
                })
              }
            >
              <View style={guestStyles.tableColumn}>
                <Text fontSize={15}>{guest.name}</Text>
              </View>
              <View style={guestStyles.tableColumn}>
                <Text fontSize={15}>{guest.phone}</Text>
              </View>
              <View
                style={[guestStyles.tableColumn, guestStyles.tableRelationShip]}
              >
                <Text fontSize={15}>{guest.relationship}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </TopBar>
  );
}

const guestStyles = StyleSheet.create({
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
  },
  tableColumn: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 17,
  },
  tableRelationShip: {
    flex: 1.5,
  },
  tableHeader: {
    fontWeight: 'bold',
  },
});
