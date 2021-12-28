import {
  Button,
  Text,
  Center,
  Box,
  Heading,
  VStack,
  Icon,
  View,
} from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ChooseScreen({ navigation }: { navigation: any }) {
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
            感謝你的加入！
          </Heading>
          <Text fontSize="lg" mt="3">
            請選擇項目：
          </Text>
          <VStack space={3} mt="5">
            <View>
              <Button
                // colorScheme="indigo"
                onPress={() => navigation.navigate('CreateEventScreen')}
                // onPress={handleSubmit(onSubmit)}
              >
                <Text fontSize="lg" fontWeight="bold" color="white">
                  建立我的婚禮
                </Text>
              </Button>
              <Button
                mt="4"
                // colorScheme="indigo"
                onPress={() => navigation.navigate('JoinEventScreen')}
                // onPress={handleSubmit(onSubmit)}
              >
                <Text fontSize="lg" fontWeight="bold" color="white">
                  加入婚禮
                </Text>
              </Button>
            </View>
          </VStack>
        </Box>
      </Center>
    </>
  );
}
