import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TopBar from './TopBar';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function AddMaterialItem({ navigation }: { navigation: any }) {
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
  const onSubmit = (data) => console.log(data);

  return (
    <TopBar pageName="新增物資">
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
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
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
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

        <Button onPress={handleSubmit(onSubmit)}>提交</Button>
      </View>

      <TouchableOpacity>
        <Button colorScheme="secondary" onPress={() => navigation.goBack()}>
          返回
        </Button>
      </TouchableOpacity>
    </TopBar>
  );
}

const addMaterialStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
});
