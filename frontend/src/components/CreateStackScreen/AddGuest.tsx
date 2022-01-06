import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text, View } from 'native-base';
import { useSelector } from 'react-redux';
import CreateAndEditTopBar from '../CreateAndEditTopBar';
import { useMutation } from 'react-query';
import { fetchAddGuest } from '../../api/guest';
import { IRootState } from '../../redux/store';

export function AddGuest({ navigation }: { navigation: any }) {
  const { height, width } = useWindowDimensions();
  const eventId = useSelector(
    (state: IRootState) => state.event.event?.wedding_event_id
  );

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      relationship: '',
    },
  });

  const mutation: any = useMutation(fetchAddGuest);

  const onSubmit = (data: any) => {
    console.log('submit form data:', data);
    data['wedding_event_id'] = eventId;
    String(data['phone']);
    mutation.mutate(data);
  };

  return (
    <CreateAndEditTopBar pageName="新增賓客">
      <View display="flex" flexDirection="column">
        <View height={height * 0.75}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                marginTop={5}
                placeholder="名稱"
                // style={addMaterialStyles.input}
                onBlur={onBlur}
                size="xl"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
          {errors.name && <Text color="danger.500">請填寫名稱。</Text>}

          <Controller
            control={control}
            rules={{
              maxLength: 8,
              minLength: 8,
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                marginTop={5}
                placeholder="電話號碼"
                // style={addMaterialStyles.input}
                onBlur={onBlur}
                size="xl"
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
              />
            )}
            name="phone"
          />
          {errors.phone?.type === 'required' && (
            <Text color="danger.500">請填寫賓客電話號碼。</Text>
          )}
          {errors.phone?.type === 'maxLength' && (
            <Text color="danger.500">請填寫8位數字的電話號碼。</Text>
          )}
          {errors.phone?.type === 'minLength' && (
            <Text color="danger.500">請填寫8位數字的電話號碼。</Text>
          )}

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
                // style={addMaterialStyles.input}
                onBlur={onBlur}
                size="xl"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="relationship"
          />
          {errors.relationship && <Text color="danger.500">請填寫關係。</Text>}
        </View>

        <View>
          {mutation.isError ? (
            <Text color="danger.500">抱歉：伺服器發生錯誤</Text>
          ) : null}

          {mutation.isSuccess ? navigation.goBack() : null}
        </View>
      </View>

      <View>
        <Button onPress={handleSubmit(onSubmit)}>提交</Button>
      </View>
    </CreateAndEditTopBar>
  );
}

const addMaterialStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
});
