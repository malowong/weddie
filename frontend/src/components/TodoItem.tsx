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
      <View style={todoStyles.itemName}>
        <Text fontSize={17}>{props.itemName}</Text>
      </View>
      <View style={todoStyles.date}>
        <Text fontSize={15}>{dueDate.slice(4, 15)}</Text>
      </View>
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
    // borderWidth: 1,
    // borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    // backgroundColor: '#D3D3D3',
    backgroundColor: '#ffffff',
  },
  itemName: {
    width: '67%',
    marginRight: 5,
  },
  date: {
    width: '33%',
    marginRight: -15,
  },
});
