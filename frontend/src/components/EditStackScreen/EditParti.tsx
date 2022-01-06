import React, { useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {
  Input,
  Button,
  Text,
  Modal,
  View,
  Select,
  CheckIcon,
} from 'native-base';
import CreateAndEditTopBar from '../CreateAndEditTopBar';
import { roleList } from '../../../utils/roleList';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';

export function EditParti({ route, navigation }: any) {
  const { height, width } = useWindowDimensions();
  const [id] = useState(route.params.id);
  const [name] = useState(route.params.name);
  const [phone] = useState(route.params.phone);
  const [roleId] = useState(route.params.roleId);
  const [showModal, setShowModal] = useState(false);
  const role = useSelector((state: IRootState) => state.event.event?.role);
  const eventId = useSelector(
    (state: IRootState) => state.event.event?.wedding_event_id
  );
  console.log(route.params);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: name,
      phone: JSON.stringify(phone).replace(/\"/g, ''),
      roleId: '',
    },
  });

  const onSubmit = (data: any) => {
    data['wedding_event_id'] = eventId;
    data['role_id'] = data.roleId;
    data['partiId'] = id;
    delete data['roleId'];
    String(data['phone']);
    console.log('submit form data:', data);
  };

  return (
    <CreateAndEditTopBar pageName="編輯人員資料">
      <View display="flex" flexDirection="column">
        <View height={height * 0.65}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                marginTop={5}
                placeholder="名稱"
                onBlur={onBlur}
                size="xl"
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
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
                size="xl"
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

          <Controller
            name="roleId"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { value, onChange } }) => (
              <>
                <Select
                  defaultValue={String(roleId)}
                  marginTop={5}
                  minWidth="200"
                  accessibilityLabel="請選擇角色"
                  placeholder="請選擇角色"
                  _selectedItem={{
                    bg: 'teal.600',
                    endIcon: <CheckIcon size="5" />,
                  }}
                  fontSize="md"
                  onValueChange={onChange}
                >
                  {roleList
                    .filter((roleObject) => roleObject.role !== role)
                    .map((roleObject) => {
                      return (
                        <Select.Item
                          label={roleObject.role}
                          value={String(roleObject.id)}
                        />
                      );
                    })}
                </Select>
              </>
            )}
          />
        </View>

        <View style={editPartiStyles.buttonRow}>
          <Button onPress={handleSubmit(onSubmit)}>儲存</Button>

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
