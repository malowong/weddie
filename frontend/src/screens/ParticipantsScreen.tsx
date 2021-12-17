import {
  NativeBaseProvider,
  Center,
  VStack,
} from 'native-base';
import React from 'react';
import { styles } from '../../style';
import TopBar from '../components/TopBar';

export default function ParticipantsScreen() {
  return (
    <NativeBaseProvider>
      <TopBar pageName="人員名單">
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
