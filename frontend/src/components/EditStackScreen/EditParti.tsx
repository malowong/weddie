import React, { useEffect, useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text, Modal, View } from 'native-base';
import CreateAndEditTopBar from '../CreateAndEditTopBar';

export function EditParti({ route, navigation }: any) {
  const { height, width } = useWindowDimensions();
  const [phone] = useState(route.params.phone);
  const [role] = useState(route.params.role);
  const [showModal, setShowModal] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: JSON.stringify(phone).replace(/\"/g, ''),
      role: JSON.stringify(role),
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <CreateAndEditTopBar pageName="編輯人員資料">
      <View display="flex" flexDirection="column">
        <View height={height * 0.65}>
          <Controller
            control={control}
            rules={{
              maxLength: 8,
              minLength: 8,
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                marginTop={5}
                placeholder="電話號碼"
                // style={editGuestStyles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
              />
            )}
            name="phone"
          />
          {errors.phone?.type === 'required' && (
            <Text color="danger.500">請填寫賓客電話號碼。</Text>
          )}
          {errors.phone?.type === 'maxLength' && (
            <Text color="danger.500">請填寫8位數字的電話號碼。</Text>
          )}
          {errors.phone?.type === 'minLength' && (
            <Text color="danger.500">請填寫8位數字的電話號碼。</Text>
          )}
        </View>

        <View style={editPartiStyles.buttonRow}>
          <Button onPress={handleSubmit(onSubmit)}>更改</Button>

          <Button colorScheme="danger" onPress={() => setShowModal(true)}>
            移除賓客資料
          </Button>

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.Header>確定移除賓客資料？</Modal.Header>
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
                    colorScheme="danger"
                    onPress={() => {
                      // removeGuest();
                      setShowModal(false);
                    }}
                  >
                    確定
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </View>

        {/* <View>
          {updateGuestMutation.isError ? (
            <Text color="danger.500">
              錯誤：{updateGuestMutation.error.message}
            </Text>
          ) : null}

          {updateGuestMutation.isSuccess ? navigation.goBack() : null}

          {removeGuestMutation.isError ? (
            <Text color="danger.500">
              錯誤：{removeGuestMutation.error.message}
            </Text>
          ) : null}
          {removeGuestMutation.isSuccess ? navigation.goBack() : null}
        </View> */}
      </View>
    </CreateAndEditTopBar>
  );
}
const editPartiStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
