import { VStack, Center, Box, Button, FormControl, Heading, HStack, Input, Link, Stack, Text, WarningOutlineIcon } from 'native-base';
import React, { useState } from 'react';
import TopBar from '../components/TopBar';

export default function SignupScreen({ navigation }: { navigation: any }) {
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
          註冊
        </Heading>

        <VStack space={3} mt="5">
          <FormControl isRequired>
            <Stack>
              <Input type="email" placeholder="電郵" fontSize='md'/>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl>
            <Input type="password" placeholder="密碼" fontSize='md'/>
          </FormControl>
          <Button
            mt="4"
            // colorScheme="indigo"
            onPress={() => navigation.navigate('MainStackScreen')}
          >
            <Text fontSize='lg' fontWeight='bold' color='white'>
            註冊
            </Text>
          </Button>
          <Button mt="4" onPress={() => navigation.goBack()}>返回</Button>

        </VStack>
      </Box>
    </Center>
  );
}
