import { Button, Checkbox, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getGuestListThunk } from '../../redux/guest/thunk';
import { IRootState } from '../../redux/store';

export default function GuestsScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const guestList = useSelector((state: IRootState) => state.guest.guestList);

  useEffect(() => {
    dispatch(getGuestListThunk());
  }, [dispatch]);

  return (
    <TopBar pageName="賓客名單">
      <View>
        <Button
          colorScheme="secondary"
          onPress={() =>
            navigation.navigate('CreateStackScreen', {
              screen: 'AddGuest',
            })
          }
        >
          新增
        </Button>

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
          <Text style={[guestStyles.tableColumn, guestStyles.tableHeader]}>
            會否出席
          </Text>
        </View>

        {guestList.map((guest) => {
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
                    phoneNumber: guest.phoneNumber,
                    relationship: guest.relationship,
                  },
                })
              }
            >
              <View style={guestStyles.tableColumn}>
                <Text fontSize={15}>{guest.name}</Text>
              </View>
              <View style={guestStyles.tableColumn}>
                <Text fontSize={15}>{guest.phoneNumber}</Text>
              </View>
              <View
                style={[guestStyles.tableColumn, guestStyles.tableRelationShip]}
              >
                <Text fontSize={15}>{guest.relationship}</Text>
              </View>
              <View style={guestStyles.tableColumn}>
                <Checkbox colorScheme="green" value={''} aria-label="Attend" />
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
