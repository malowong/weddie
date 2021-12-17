import { NativeBaseProvider, VStack, Center } from "native-base";
import React from "react";
import TopBar from "../components/TopBar";

export default function SettingScreen() {
    return (
      <NativeBaseProvider>
      <TopBar pageName="用戶設定">
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
    )
  }