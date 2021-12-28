import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Text, TextArea, Modal, Select } from 'native-base';
import CreateAndEditTopBar from '../CreateAndEditTopBar';
import DateTimePicker from '@react-native-community/datetimepicker';

export function EditTodoItem({ route, navigation }: any) {
  const [date, setDate] = useState<Date>(new Date(route.params.dueDate));
  const [showModal, setShowModal] = useState(false);
  const [isCompleted, setIsCompleted] = useState(route.params.isCompleted);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      itemName: JSON.stringify(route.params.itemName).replace(/\"/g, ''),
      dueDate: date,
      remarks: JSON.stringify(route.params.remarks).replace(/\"/g, ''),
      isCompleted: route.params.isCompleted,
    },
  });

  const onSubmit = (data: any) => {
    data.dueDate = date;
    data.isCompleted = isCompleted;
    console.log('submit form data:', data);
    navigation.goBack();
  };

  const deleteTodoItem = () => {
    const itemId = JSON.stringify(route.params.id);
    console.log(itemId);
    console.log('hello');
    navigation.goBack();
  };

  useEffect(() => {
    let sub = watch((data) => {
      console.log('update form data:', data);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <CreateAndEditTopBar pageName="編輯待辦事項">
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
              style={editTodoItemStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="itemName"
        />

        <Text marginLeft={1} marginTop={5} fontSize={18}>
          到期日
        </Text>

        <View style={editTodoItemStyles.dateTimePicker}>
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
              style={editTodoItemStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="remarks"
        />

        <Select
          defaultValue={isCompleted ? 'completed' : 'pending'}
          minWidth="200"
          marginTop={5}
          accessibilityLabel="狀態"
          placeholderTextColor="gray.700"
          _selectedItem={{
            bg: 'teal.600',
          }}
          mt={1}
          onValueChange={(itemValue) => {
            if (itemValue === 'pending') {
              setIsCompleted(false);
            } else {
              setIsCompleted(true);
            }
          }}
        >
          <Select.Item label="未完成" value="pending" />
          <Select.Item label="已完成" value="completed" />
        </Select>

        <View style={editTodoItemStyles.buttonRow}>
          <Button marginTop={20} onPress={handleSubmit(onSubmit)}>
            更改
          </Button>

          <Button
            colorScheme="danger"
            marginTop={20}
            onPress={() => setShowModal(true)}
          >
            移除待辦事項
          </Button>

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.Header>確定移除待辦事項？</Modal.Header>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="ghost"
                    colorScheme="blueGray"
                    onPress={() => {
                      setShowModal(false);
                    }}
                  >
                    取消
                  </Button>
                  <Button
                    colorScheme="danger"
                    onPress={() => {
                      deleteTodoItem();
                      setShowModal(false);
                    }}
                  >
                    確定
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </View>
      </View>
    </CreateAndEditTopBar>
  );
}

const editTodoItemStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dateTimePicker: {
    marginTop: 3,
    alignItems: 'center',
    width: '5%',
  },
});
