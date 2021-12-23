import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import CreateAndEditTopBar from '../CreateAndEditTopBar';

export function AddGuest({ navigation }: { navigation: any }) {
  // const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phoneNumber: '',
      relationship: '',
    },
  });

  const onSubmit = (data: any) => {
    if (data.phoneNumber.length !== 8) {
      return;
    }
  };

  useEffect(() => {
    let sub = watch((data) => {
      console.log('update form data:', data);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <CreateAndEditTopBar pageName="新增賓客">
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              marginTop={5}
              placeholder="名稱"
              style={addMaterialStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <Text>This is required.</Text>}

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
              style={addMaterialStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="phoneNumber"
        />
        {errors.phoneNumber && <Text>This is required.</Text>}

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
              style={addMaterialStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="relationship"
        />
        {errors.relationship && <Text>This is required.</Text>}

        <Button marginTop={20} onPress={handleSubmit(onSubmit)}>
          提交
        </Button>
      </View>
    </CreateAndEditTopBar>
  );
}

const addMaterialStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
});
