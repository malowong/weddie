import {
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
} from 'native-base';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../style';

export default function SettingScreen() {
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(61210767);
  const [name, setName] = useState('朱天樂');

  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>用戶設定</Text>
      <Text style={styles.baseText}>{name}</Text>
      <Text style={styles.baseText}>電話號碼 {phoneNumber}</Text>

      <Button mt="5" onPress={() => setShowModal(true)} bg="secondary.600">
        更改電話號碼
      </Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>更改電話號碼</Modal.Header>
          <Modal.Body>
            <FormControl mt="1">
              <Input
                placeholder="電話號碼"
                type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
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
                取消
              </Button>
              <Button
                bg="secondary.600"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                儲存
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
}
