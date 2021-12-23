import { Button, Checkbox, Text } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../../../style';
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
    <TopBar pageName="待辦事項">
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
                  itemName: todoItem.itemName,
                  dueDate: todoItem.dueDate.toDateString().slice(4),
                  remarks: todoItem.remarks,
                  status: todoItem.status,
                },
              })
            }
          >
            <View style={todoStyles.tableRow}>
              <Text fontSize={18}>{todoItem.itemName}</Text>
              <Text fontSize={18}>
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
    marginTop: 15,
    marginHorizontal: 15,
  },
});
