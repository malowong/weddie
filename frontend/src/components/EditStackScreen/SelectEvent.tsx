import React from 'react';
import { Button, Text, View } from 'native-base';
import CreateAndEditTopBar from '../CreateAndEditTopBar';
import { StyleSheet, TouchableOpacity } from 'react-native';

export function SelectEvent({ navigation }: { navigation: any }) {
  return (
    <CreateAndEditTopBar pageName="選擇婚禮">
      <Button
        marginTop={5}
        marginBottom={5}
        colorScheme="pink"
        onPress={() =>
          navigation.navigate('AuthStackScreen', {
            screen: 'CreateEventScreen',
          })
        }
      >
        新增婚禮
      </Button>
      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.eventBox}>
          <Text>1</Text>
          <Text>馬比聯婚</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.eventBox}>
          <Text>2</Text>
          <Text>馬比聯婚</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.eventBox}>
          <Text>3</Text>
          <Text>馬比聯婚</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.eventBox}>
          <Text>4</Text>
          <Text>馬比聯婚</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.eventBox}>
          <Text>5</Text>
          <Text>馬比聯婚</Text>
        </TouchableOpacity>
      </View>
    </CreateAndEditTopBar>
  );
}

const styles = StyleSheet.create({
  eventBox: {
    height: 160,
    width: '45%',
    backgroundColor: 'pink',
    marginLeft: 10,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});
