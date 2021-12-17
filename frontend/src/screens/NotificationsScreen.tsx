import {
  NativeBaseProvider,
  VStack,
  Center,
} from 'native-base';
import React, { useState } from 'react';
import TopBar from '../components/TopBar';

export default function NotificationsScreen() {
  return (
    <NativeBaseProvider>
      <TopBar pageName="訊息通知">
          <VStack space={4} alignItems="center">
            <Center w="full" h="20" bg="secondary.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="primary.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
          </VStack>
        </TopBar>
    </NativeBaseProvider>
  );
}
