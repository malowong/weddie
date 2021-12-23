import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text, TextArea } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import CreateAndEditTopBar from '../CreateAndEditTopBar';

export function EditMaterialItem({ route, navigation }: any) {
  let remarks = '';
  if (!route.params.remarks) {
    remarks = '';
  } else {
    remarks = JSON.stringify(route.params.remarks).replace(/\"/g, '');
  }

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      itemName: JSON.stringify(route.params.itemName).replace(/\"/g, ''),
      remarks: remarks,
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

        <Button marginTop={20} onPress={handleSubmit(onSubmit)}>
          提交
        </Button>
      </View>
    </CreateAndEditTopBar>
  );
}

const editMaterialStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
});
