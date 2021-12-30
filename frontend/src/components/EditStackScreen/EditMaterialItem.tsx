import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text, TextArea, Modal, FormControl } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import CreateAndEditTopBar from '../CreateAndEditTopBar';
import { IRootState } from '../../redux/store';
import { useMutation } from 'react-query';
import {
  fetchDeleteLogisticsItem,
  fetchUpdateLogisticsItem,
} from '../../api/logistics';

export function EditMaterialItem({ route, navigation }: any) {
  const [remarks] = useState(route.params.remarks);

  let remarksInput = '';
  if (!remarks) {
    remarksInput = '';
  } else {
    remarksInput = JSON.stringify(remarks).replace(/\"/g, '');
  }

  const eventId = useSelector((state: IRootState) => state.event.event?.id);
  const [showModal, setShowModal] = useState(false);
  const [itemName] = useState(route.params.itemName);
  const [id] = useState(route.params.id);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      itemName: JSON.stringify(itemName).replace(/\"/g, ''),
      remarks: remarksInput,
    },
  });

  const updateItemMutation: any = useMutation(fetchUpdateLogisticsItem);
  const deleteItemMutation: any = useMutation(fetchDeleteLogisticsItem);

  const onSubmit = (data: any) => {
    data['materialItemId'] = id;
    updateItemMutation.mutate(data);
  };

  const deleteMaterialItem = () => {
    deleteItemMutation.mutate(route.params.id);
  };

  return (
    <CreateAndEditTopBar pageName="編輯物資">
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              marginTop={5}
              placeholder="物品"
              style={editMaterialStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="itemName"
        />
        {errors.itemName && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextArea
              marginTop={5}
              placeholder="備註"
              style={editMaterialStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="remarks"
        />

        <View style={editMaterialStyles.buttonRow}>
          <Button marginTop={20} onPress={handleSubmit(onSubmit)}>
            提交
          </Button>
          <Button
            colorScheme="danger"
            marginTop={20}
            onPress={() => setShowModal(true)}
          >
            移除物資
          </Button>

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.Header>確定移除物資？</Modal.Header>
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
                      deleteMaterialItem();
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
          {updateItemMutation.isError ? (
            <Text color="danger.500">
              錯誤：{updateItemMutation.error.message}
            </Text>
          ) : null}

          {updateItemMutation.isSuccess
            ? navigation.push('TabScreen', { screen: 'MaterialScreen' })
            : null}
        </View>

        <View>
          {deleteItemMutation.isError ? (
            <Text color="danger.500">
              錯誤：{deleteItemMutation.error.message}
            </Text>
          ) : null}

          {deleteItemMutation.isSuccess
            ? navigation.navigate('TabScreen', { screen: 'MaterialScreen' })
            : null}
        </View>
      </View>
    </CreateAndEditTopBar>
  );
}

const editMaterialStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
