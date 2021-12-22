import { Modal, Icon, Button, Checkbox, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';
import { useForm, Controller } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';

const guests = [
  {
    id: 1,
    name: 'Matthew',
    phoneNumber: 12345678,
    relationship: '弟弟同學',
  },
  {
    id: 2,
    name: 'Dennis',
    phoneNumber: 23456781,
    relationship: '家姐同學',
  },
  {
    id: 3,
    name: 'Billy',
    phoneNumber: 23475899,
    relationship: '新郎幼稚園同學',
  },
];

export default function GuestsScreen({ navigation }: { navigation: any }) {
  const [showModal, setShowModal] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phoneNumber: '',
      relationship: '',
    },
  });

  const onSubmit = (data: any) => {
    if (data.phoneNumber.length !== 8) {
      return;
    }
  };

  useEffect(() => {
    let sub = watch((data) => {
      console.log('update form data:', data);
    });
    return () => sub.unsubscribe();
  }, [watch]);

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

        {guests.map((guest) => {
          return (
            <TouchableOpacity
              key={guest.id}
              style={guestStyles.tableRow}
              onPress={() =>
                navigation.navigate('EditStackScreen', {
                  screen: 'EditGuest',
                  params: {
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
                <Checkbox colorScheme="green" value={''} aria-label="Attend"/>
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
