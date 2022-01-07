import { Modal, Input, Button, View, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import TopBar from '../../components/TopBar';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/thunk';
import { IRootState } from '../../redux/store';
import { changeEvent } from '../../redux/event/actions';

export default function SettingScreen({ navigation }: { navigation: any }) {
  const role = useSelector((state: IRootState) => state.event.event?.role);
  const eventId = useSelector((state: IRootState) => state.event.event?.wedding_event_id)
  console.log("role", role)
  console.log("eventId", eventId)

  const dispatch = useDispatch();
  const user = useSelector((state: IRootState) => state.auth.user)!;
  const [showModal, setShowModal] = useState(false);
  const { height, width } = useWindowDimensions();
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

  const onSubmit = (data: any) => {
    const phoneNumber = parseInt(data.phoneNumber);

    setShowModal(false);
  };

  return (
    <TopBar pageName="用戶設定" show="false" navigate="">
      <View>
        <View
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height={height * 0.5}
        >
          <Text fontSize={20}>{user ? user.nickname : null}</Text>

          <Text fontSize={20} marginTop="3">
            {role ? role : null}
          </Text>

          <Text fontSize={20} marginTop="3">
            {user ? user.email : null}
          </Text>

          <Text fontSize={20} marginTop="3">
            {user ? user.phone : null}
          </Text>
        </View>

        {/* <Button
          colorScheme="dark"
          marginTop="8"
          onPress={() => setShowModal(true)}
        >
          更改電話號碼
        </Button> */}

        <View display="flex" justifyContent="space-around" flexDirection="row">
          <Button
            variant="outline"
            colorScheme="red"
            marginTop="8"
            onPress={() => {
              dispatch(changeEvent());
            }}
          >
            切換婚禮
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
                        placeholder="請輸入新電話號碼"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        keyboardType="numeric"
                      />
                    )}
                    name="phoneNumber"
                  />
                  {errors.phoneNumber && (
                    <Text color="red.500" marginLeft={1} marginTop={2}>
                      請輸入電話號碼
                    </Text>
                  )}
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

          <Button
            variant="outline"
            color="#ffff1a"
            marginTop="8"
            onPress={() => {
              dispatch(logoutThunk());
              navigation.navigate('AuthStackScreen', {screen: 'WelcomingScreen'})
            }}
          >
            登出
          </Button>
        </View>
      </View>
    </TopBar>
  );
}

const settingStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
});
