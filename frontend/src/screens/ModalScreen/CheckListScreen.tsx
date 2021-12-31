import { Text, View } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { TodoItem } from '../../components/TodoItem';
import TopBar from '../../components/TopBar';
import { IRootState } from '../../redux/store';
import { config } from '../../../app.json';
import { useQuery } from 'react-query';
import { ErrorMsg } from '../../components/ErrorMsg';
import { LoadingMsg } from '../../components/LoadingsMsg';

interface TodoItem {
  id: number;
  wedding_event_id: number;
  to_do_date: string;
  to_do_item: string;
  to_do_remarks: string;
  is_finished: boolean;
}

export default function CheckListScreen({ navigation }: { navigation: any }) {
  const eventId = useSelector((state: IRootState) => state.event.event?.id);
  const [todoList, setTodoList] = useState([]);
  const { isLoading, error, data } = useQuery('userData', () =>
    fetch(`${config.BACKEND_URL}/api/todo/list/${eventId}`)
      .then((res) => res.json())
      .then((data) => setTodoList(data.todoList))
  );

  todoList.map((todoItem: TodoItem) =>
    console.log(todoItem.to_do_item, ': ', todoItem.to_do_remarks)
  );

  if (isLoading) return <LoadingMsg />;

  if (error) return <ErrorMsg />;

  const completedTodoItems = todoList.filter(
    (todoItem: TodoItem) => todoItem.is_finished
  );
  const pendingTodoItems = todoList.filter(
    (todoItem: TodoItem) => !todoItem.is_finished
  );

  return (
    <TopBar pageName="待辦事項" show="true" navigate="AddTodoItem">
      <View marginTop={15}>
        {pendingTodoItems.length > 0 && (
          <Text marginLeft={15} fontSize={25}>
            未完成
          </Text>
        )}

        {pendingTodoItems.map((todoItem: TodoItem) => {
          return (
            <TouchableOpacity
              key={todoItem.id}
              onPress={() =>
                navigation.push('EditStackScreen', {
                  screen: 'EditTodoItem',
                  params: {
                    id: todoItem.id,
                    itemName: todoItem.to_do_item,
                    dueDate: todoItem.to_do_date,
                    remarks: todoItem.to_do_remarks,
                    isCompleted: todoItem.is_finished,
                  },
                })
              }
            >
              <TodoItem
                itemName={todoItem.to_do_item}
                dueDate={todoItem.to_do_date}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      {completedTodoItems.length > 0 && (
        <View marginTop={20}>
          <Text marginLeft={15} fontSize={25}>
            已完成
          </Text>
        </View>
      )}

      {completedTodoItems.map((todoItem: TodoItem) => {
        return (
          <TouchableOpacity
            key={todoItem.id}
            onPress={() =>
              navigation.push('EditStackScreen', {
                screen: 'EditTodoItem',
                params: {
                  id: todoItem.id,
                  itemName: todoItem.to_do_item,
                  dueDate: todoItem.to_do_date,
                  remarks: todoItem.to_do_remarks,
                  isCompleted: todoItem.is_finished,
                },
              })
            }
          >
            <TodoItem
              itemName={todoItem.to_do_item}
              dueDate={todoItem.to_do_date}
            />
          </TouchableOpacity>
        );
      })}
    </TopBar>
  );
}
