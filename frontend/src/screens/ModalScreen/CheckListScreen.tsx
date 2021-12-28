import { Text, View } from 'native-base';
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TodoItem } from '../../components/TodoItem';
import TopBar from '../../components/TopBar';
import { IRootState } from '../../redux/store';
import { getTodoListThunk } from '../../redux/todo/thunk';

export default function CheckListScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const todoList = useSelector((state: IRootState) => state.todo.todoList);
  const completedTodoItems = todoList.filter(
    (todoItem) => todoItem.isCompleted
  );
  const pendingTodoItems = todoList.filter((todoItem) => !todoItem.isCompleted);

  console.log(completedTodoItems);
  console.log(pendingTodoItems);

  useEffect(() => {
    dispatch(getTodoListThunk());
  }, [dispatch]);

  return (
    <TopBar pageName="待辦事項" show="true" navigate="AddTodoItem">
      <View marginTop={15}>
        <Text marginLeft={15} fontSize={25}>
          未完成
        </Text>

        {pendingTodoItems.map((todoItem) => {
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
                    isCompleted: todoItem.isCompleted,
                  },
                })
              }
            >
              {/* <View style={todoStyles.tableRow}>
              <Text fontSize={17}>{todoItem.itemName}</Text>
              <Text fontSize={17}>
                {todoItem.dueDate.toDateString().slice(4)}
              </Text>
            </View> */}

              <TodoItem
                itemName={todoItem.itemName}
                dueDate={todoItem.dueDate}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      <View marginTop={20}>
        <Text marginLeft={15} fontSize={25}>
          已完成
        </Text>
      </View>

      {completedTodoItems.map((todoItem) => {
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
                  isCompleted: todoItem.isCompleted,
                },
              })
            }
          >
            {/* <View style={todoStyles.tableRow}>
              <Text fontSize={17}>{todoItem.itemName}</Text>
              <Text fontSize={17}>
                {todoItem.dueDate.toDateString().slice(4)}
              </Text>
            </View> */}

            <TodoItem itemName={todoItem.itemName} dueDate={todoItem.dueDate} />
          </TouchableOpacity>
        );
      })}
    </TopBar>
  );
}
