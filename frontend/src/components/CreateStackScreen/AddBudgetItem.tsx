import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '../TopBar';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text, Select, TextArea } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import CreateAndEditTopBar from '../CreateAndEditTopBar';
import { useMutation } from 'react-query';
import { fetchCreateBudgetItem } from '../../api/expenditure';

export function AddBudgetItem({ navigation }: { navigation: any }) {
  const [category, setCategory] = useState('');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: '',
      amount: '',
      description: '',
    },
  });

  const mutation: any = useMutation(fetchCreateBudgetItem);

  const onSubmit = (data: any) => {
    data.amount = parseInt(data.amount);
    data.category = category;
    console.log('submit form data:', data);
    mutation.mutate(data);
  };

  useEffect(() => {
    console.log('category:', category);
  }, [category]);

  return (
    <CreateAndEditTopBar pageName="新增支出">
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
              style={addBudgetStyles.input}
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
              style={addBudgetStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="amount"
        />
        {errors.amount && <Text>This is required.</Text>}

        <Button marginTop={20} onPress={handleSubmit(onSubmit)}>
          提交
        </Button>
      </View>
    </CreateAndEditTopBar>
  );
}

const addBudgetStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
});
