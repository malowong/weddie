import {
  VStack,
  Center,
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  WarningOutlineIcon,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';

export default function WelcomingScreen({navigation,}: {navigation: any;}) {
  
  return (
    <Center flex={1} px="3">
      <Box safeArea w="90%">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
        >
          歡迎！
        </Heading>

        <VStack space={3} mt="5">
          <Button
            mt="2"
            // colorScheme="indigo"
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text fontSize="lg" fontWeight="bold" color="white">
              登入
            </Text>
          </Button>
          <Button
            mt="2"
            // colorScheme="indigo"
            onPress={() => navigation.navigate('SignupScreen')}
          >
            <Text fontSize="lg" fontWeight="bold" color="white">
              註冊
            </Text>
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
