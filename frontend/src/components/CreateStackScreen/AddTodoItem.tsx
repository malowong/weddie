import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, TextArea, Text, View } from 'native-base';
import CreateAndEditTopBar from '../CreateAndEditTopBar';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import { useMutation } from 'react-query';
import { fetchAddTodoItem } from '../../api/todo';

export function AddTodoItem({ navigation }: { navigation: any }) {
  const eventId = useSelector((state: IRootState) => state.event.event?.id);
  const [date, setDate] = useState<Date>(new Date());
  console.log('add form:', date);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      itemName: '',
      dueDate: date,
      remarks: '',
      status: false,
    },
  });

  // useEffect(() => {
  //   let sub = watch((data) => {
  //     console.log('update form data:', data);
  //   });
  //   return () => sub.unsubscribe();
  // }, [watch]);

  const mutation: any = useMutation(fetchAddTodoItem);

  const onSubmit = (data: any) => {
    data.status = false;
    data['wedding_event_id'] = eventId;
    data['dueDate'] = date;
    console.log('submit form data:', data);
    mutation.mutate(data);
  };

  return (
    <CreateAndEditTopBar pageName="新增待辦事項">
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              marginTop={5}
              placeholder="事項"
              style={addTodoItemStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="itemName"
        />
        {errors.itemName && (
          <Text color="danger.500" marginTop={2} marginLeft={1}>
            請填寫待辦事項。
          </Text>
        )}

        <Text marginLeft={1} marginTop={5} fontSize={18}>
          到期日
        </Text>

        <View marginTop={2} alignItems="center" width="5%">
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            style={{ width: 230 }}
            display="default"
            onChange={(event: any, selectedDate?: Date) => {
              const currentDate = selectedDate || date;
              setDate(currentDate);
            }}
          />
        </View>

        {date.toISOString() < new Date().toISOString() && (
          <Text color="danger.500" marginTop={2} marginLeft={2.5}>
            請選擇正確的日子。
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextArea
              marginTop={5}
              placeholder="備註"
              style={addTodoItemStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="remarks"
        />

        <Button marginTop={20} onPress={handleSubmit(onSubmit)}>
          提交
        </Button>

        <View>
          {mutation.isError ? (
            <Text color="danger.500">錯誤：{mutation.error.message}</Text>
          ) : null}

          {mutation.isSuccess
            ? navigation.push('TabScreen', { screen: 'CheckListScreen' })
            : null}
        </View>
      </View>
    </CreateAndEditTopBar>
  );
}

const addTodoItemStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
});
