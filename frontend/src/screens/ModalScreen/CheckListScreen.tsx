import { Button, Text } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TopBar from '../../components/TopBar';
import { IRootState } from '../../redux/store';
import { getTodoListThunk } from '../../redux/todo/thunk';

export default function CheckListScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const todoList = useSelector((state: IRootState) => state.todo.todoList);

  useEffect(() => {
    dispatch(getTodoListThunk());
  }, [dispatch]);

  return (
    <TopBar pageName="待辦事項" show="true" navigate="AddTodoItem">
      <Button
        colorScheme="secondary"
        onPress={() =>
          navigation.navigate('CreateStackScreen', {
            screen: 'AddTodoItem',
          })
        }
      >
        新增
      </Button>

      {todoList.map((todoItem) => {
        return (
          <TouchableOpacity
            key={todoItem.id}
            onPress={() =>
              navigation.navigate('EditStackScreen', {
                screen: 'EditTodoItem',
                params: {
                  id: todoItem.id,
                  itemName: todoItem.itemName,
                  dueDate: todoItem.dueDate.toDateString(),
                  remarks: todoItem.remarks,
                  status: todoItem.status,
                },
              })
            }
          >
            <View style={todoStyles.tableRow}>
              <Text fontSize={17}>
                {todoItem.itemName}: {todoItem.status.toString()}
              </Text>
              <Text fontSize={17}>
                {todoItem.dueDate.toDateString().slice(4)}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </TopBar>
  );
}

const todoStyles = StyleSheet.create({
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
