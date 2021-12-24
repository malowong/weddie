import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, TextArea, Text, View } from 'native-base';
import CreateAndEditTopBar from '../CreateAndEditTopBar';
import DateTimePicker from '@react-native-community/datetimepicker';

export function AddTodoItem({ navigation }: { navigation: any }) {
  const [date, setDate] = useState<Date>(new Date());
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

  useEffect(() => {
    let sub = watch((data) => {
      console.log('update form data:', data);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  const onSubmit = (data: any) => {
    data.status = false;
    console.log('submit form data:', data);
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
            required: true,
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
      </View>
    </CreateAndEditTopBar>
  );
}

const addTodoItemStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
});
