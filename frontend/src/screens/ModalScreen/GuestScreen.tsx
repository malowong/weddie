import { Box, Heading, HStack, Text, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';
import { useDispatch, useSelector } from 'react-redux';
import { getGuestListThunk } from '../../redux/guest/thunk';
import { useQuery } from 'react-query';
import { config } from '../../../app.json';
import { LoadingMsg } from '../../components/LoadingsMsg';
import { ErrorMsg } from '../../components/ErrorMsg';
import { IRootState } from '../../redux/store';

export default function GuestsScreen({ navigation }: { navigation: any }) {
  const eventId = useSelector((state: IRootState) => state.event.event?.id);
  // const { isLoading, error, data } = useQuery('userData', async () => {
  //   const postData = (
  //     await fetch(`${config.BACKEND_URL}/api/guest/list/${eventId}`)
  //   ).json();

  //   return postData;
  // });

  const [guestList, setGuestList] = useState([]);
  const { isLoading, error, data } = useQuery('userData', () =>
    fetch(`${config.BACKEND_URL}/api/guest/list/${eventId}`)
      .then((res) => res.json())
      .then((data) => setGuestList(data.guestList))
  );

  if (isLoading) return <LoadingMsg />;

  if (error) return <ErrorMsg />;

  // const guestList = data.guestList;

  return (
    <TopBar pageName="賓客名單" show="true" navigate="AddGuest">
      <View>
        {guestList.length === 0 && (
          <Text fontSize="md">請加入你準備邀請的來賓！</Text>
        )}
        {guestList.map((guest: any) => {
          return (
            <TouchableOpacity
              key={guest.id}
              onPress={() =>
                navigation.push('EditStackScreen', {
                  screen: 'EditGuest',
                  params: {
                    id: guest.id,
                    name: guest.name,
                    phone: guest.phone,
                    relationship: guest.relationship,
                  },
                })
              }
            >
              <Box
                py="3"
                alignSelf="center"
                width={375}
                maxWidth="100%"
                borderBottomWidth="1"
                borderColor="muted.300"
              >
                <HStack>
                  <VStack>
                    <View>
                      <Heading size="md">{guest.name}</Heading>
                    </View>
                    <View>
                      <Text fontSize="md">{guest.phone}</Text>
                    </View>
                  </VStack>
                  <Box
                    flex="1"
                    flex-direction="column"
                    alignItems="flex-end"
                    justifyContent="flex-end"
                  >
                    <Box px="2" py="0.5" rounded="md" bg="primary.600">
                      <Text fontSize="md" color="white">
                        {guest.relationship}
                      </Text>
                    </Box>
                  </Box>
                </HStack>
              </Box>
            </TouchableOpacity>
          );
        })}
      </View>
    </TopBar>
  );
}

// const guestStyles = StyleSheet.create({
//   tableRow: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   tableColumn: {
//     flex: 1,
//     textAlign: 'left',
//     display: 'flex',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     fontSize: 17,
//   },
//   tableRelationShip: {
//     flex: 1.5,
//   },
//   tableHeader: {
//     fontWeight: 'bold',
//   },
// });
