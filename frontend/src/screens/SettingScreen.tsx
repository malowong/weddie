import {
  NativeBaseProvider,
  VStack,
  Center,
  Modal,
  FormControl,
  Input,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { styles } from '../../style';
import TopBar from '../components/TopBar';
import { useForm, Controller } from 'react-hook-form';

export default function SettingScreen() {
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(61210767);
  const [name, setName] = useState('朱天樂');
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: '',
    },
  });
  const onSubmit = (data) => {
    if (data.phoneNumber.length !== 8) {
      return;
    }

    const phoneNumber = parseInt(data.phoneNumber);
    setPhoneNumber(phoneNumber);
    setShowModal(false);
  };

  useEffect(() => {
    let sub = watch((data) => {
      console.log('update form data:', data);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <TopBar pageName="用戶設定">
      <Text style={styles.baseText}>{name}</Text>
      <Text style={styles.baseText}>電話號碼 {phoneNumber}</Text>

      <Button title="更改電話號碼" onPress={() => setShowModal(true)} />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>更改電話號碼</Modal.Header>
          <Modal.Body>
            <View>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={settingStyles.input}
                    placeholder="電話號碼"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="numeric"
                  />
                )}
                name="phoneNumber"
              />
              {errors.phoneNumber && <Text>請輸入電話號碼</Text>}
            </View>
          </Modal.Body>
          <Modal.Footer>
            <Button
              title="取消"
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModal(false);
              }}
            />

            <Button title="儲存" onPress={handleSubmit(onSubmit)} />
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </TopBar>
  );
}

const settingStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
});
