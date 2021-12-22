import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import CreateandEditTopBar from '../CreateandEditTopBar';

export function AddGuest({ navigation }: { navigation: any }) {
  // const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      itemName: '',
      amount: '',
    },
  });
  const onSubmit = (data: any) => {
    data.amount = parseInt(data.amount);
    console.log(data);
  };

  return (
    <CreateandEditTopBar pageName="新增物資">
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
              style={addMaterialStyles.input}
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
              style={addMaterialStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="amount"
        />
        {errors.amount && <Text>This is required.</Text>}

        <Button marginTop={20} onPress={handleSubmit(onSubmit)}>
          提交
        </Button>
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Button marginTop={5} colorScheme="secondary">
          返回
        </Button>
      </TouchableOpacity>
    </CreateandEditTopBar>
  );
}

const addMaterialStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
});
