import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text, Modal } from 'native-base';
import { useDispatch } from 'react-redux';
import CreateAndEditTopBar from '../CreateAndEditTopBar';

export function EditBudgetItem({ route, navigation }: any) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      itemName: JSON.stringify(route.params.category).replace(/\"/g, ''),
      amount: JSON.stringify(route.params.amount),
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: any) => {
    data.amount = parseInt(data.amount);
    console.log(data);
  };

  const deleteBudgetItem = () => {
    const itemId = JSON.stringify(route.params.id);
    console.log(itemId);
    console.log('hello');
    navigation.goBack();
  };

  return (
    <CreateAndEditTopBar pageName="編輯支出">
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
              style={editBudgetStyles.input}
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
            <Input
              marginTop={5}
              placeholder="金額"
              style={editBudgetStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="amount"
        />
        {errors.amount && <Text>This is required.</Text>}

        <View style={editBudgetStyles.buttonRow}>
          <Button marginTop={20} onPress={handleSubmit(onSubmit)}>
            提交
          </Button>
          <Button
            colorScheme="danger"
            marginTop={20}
            onPress={() => setShowModal(true)}
          >
            移除支出
          </Button>

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.Header>確定移除支出？</Modal.Header>
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
                      deleteBudgetItem();
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
      </View>
    </CreateAndEditTopBar>
  );
}

const editBudgetStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
