import { VStack, Text, Box, Heading, HStack, View } from 'native-base';
import React, { useState } from 'react';
import TopBar from '../../components/TopBar';
import { useSelector } from 'react-redux';
import { config } from '../../../app.json';
import { IRootState } from '../../redux/store';
import { useRefreshOnFocus } from '../../../hooks/useRefreshOnFoncus';
import { useQuery } from 'react-query';

interface Message {
  id: number;
  wedding_event_id: number;
  content: string;
  created_at: string;
}

export default function NotificationsScreen() {
  const eventId = useSelector((state: IRootState) => state.event.event?.id);
  const role = useSelector((state: IRootState) => state.event.event?.role);
  const token = useSelector((state: IRootState) => state.auth.token);
  const [messageList, setMessageList] = useState([]);

  useRefreshOnFocus(async () => {
    const resp = await fetch(
      `${config.BACKEND_URL}/api/message/list/${eventId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await resp.json();
    console.log('messageList: ', data.messageList);

    setMessageList(data.messageList);
  });

  const { isLoading, error, data } = useQuery('userData', async () => {
    const resp = await fetch(
      `${config.BACKEND_URL}/api/message/list/${eventId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await resp.json();
    console.log('messageList: ', data.messageList);

    setMessageList(data.messageList);
  });

  let isMessageSender;
  if (role === '新郎' || role === '新娘') {
    isMessageSender = true;
  } else {
    isMessageSender = false;
  }

  return (
    <TopBar
      pageName="訊息通知"
      show={isMessageSender ? 'true' : 'false'}
      navigate="AddMessage"
    >
      {/* <Button
          onPress={() => {
            PushNotificationIOS.addNotificationRequest({
              id: '1',
              title: 'hello',
              body: 'this is weddie',
            });
          }}
        >
          Click here to push notification
        </Button> */}

      {messageList.map((message: Message, idx: number) => {
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
