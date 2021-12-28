import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import React from 'react';

interface ITodoItemProp {
  itemName: string;
  dueDate: Date;
}

export function TodoItem(props: ITodoItemProp) {
  return (
    <View style={todoStyles.tableRow}>
      <Text fontSize={17}>{props.itemName}</Text>
      <Text fontSize={17}>{props.dueDate.toDateString().slice(4)}</Text>
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
