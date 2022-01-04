import { View, Text, Input, Button } from 'native-base';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useWindowDimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import CreateAndEditTopBar from '../CreateAndEditTopBar';

export function AddParti({ navigation }: { navigation: any }) {
  const { height, width } = useWindowDimensions();
  const eventId = useSelector((state: IRootState) => state.event.event?.id);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: '',
      role: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('submit form data:', data);
    data['wedding_event_id'] = eventId;
    String(data['phone']);
    // mutation.mutate(data);
  };

  return (
    <CreateAndEditTopBar pageName="新增賓客">
      <View display="flex" flexDirection="column">
        <View height={height * 0.65}>
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
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
              />
            )}
            name="phone"
          />
          {errors.phone?.type === 'required' && (
            <Text color="danger.500">請填寫人員電話號碼。</Text>
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
                placeholder="角色"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="role"
          />
          {errors.role && <Text color="danger.500">請填寫角色。</Text>}
        </View>

        <View>
          <Button onPress={handleSubmit(onSubmit)}>提交</Button>
        </View>

        {/* <View> */}
        {/* <View>
          {mutation.isError ? (
            <Text color="danger.500">錯誤：{mutation.error.message}</Text>
          ) : null}

          {mutation.isSuccess ? navigation.goBack() : null}
        </View> */}
        {/* </View> */}
      </View>
    </CreateAndEditTopBar>
  );
}
