import {
  NativeBaseProvider,
  Center,
  VStack,
  Button,
  Icon,
  Modal,
  FormControl,
  Input,
} from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../style';
import TopBar from '../components/TopBar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const participants = [
  {
    name: 'Matthew',
    phoneNumber: 12345678,
    position: '兄弟',
  },
  {
    name: 'Dennis',
    phoneNumber: 23456781,
    position: '兄弟',
  },
  {
    name: 'Billy',
    phoneNumber: 23475899,
    position: '姊妹',
  },
];

export default function ParticipantsScreen() {
  const [showModal, setShowModal] = useState(false);

  return (
    <TopBar pageName="人員名單">
      <View>
        <View style={partiStyles.tableRow}>
          <Text>名字</Text>
          <Text>電話號碼</Text>
          <Text>崗位</Text>
        </View>

        {participants.map((participant, idx) => {
          return (
            <View key={idx} style={partiStyles.tableRow}>
              <Text style={partiStyles.tableColumn}>{participant.name}</Text>
              <Text style={partiStyles.tableColumn}>
                {participant.phoneNumber}
              </Text>
              <Text style={partiStyles.tableColumn}>
                {participant.position}
              </Text>
              <TouchableOpacity onPress={() => setShowModal(true)}>
                <Icon as={Ionicons} name="create-outline" />
              </TouchableOpacity>
              {/* <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                  <Modal.CloseButton />
                  <Modal.Header>Contact Us</Modal.Header>
                  <Modal.Body>
                    <FormControl>
                      <FormControl.Label>Name</FormControl.Label>
                      <Input />
                    </FormControl>
                    <FormControl mt="3">
                      <FormControl.Label>Email</FormControl.Label>
                      <Input />
                    </FormControl>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        variant="ghost"
                        colorScheme="blueGray"
                        onPress={() => {
                          setShowModal(false);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onPress={() => {
                          setShowModal(false);
                        }}
                      >
                        Save
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal> */}
            </View>
          );
        })}
      </View>
    </TopBar>
  );
}

const partiStyles = StyleSheet.create({
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tableColumn: {
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
  },
});
