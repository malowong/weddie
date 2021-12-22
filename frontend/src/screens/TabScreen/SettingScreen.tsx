import { Modal, Input, Button, View, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import TopBar from '../../components/TopBar';
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
      <View
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100%"
      >
        <Text fontSize={20}>{name}</Text>
        <Text fontSize={20} marginTop="2">
          電話號碼 {phoneNumber}
        </Text>

        <Button
          colorScheme="dark"
          marginTop="8"
          onPress={() => setShowModal(true)}
        >
          更改電話號碼
        </Button>

        <Button
          variant="outline"
          colorScheme="danger"
          marginTop="8"
          onPress={() => console.log('hello')}
        >
          登出
        </Button>

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
                    <Input
                      style={settingStyles.input}
                      placeholder={String(phoneNumber)}
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
    </TopBar>
  );
}

const settingStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
});
