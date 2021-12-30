import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '../TopBar';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text, Modal } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import CreateAndEditTopBar from '../CreateAndEditTopBar';
import { IRootState } from '../../redux/store';
import { useMutation } from 'react-query';
import { fetchUpdateGuest } from '../../api/guest';

export function EditGuest({ route, navigation }: any) {
  const eventId = useSelector((state: IRootState) => state.event.event?.id);
  const [showModal, setShowModal] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: JSON.stringify(route.params.name).replace(/\"/g, ''),
      phone: JSON.stringify(route.params.phone).replace(/\"/g, ''),
      relationship: JSON.stringify(route.params.relationship).replace(
        /\"/g,
        ''
      ),
    },
  });

  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) =>
  //     console.log(value, name, type)
  //   );
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  const mutation: any = useMutation(fetchUpdateGuest);

  const onSubmit = (data: any) => {
    data['guestId'] = route.params.id;
    mutation.mutate(data);
  };

  const deleteGuest = () => {
    const guestId = JSON.stringify(route.params.id);
    console.log(guestId);
    console.log('hello');
    navigation.goBack();
  };

  return (
    <CreateAndEditTopBar pageName="編輯賓客資料">
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              marginTop={5}
              placeholder="名字"
              style={editGuestStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <Text color="danger.500">請填寫名稱。</Text>}

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
              style={editGuestStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="phone"
        />
        {errors.phone?.type === 'required' && (
          <Text color="danger.500">請填寫你的電話號碼。</Text>
        )}
        {errors.phone?.type === 'maxLength' && (
          <Text color="danger.500">請填寫8位數字的電話號碼。</Text>
        )}
        {errors.phone?.type === 'minLength' && (
          <Text color="danger.500">請填寫8位數字的電話號碼。</Text>
        )}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              marginTop={5}
              placeholder="關係"
              style={editGuestStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="relationship"
        />
        {errors.relationship && <Text color="danger.500">請填寫關係。</Text>}

        <View style={editGuestStyles.buttonRow}>
          <Button marginTop={20} onPress={handleSubmit(onSubmit)}>
            提交
          </Button>

          <Button
            colorScheme="danger"
            marginTop={20}
            onPress={() => setShowModal(true)}
          >
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
                      deleteGuest();
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

        <View>
          {mutation.isError ? (
            <Text color="danger.500">錯誤：{mutation.error.message}</Text>
          ) : null}

          {mutation.isSuccess
            ? navigation.push('TabScreen', { screen: 'GuestScreen' })
            : null}
        </View>
      </View>
    </CreateAndEditTopBar>
  );
}

const editGuestStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
