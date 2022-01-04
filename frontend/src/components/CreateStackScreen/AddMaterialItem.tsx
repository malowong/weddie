import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text, View, TextArea } from 'native-base';
import { useSelector } from 'react-redux';
import CreateAndEditTopBar from '../CreateAndEditTopBar';
import { IRootState } from '../../redux/store';
import { useMutation } from 'react-query';
import { fetchAddLogisticsItem } from '../../api/logistics';

export function AddMaterialItem({ navigation }: { navigation: any }) {
  const { height, width } = useWindowDimensions();
  const eventId = useSelector((state: IRootState) => state.event.event?.id);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      itemName: '',
      remarks: '',
    },
  });

  const mutation: any = useMutation(fetchAddLogisticsItem);

  const onSubmit = (data: any) => {
    data['wedding_event_id'] = eventId;
    console.log('submit from data: ', data);
    mutation.mutate(data);
  };

  return (
    <CreateAndEditTopBar pageName="新增物資">
      <View display="flex" flexDirection="column">
        <View height={height * 0.65}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                marginTop={5}
                placeholder="物品"
                // style={addMaterialStyles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="itemName"
          />
          {errors.itemName && <Text color="danger.500">請填寫物品。</Text>}
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextArea
                marginTop={5}
                placeholder="備註"
                // style={addMaterialStyles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="remarks"
          />
        </View>

        <View>
          <Button onPress={handleSubmit(onSubmit)}>提交</Button>
        </View>

        <View>
          {mutation.isError ? (
            <Text color="danger.500">錯誤：{mutation.error.message}</Text>
          ) : null}

          {mutation.isSuccess ? navigation.goBack() : null}
        </View>
      </View>
    </CreateAndEditTopBar>
  );
}

const addMaterialStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
});
