import { Box, Heading, HStack, Text } from 'native-base';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { styles } from '../../../style';
import { config } from '../../../app.json';
import TopBar from '../../components/TopBar';
import { ErrorMsg } from '../../components/ErrorMsg';
import { LoadingMsg } from '../../components/LoadingsMsg';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import { useRefreshOnFocus } from '../../../hooks/useRefreshOnFoncus';
import { TouchableOpacity, View } from 'react-native';

export default function RundownScreen({ navigation }: { navigation: any }) {
  const eventId = useSelector((state: IRootState) => state.event.event?.id);

  const token = useSelector((state: IRootState) => state.auth.token);

  // useRefreshOnFocus(() =>
  //   fetch(`${config.BACKEND_URL}/api/itin/${eventId}`)
  //     .then((res) => res.json())
  //     .then((data) => setItinList(data.itinList))
  // );

  const [itinList, setItinList] = useState([]);
  const { isLoading, error, data } = useQuery('userData', async () => {
    const resp = await fetch(`${config.BACKEND_URL}/api/itin/list/${eventId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await resp.json();
    console.log('data: ', data);
    setItinList(data);
  });


  function getTime(time: string) {
    return time.substring(0, 5);
  }

  if (isLoading) return <LoadingMsg />;

  if (error) return <ErrorMsg />;

  return (
    <TopBar pageName="當日流程" show="true" navigate="AddRundown">
      {itinList.map((item: any) => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.navigate('EditStackScreen', {
                screen: 'EditRundown',
                params: {
                  id: item.id,
                  name: item.name,
                  phone: item.phone,
                  relationship: item.relationship,
                },
              })
            }
          >
            <Box py="1" flex="1">
              <HStack
                borderBottomWidth="1"
                py="3"
                alignItems="center"
                borderColor="muted.300"
              >
                <Box mr="3" width="20%">
                  <Heading size="lg">{getTime(item.itinerary_time)}</Heading>
                </Box>
                <Box width="75%">
                  <Heading size="md">{item.itinerary}</Heading>
                  {item.job_duty ? (
                    <Text fontSize="md">{item.job_duty}</Text>
                  ) : null}
                  <HStack mt="2">
                  {item.role_id_arr.map((role: any, idx: number) => {
                    return (
                      <Box px="2" py="0.5" mr="3" rounded="md" bg="primary.600" key={idx}>
                        <Text fontSize="md" color="white">
                          {role === 1 && '新郎'}
                          {role === 2 && '新娘'}
                          {role === 3 && '兄弟'}
                          {role === 4 && '姊妹'}
                          {role === 5 && '攝影師'}
                          {role === 6 && '司儀'}
                          {role === 7 && '表演者'}
                          {role === 8 && '大妗姐'}
                          {role === 9 && '化妝師'}
                        </Text>
                      </Box>
                    );
                  })}
                  </HStack>
                </Box>
              </HStack>
            </Box>
          </TouchableOpacity>
        );
      })}
    </TopBar>
  );
}
