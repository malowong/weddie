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
  Icon,
  View,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type FormState = {
  phone: string;
  password: string;
};

export default function JoinEventScreen({ navigation }: { navigation: any }) {

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: {
      phone: '',
      password: '',
    },
  });

  useEffect(() => {
    let sub = watch((data) => {
      console.log('update form data:', data);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  function onSubmit(data: FormState) {
    console.log('submit form data:', data);
  }

  return (
    <>
      <Box safeAreaTop backgroundColor="#f2f2f2" />
      <Box safeAreaX={3} safeAreaY={1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon as={Ionicons} name="chevron-back" />
        </TouchableOpacity>
      </Box>
      <Center flex={0.9} px="3">
        <Box safeArea w="90%">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
          >
            加入婚禮
          </Heading>

          <VStack space={3} mt="5">
            <View>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: true,
                  maxLength: 8,
                  minLength: 8,
                }}
                render={({ field: { value, onChange } }) => (
                  <Input
                    type="number"
                    placeholder="電話號碼"
                    fontSize="md"
                    value={value}
                    onChangeText={onChange}
                    keyboardType="numeric"
                  />
                )}
              />
              {errors.phone?.type === 'required' && (
                <Text color="danger.500">請填寫你的電話號碼。</Text>
              )}
              {errors.phone?.type === 'maxLength' && (
                <Text color="danger.500">請填寫8位數字的電話號碼。</Text>
              )}
              {errors.phone?.type === 'minLength' && (
                <Text color="danger.500">請填寫8位數字的電話號碼。</Text>
              )}

              <Controller
                name="password"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    type="password"
                    placeholder="密碼"
                    fontSize="md"
                    mt="3"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
                rules={{
                  required: true,
                }}
              />
              {errors.password && (
                <Text color="danger.500">請填寫你的密碼。</Text>
              )}
              <Button
                mt="4"
                // colorScheme="indigo"
                onPress={() => navigation.navigate('MainStackScreen')}
                // onPress={handleSubmit(onSubmit)}
              >
                <Text fontSize="lg" fontWeight="bold" color="white">
                  加入
                </Text>
              </Button>
            </View>
          </VStack>
        </Box>
      </Center>
    </>
  );
}