import { VStack, Center, Text, Button } from 'native-base';
import React, { useEffect, useState } from 'react';
import TopBar from '../../components/TopBar';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { IRootState } from '../../redux/store';

export default function NotificationsScreen() {
  const eventId = useSelector((state: IRootState) => state.event.event?.id);
  const role = useSelector((state: IRootState) => state.event.event?.role);
  console.log(role);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      message: '',
    },
  });

  return (
    <TopBar pageName="訊息通知" show="false" navigate="">
      <VStack space={4} alignItems="center">
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

        <Button></Button>

        <Center w="full" h="20" bg="secondary.500" rounded="md" shadow={3} />
        <Center w="full" h="20" bg="primary.500" rounded="md" shadow={3} />
        <Center w="full" h="20" bg="emerald.500" rounded="md" shadow={3} />
      </VStack>
    </TopBar>
  );
}
