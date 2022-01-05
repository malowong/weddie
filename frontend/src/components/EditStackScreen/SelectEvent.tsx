import React from 'react';
import { Button, Text, View } from 'native-base';
import CreateAndEditTopBar from '../CreateAndEditTopBar';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';

export function SelectEvent({ navigation }: { navigation: any }) {
  const userId = useSelector((state: IRootState) => state.auth.user?.id);
  console.log(userId);
  // useRefreshOnFocus(() =>
  //   fetch(`${config.BACKEND_URL}/api/guest/list/${eventId}`)
  //     .then((res) => res.json())
  //     .then((data) => setGuestList(data.guestList))
  // );

  // const [guestList, setGuestList] = useState([]);
  // const { isLoading, error, data } = useQuery('userData', () =>
  //   fetch(`${config.BACKEND_URL}/api/guest/list/${eventId}`)
  //     .then((res) => res.json())
  //     .then((data) => setGuestList(data.guestList))
  // );

  // if (isLoading) return <LoadingMsg />;

  // if (error) return <ErrorMsg />;

  return (
    <CreateAndEditTopBar pageName="選擇婚禮">
      <Button
        marginTop={5}
        marginBottom={5}
        colorScheme="pink"
        onPress={() =>
          navigation.navigate('CreateEventStackScreen', {
            screen: 'ChooseScreen',
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
