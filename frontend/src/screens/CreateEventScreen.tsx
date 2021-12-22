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
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../../style';
import DateTimePicker from '@react-native-community/datetimepicker';

type CreateEventFormState = {
  groomname: string;
  bridename: string;
  bigday: Date;
  budget: string;
};

export default function CreateEventScreen({ navigation }: { navigation: any }) {
  const [date, setDate] = useState<Date>(new Date());

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateEventFormState>({
    defaultValues: {
      groomname: '',
      bridename: '',
      bigday: date,
      budget: '',
    },
  });

  useEffect(() => {
    let sub = watch((data) => {
      console.log('update form data:', data);
    });
    return () => sub.unsubscribe();
  }, [watch, date]);

  function onSubmit(data: CreateEventFormState) {
    data.bigday = date
    console.log('submit form data:', data);
  }

  const onDateChange = (selectedDate: Date) => {
    const currentDate = selectedDate
    setDate(currentDate);
  };

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
            建立我的婚禮
          </Heading>
          <VStack space={3} mt="5">
            <View>
              <Controller
                name="groomname"
                control={control}
                rules={{
                  required: true,
                  maxLength: 8,
                }}
                render={({ field: { value, onChange } }) => (
                  <>
                    <Text fontSize="lg" mb="1">
                      請問新郎的名字是...
                    </Text>
                    <Input
                      placeholder={`簡單名字即可，如 "大文" 或 "Ben" 等`}
                      fontSize="md"
                      value={value}
                      onChangeText={onChange}
                    />
                  </>
                )}
              />
              {errors.groomname?.type === 'required' && (
                <Text color="danger.500">請填寫新郎的名字。</Text>
              )}
              {errors.groomname?.type === 'maxLength' && (
                <Text color="danger.500">新郎的名字不可多於八個字符。</Text>
              )}
              <Controller
                name="bridename"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { value, onChange } }) => (
                  <>
                    <Text fontSize="lg" mb="1" mt="4">
                      請問新娘的名字是...
                    </Text>
                    <Input
                      placeholder={`簡單名字即可，如 "小美" 或 "Amy" 等`}
                      fontSize="md"
                      value={value}
                      onChangeText={onChange}
                    />
                  </>
                )}
              />
              {errors.bridename?.type === 'required' && (
                <Text color="danger.500">請填寫新娘的名字。</Text>
              )}
              {errors.bridename?.type === 'maxLength' && (
                <Text color="danger.500">新娘的名字不可多於八個字符。</Text>
              )}
              <Controller
                name="bigday"
                control={control}
                rules={{
                  required: false,
                }}
                render={() => (
                  <>
                    <Text fontSize="lg" mb="1" mt="4">
                      請問你們的結婚日子是...
                    </Text>
                  </>
                )}
              />
              <View alignItems="center" width="5%">
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  style={{ width: 230 }}
                  display="default"
                  onChange={(event: any, selectedDate?: Date) => {
                    const currentDate = selectedDate || date;
                    setDate(currentDate);
                  }}
                />
              </View>
              {date.getDate() < new Date().getDate() && (
                <Text color="danger.500">請選擇正確的日子。</Text>
              )}
              <Controller
                name="budget"
                control={control}
                // rules={{
                //   required: true,
                // }}
                render={({ field: { value, onChange } }) => (
                  <>
                    <Text fontSize="lg" mb="1" mt="4">
                      請問你們的結婚預算大概為...
                    </Text>
                    <Input
                      type="number"
                      placeholder={`以港元計算，如 "50000" 或 "100000" 等`}
                      fontSize="md"
                      value={value}
                      onChangeText={onChange}
                      keyboardType="numeric"
                    />
                  </>
                )}
              />
              {errors.bridename?.type === 'required' && (
                <Text color="danger.500">請填寫結婚預算。</Text>
              )}
              <Button
                mt="4"
                // colorScheme="indigo"
                // onPress={() => navigation.navigate('MainStackScreen')}
                onPress={handleSubmit(onSubmit)}
              >
                <Text fontSize="lg" fontWeight="bold" color="white">
                  完成
                </Text>
              </Button>
            </View>
          </VStack>
        </Box>
      </Center>
    </>
  );
}
