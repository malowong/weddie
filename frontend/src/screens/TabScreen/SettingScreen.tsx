import { Modal, Input, Button, View, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import TopBar from '../../components/TopBar';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/thunk';
import { useQuery } from 'react-query';
import { config } from '../../../app.json';
import { IRootState } from '../../redux/store';

export default function SettingScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const userID = useSelector((state: IRootState) => state.auth);
  console.log(userID);
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(61210767);

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

  const { isLoading, error, data } = useQuery('userData', async () => {
    const postData = (
      await fetch(`${config.BACKEND_URL}/api/users/info`)
    ).json();

    return postData;
  });

  if (isLoading)
    return (
      <Text marginTop={400} marginLeft={160}>
        Loading...
      </Text>
    );
  if (error)
    return (
      <Text marginTop={400} marginLeft={120}>
        An error has occurred
      </Text>
    );
  const { userInfo } = data;

  const onSubmit = (data: any) => {
    if (data.phoneNumber.length !== 8) {
      return;
    }

    const phoneNumber = parseInt(data.phoneNumber);
    setPhoneNumber(phoneNumber);
    setShowModal(false);
  };

  // useEffect(() => {
  //   let sub = watch((data) => {
  //     console.log('update form data:', data);
  //   });
  //   return () => sub.unsubscribe();
  // }, [watch]);

  return (
    <TopBar pageName="用戶設定" show="false" navigate="">
      <View
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100%"
      >
        <Text fontSize={20}>{userInfo.nickname}</Text>

        <Text fontSize={20} marginTop="2">
          {userInfo.email}
        </Text>

        <Text fontSize={20} marginTop="2">
          電話號碼 {userInfo.phone}
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
          colorScheme="red"
          marginTop="8"
          onPress={() => {
            dispatch(logoutThunk());
            navigation.navigate('LoginScreen');
          }}
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
