import { VStack, Text, Box, Heading, HStack, View } from 'native-base';
import React, { useState } from 'react';
import TopBar from '../../components/TopBar';
import { useSelector } from 'react-redux';
import { config } from '../../../app.json';
import { IRootState } from '../../redux/store';
import { useRefreshOnFocus } from '../../../hooks/useRefreshOnFoncus';
import { useQuery } from 'react-query';
import { LoadingMsg } from '../../components/LoadingsMsg';
import { ErrorMsg } from '../../components/ErrorMsg';
import { roleList } from '../../../utils/roleList';

interface Message {
  id: number;
  wedding_event_id: number;
  content: string;
  created_at: string;
}

export default function NotificationsScreen() {
  let eventId = useSelector(
    (state: IRootState) => state.event.event?.wedding_event_id
  );
  const role = useSelector((state: IRootState) => state.event.event?.role);
  const token = useSelector((state: IRootState) => state.auth.token);
  const [messageList, setMessageList] = useState([]);
  const [counter, setCounter] = useState(0);

  if (!eventId) {
    eventId = 0;
  }

  console.log(role);
  const roleId = roleList.find((roleObj) => roleObj.role === role)?.id;
  console.log(roleId);

  let isMessageSender: boolean;
  if (role === '新郎' || role === '新娘') {
    isMessageSender = true;
  } else {
    isMessageSender = false;
  }

  const { isLoading, error, status, data } = useQuery(
    ['notiData', { eventId, counter }],
    async () => {
      let resp;
      if (isMessageSender) {
        resp = await fetch(
          `${config.BACKEND_URL}/api/message/list/all/${eventId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        resp = await fetch(
          `${config.BACKEND_URL}/api/message/list/${eventId}/${roleId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      const data = await resp.json();
      console.log('messageList: ', data.messageList);

      setMessageList(data.messageList);
    }
  );

  useRefreshOnFocus(async () => {
    console.log('useRefreshOnFocus');
    setCounter((counter) => counter + 1);
  });

  if (isLoading) return <LoadingMsg />;

  if (error) return <ErrorMsg />;

  return (
    <TopBar
      pageName="訊息通知"
      show={isMessageSender ? 'true' : 'false'}
      navigate="AddMessage"
    >
      {messageList &&
        messageList.map((message: Message, idx: number) => {
          return (
            <Box
              key={message.id}
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
                    <Heading size="md" fontSize={25}>
                      {message.content}
                    </Heading>
                  </View>
                  <View marginTop={3}>
                    <Text>
                      {new Date(message.created_at).toLocaleString('zh-hk')}
                    </Text>
                  </View>
                </VStack>
              </HStack>
            </Box>
          );
        })}
    </TopBar>
  );
}
