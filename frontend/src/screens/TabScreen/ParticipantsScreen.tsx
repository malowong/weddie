import { Button, Icon, Modal, FormControl, Input } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../../style';
import TopBar from '../../components/TopBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';

const participants = [
  {
    id: 1,
    name: 'Matthew',
    phoneNumber: 12345678,
    position: '兄弟',
  },
  {
    id: 2,
    name: 'Dennis',
    phoneNumber: 23456781,
    position: '兄弟',
  },
  {
    id: 3,
    name: 'Billy',
    phoneNumber: 23475899,
    position: '姊妹',
  },
];

export default function ParticipantsScreen() {
  return (
    <TopBar pageName="人員名單" show="true" navigate="editMaterialItem">
      <View>
        <View style={partiStyles.tableRow}>
          <Text style={partiStyles.tableColumn}>名字</Text>
          <Text style={partiStyles.tableColumn}>電話號碼</Text>
          <Text style={partiStyles.tableColumn}>崗位</Text>
        </View>

        {participants.map((participant, idx) => {
          return (
            <View key={participant.id} style={partiStyles.tableRow}>
              <Text style={partiStyles.tableColumn}>{participant.name}</Text>
              <Text style={partiStyles.tableColumn}>
                {participant.phoneNumber}
              </Text>
              <Text style={partiStyles.tableColumn}>
                {participant.position}
              </Text>
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
    alignItems: 'center',
  },
  tableColumn: {
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
  },
  input: {
    marginTop: 4,
  },
});
