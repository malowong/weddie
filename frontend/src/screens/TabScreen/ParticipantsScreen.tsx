import { Text, Box, Heading, HStack, VStack } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { roleList } from '../../components/roleList';
import TopBar from '../../components/TopBar';

const participants = [
  {
    id: 1,
    name: 'Matthew',
    phone: 12345678,
    roleId: 6,
  },
  {
    id: 2,
    name: 'Dennis',
    phone: 23456781,
    roleId: 5,
  },
  {
    id: 3,
    name: 'Billy',
    phone: 23475899,
    roleId: 4,
  },
];

export default function ParticipantsScreen({
  navigation,
}: {
  navigation: any;
}) {
  return (
    <TopBar pageName="人員名單" show="true" navigate="AddParti">
      <View>
        {participants.map((participant: any) => {
          return (
            <TouchableOpacity
              key={participant.id}
              onPress={() =>
                navigation.navigate('EditStackScreen', {
                  screen: 'EditParti',
                  params: {
                    id: participant.id,
                    phone: participant.phone,
                    roleId: participant.roleId,
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
                    <Box px="2" py="0.5" rounded="md" bg="primary.600">
                      <Text fontSize="md" color="white">
                        {
                          roleList.find(
                            (roleObject) => roleObject.id === participant.roleId
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

        {participants.length === 0 && (
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
