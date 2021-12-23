import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '../TopBar';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import CreateAndEditTopBar from '../CreateAndEditTopBar';

export function AddBudgetItem({ navigation }: { navigation: any }) {
  // const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: '',
      amount: '',
    },
  });
  const onSubmit = (data: any) => {
    data.amount = parseInt(data.amount);
    console.log(data);
  };

  return (
    <CreateAndEditTopBar pageName="新增支出">
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              marginTop={5}
              placeholder="種類"
              style={addBudgetStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="category"
        />
        {errors.category && <Text>This is required.</Text>}

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
