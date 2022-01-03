import { VStack, Center } from 'native-base';
import React, { useEffect, useState } from 'react';
import TopBar from '../../components/TopBar';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

export default function NotificationsScreen() {
  useEffect(() => {
    PushNotificationIOS.addNotificationRequest({
      id: '1',
      title: 'hello',
      fireDate: new Date(2022, 0, 3, 11, 31, 30),
    });
    return () => {
      PushNotificationIOS.addNotificationRequest({
        id: '1',
        title: 'hello',
        fireDate: new Date(2022, 0, 3, 19, 31, 30),
      });
    };
  }, []);

  console.log(new Date(2022, 0, 3, 19, 31, 30));
  return (
    <TopBar pageName="訊息通知" show="false" navigate="">
      <VStack space={4} alignItems="center">
        <Center w="full" h="20" bg="secondary.500" rounded="md" shadow={3} />
        <Center w="full" h="20" bg="primary.500" rounded="md" shadow={3} />
        <Center w="full" h="20" bg="emerald.500" rounded="md" shadow={3} />
        <Center w="full" h="20" bg="emerald.500" rounded="md" shadow={3} />
        <Center w="full" h="20" bg="emerald.500" rounded="md" shadow={3} />
      </VStack>
    </TopBar>
  );
}
