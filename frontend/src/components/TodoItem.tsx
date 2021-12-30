import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import React from 'react';

interface ITodoItemProp {
  itemName: string;
  dueDate: string;
}

export function TodoItem(props: ITodoItemProp) {
  console.log('taken out from db:', props.dueDate);
  const dueDate = new Date(props.dueDate).toString();
  console.log('after toString: ', dueDate);
  return (
    <View style={todoStyles.tableRow}>
      <Text fontSize={17}>{props.itemName}</Text>
      <Text fontSize={17}>{dueDate.slice(4, 15)}</Text>
    </View>
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
