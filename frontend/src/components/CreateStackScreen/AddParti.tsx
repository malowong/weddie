import { View, Text, Input, Button, Select, CheckIcon } from 'native-base';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useWindowDimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import CreateAndEditTopBar from '../CreateAndEditTopBar';
import { roleList } from '../roleList';

export function AddParti({ navigation }: { navigation: any }) {
  const { height, width } = useWindowDimensions();
  const eventId = useSelector((state: IRootState) => state.event.event?.id);
  const role = useSelector((state: IRootState) => state.event.event?.role);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: '',
      roleId: '',
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
                size="xl"
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
            name="roleId"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { value, onChange } }) => (
              <>
                <Select
                  marginTop={5}
                  minWidth="200"
                  accessibilityLabel="請選擇角色"
                  placeholder="請選擇角色"
                  _selectedItem={{
                    bg: 'teal.600',
                    endIcon: <CheckIcon size="5" />,
                  }}
                  fontSize="md"
                  onValueChange={onChange}
                >
                  {roleList
                    .filter((roleObject) => roleObject.role !== role)
                    .map((roleObject) => {
                      return (
                        <Select.Item
                          label={roleObject.role}
                          value={String(roleObject.id)}
                        />
                      );
                    })}
                </Select>
              </>
            )}
          />
          {errors.roleId?.type === 'required' && (
            <Text color="danger.500" marginTop={1}>
              請選擇角色。
            </Text>
          )}
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
