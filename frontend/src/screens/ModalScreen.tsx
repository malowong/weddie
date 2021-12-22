import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../../style';

export default function ModalScreen({ navigation }: { navigation: any }) {
  return (
    <View
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}
    >
      <View
        style={{
          height: '50%',
          width: '100%',
          backgroundColor: '#fff',
          justifyContent: 'center',
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
        }}
      >
        <View style={styles.mainModalRow}>
          <TouchableOpacity
            style={styles.mainModalButton}
            onPress={() =>
              navigation.navigate('TabScreen', { screen: 'BudgetScreen' })
            }
          >
            <Ionicons name={'pie-chart-outline'} size={50} />
            <Text>婚禮預算</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainModalButton}
            onPress={() =>
              navigation.navigate('TabScreen', { screen: 'CheckListScreen' })
            }
          >
            <Ionicons name={'ios-checkbox-outline'} size={50} />
            <Text>待辦事項</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainModalButton}
            onPress={() =>
              navigation.navigate('TabScreen', { screen: 'MaterialScreen' })
            }
          >
            <Ionicons name={'ios-briefcase-outline'} size={50} />
            <Text>物資管理</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainModalButton}
            onPress={() =>
              navigation.navigate('TabScreen', { screen: 'GuestScreen' })
            }
          >
            <Ionicons name={'ios-person-add-outline'} size={50} />
            <Text>來賓名單</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainModalButton}
            onPress={() =>
              navigation.navigate('TabScreen', { screen: 'RundownScreen' })
            }
          >
            <Ionicons name={'ios-alarm-outline'} size={50} />
            <Text>當日流程</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainModalButton}
            onPress={() =>
              navigation.navigate('TabScreen', { screen: 'SeatScreen' })
            }
          >
            <Ionicons name={'ios-restaurant-outline'} size={50} />
            <Text>座位安排</Text>
          </TouchableOpacity>
        </View>
        <Button onPress={() => navigation.goBack()} title="返回" />
      </View>
    </View>
  );
}
