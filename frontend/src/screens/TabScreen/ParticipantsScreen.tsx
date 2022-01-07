import {
  Text,
  Box,
  Heading,
  HStack,
  VStack,
  Select,
  CheckIcon,
} from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useRefreshOnFocus } from '../../../hooks/useRefreshOnFoncus';
import { ErrorMsg } from '../../components/ErrorMsg';
import { LoadingMsg } from '../../components/LoadingsMsg';
import { roleList } from '../../../utils/roleList';
import TopBar from '../../components/TopBar';
import { IRootState } from '../../redux/store';
import { config } from '../../../app.json';

export default function ParticipantsScreen({
  navigation,
}: {
  navigation: any;
}) {
  const eventId = useSelector(
    (state: IRootState) => state.event.event?.wedding_event_id
  );
  const role = useSelector((state: IRootState) => state.event.event?.role);
  console.log('eventId', eventId);

  const [participantList, setParticipantList] = useState([]);
  const [selectedPartiList, setSelectedPartiList] = useState([]);

  useRefreshOnFocus(() =>
    fetch(`${config.BACKEND_URL}/api/parti/list/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        setParticipantList(data.partiList);
        setSelectedPartiList(data.partiList);
      })
  );

  const { isLoading, error, data } = useQuery('partiData', () =>
    fetch(`${config.BACKEND_URL}/api/parti/list/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        setParticipantList(data.partiList);
        setSelectedPartiList(data.partiList);
      })
  );

  if (isLoading) return <LoadingMsg />;

  if (error) return <ErrorMsg />;

  return (
    <TopBar pageName="人員名單" show="true" navigate="AddParti">
      <View>
        {participantList.length === 0 && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CreateStackScreen', {
                screen: 'AddParti',
              })
            }
          >
            <Text fontSize={18} color="danger.600" marginTop={10}>
              尚未有人員名單，按此新增
            </Text>
          </TouchableOpacity>
        )}

        {participantList.length > 0 && (
          <View>
            <Select
              defaultValue="all"
              marginBottom={3}
              marginTop={5}
              minWidth="200"
              _selectedItem={{
                bg: 'secondary.500',
                endIcon: <CheckIcon size="5" />,
              }}
              fontSize="xl"
              onValueChange={(value) => {
                console.log(value);
                if (value === 'all') {
                  setSelectedPartiList(participantList);
                } else {
                  const selectedList = participantList.filter(
                    (participant: any) => {
                      return participant.role_id === parseInt(value);
                    }
                  );
                  console.log(selectedList);
                  setSelectedPartiList(() => selectedList);
                }
              }}
            >
              <Select.Item label="全部" value="all" />
              {roleList
                .filter((roleObject) => roleObject.role !== role)
                .map((roleObject) => {
                  return (
                    <Select.Item
                      key={roleObject.id}
                      label={roleObject.role}
                      value={String(roleObject.id)}
                    />
                  );
                })}
            </Select>
          </View>
        )}

        {selectedPartiList.map((participant: any, idx: number) => {
          return (
            <TouchableOpacity
              style={{ marginHorizontal: 8 }}
              key={participant.id}
              onPress={() =>
                navigation.navigate('EditStackScreen', {
                  screen: 'EditParti',
                  params: {
                    id: participant.id,
                    name: participant.name,
                    phone: participant.phone,
                    roleId: participant.role_id,
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
                      <Heading size="md">{participant.name}</Heading>
                    </View>
                    <View>
                      <Text fontSize="md">{participant.phone}</Text>
                    </View>
                  </VStack>
                  <Box
                    flex="1"
                    flex-direction="column"
                    alignItems="flex-end"
                    justifyContent="flex-end"
                  >
                    <Box px="2" py="0.5" rounded="md" bg="secondary.500">
                      <Text fontSize="md" color="white">
                        {
                          roleList.find(
                            (roleObject) =>
                              roleObject.id === participant.role_id
                          )!.role
                        }
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
