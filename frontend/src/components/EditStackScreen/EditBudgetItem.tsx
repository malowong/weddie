import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text, Modal, Select, TextArea } from 'native-base';
import { useDispatch } from 'react-redux';
import CreateAndEditTopBar from '../CreateAndEditTopBar';

export function EditBudgetItem({ route, navigation }: any) {
  const [category, setCategory] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [id] = route.params.id;
  const [description] = route.params.description;
  const [amount] = route.params.amount;
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      itemName: JSON.stringify(route.params.category).replace(/\"/g, ''),
      amount: JSON.stringify(amount),
      description: JSON.stringify(description).replace(/\"/g, ''),
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
        <Select
          selectedValue={category}
          placeholder="請選擇種類"
          minWidth="200"
          marginTop={5}
          accessibilityLabel="請選擇種類"
          placeholderTextColor="gray.700"
          _selectedItem={{
            bg: 'teal.600',
          }}
          mt={1}
          onValueChange={(itemValue) => {
            setCategory(itemValue);
          }}
        >
          <Select.Item label="攝影" value="攝影" />
          <Select.Item label="婚前中式禮儀" value="婚前中式禮儀" />
          <Select.Item label="派帖" value="派帖" />
          <Select.Item label="美容" value="美容" />
          <Select.Item label="早上敬茶、出門入門" value="早上敬茶、出門入門" />
          <Select.Item label="証婚" value="証婚" />
          <Select.Item label="晚上婚宴" value="晚上婚宴" />
          <Select.Item label="婚禮服飾" value="婚禮服飾" />
          <Select.Item label="婚禮當日化妝" value="婚禮當日化妝" />
          <Select.Item label="交通" value="交通" />
          <Select.Item label="回門" value="回門" />
          <Select.Item label="其他" value="其他" />
        </Select>

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextArea
              marginTop={5}
              placeholder="事項"
              style={editBudgetStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="description"
        />

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
