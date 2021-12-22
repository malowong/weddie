import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '../TopBar';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

export function EditGuest({ route, navigation }: any) {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: JSON.stringify(route.params.name).replace(/\"/g, ''),
      phoneNumber: JSON.stringify(route.params.phoneNumber),
      relationship: JSON.stringify(route.params.relationship).replace(
        /\"/g,
        ''
      ),
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

  return (
    <TopBar pageName="編輯賓客名單">
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
              style={editMaterialStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
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
              placeholder="電話號碼"
              style={editMaterialStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="phoneNumber"
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
              placeholder="關係"
              style={editMaterialStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="relationship"
        />

        <Button marginTop={20} onPress={handleSubmit(onSubmit)}>
          提交
        </Button>
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Button marginTop={5} colorScheme="secondary">
          返回
        </Button>
      </TouchableOpacity>
    </TopBar>
  );
}

const editMaterialStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
});
