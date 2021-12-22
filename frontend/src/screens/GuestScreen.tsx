import { Modal, Input, Icon, Button } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../components/TopBar';
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

export default function GuestsScreen() {
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

  const onSubmit = (data) => {
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
        <View style={guestStyles.tableRow}>
          <Text style={guestStyles.tableColumn}>名字</Text>
          <Text style={guestStyles.tableColumn}>電話號碼</Text>
          <Text style={guestStyles.tableColumn}>關係</Text>
          <Text style={guestStyles.tableColumn}> </Text>
        </View>

        {guests.map((guest) => {
          return (
            <View key={guest.id} style={guestStyles.tableRow}>
              <Text style={guestStyles.tableColumn}>{guest.name}</Text>
              <Text style={guestStyles.tableColumn}>{guest.phoneNumber}</Text>
              <Text style={guestStyles.tableColumn}>{guest.relationship}</Text>
              <TouchableOpacity
                style={[guestStyles.tableColumn, guestStyles.icon]}
                onPress={() => setShowModal(true)}
              >
                <Icon as={Ionicons} name="create-outline" size={6} />
              </TouchableOpacity>

              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                  <Modal.CloseButton />
                  <Modal.Header>編輯資料</Modal.Header>
                  <Modal.Body>
                    <View>
                      <Controller
                        control={control}
                        rules={{
                          maxLength: 100,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <Input
                            placeholder="名字"
                            style={guestStyles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            keyboardType="ascii-capable"
                          />
                        )}
                        name="name"
                      />
                      <Controller
                        control={control}
                        rules={{
                          maxLength: 100,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <Input
                            placeholder="電話號碼"
                            style={guestStyles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            keyboardType="numeric"
                          />
                        )}
                        name="phoneNumber"
                      />
                      <Controller
                        control={control}
                        rules={{
                          maxLength: 100,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <Input
                            placeholder="關係"
                            style={guestStyles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        )}
                        name="relationship"
                      />
                    </View>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="ghost"
                      colorScheme="blueGray"
                      onPress={() => {
                        setShowModal(false);
                      }}
                    >
                      取消
                    </Button>

                    <Button onPress={handleSubmit(onSubmit)}>儲存</Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </View>
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
  },
  tableColumn: {
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    marginTop: 4,
  },
});
