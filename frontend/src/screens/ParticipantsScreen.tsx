import {
  NativeBaseProvider,
  Center,
  VStack,
} from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../../style';
import TopBar from '../components/TopBar';

const participants = [
  {
    name: 'Matthew',
    phoneNumber: 12345678,
    position: '兄弟',
  },
  {
    name: 'Dennis',
    phoneNumber: 23456781,
    position: '兄弟',
  },
  {
    name: 'Billy',
    phoneNumber: 23475899,
    position: '姊妹',
  },
];

export default function ParticipantsScreen() {
  return (
      <TopBar pageName="人員名單">
        <View>
        <View style={partiStyles.tableRow}>
          <Text>名字</Text>
          <Text>電話號碼</Text>
          <Text>崗位</Text>
        </View>

        {participants.map((participant, idx) => {
          return (
            <View key={idx} style={partiStyles.tableRow}>
              <Text>{participant.name}</Text>
              <Text>{participant.phoneNumber}</Text>
              <Text>{participant.position}</Text>
            </View>
          );
        })}
      </View>
      </TopBar>
  );
}

const partiStyles = StyleSheet.create({
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

