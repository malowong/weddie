import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  VStack,
  TextArea,
  WarningOutlineIcon,
  Stack,
} from 'native-base';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../style';
import { Login } from '../components/Login';

export default function LoginScreen({ navigation }: { navigation: any }) {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('submiting with ', data);
  };
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const login = () => {
  //   const navigation = useNavigation();
  //   setIsLoggedIn(true);
  // };

  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
        >
          你好
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          請先登入
        </Heading>

        <VStack space={3} mt="5">
          <FormControl isRequired>
            <Stack>
              <FormControl.Label>電郵</FormControl.Label>
              <Input type="email" placeholder="email" />
              <FormControl.HelperText>
                Must be atleast 6 characters.
              </FormControl.HelperText>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => navigation.navigate('MainStackScreen')}
          >
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
            >
              I'm a new user.{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
