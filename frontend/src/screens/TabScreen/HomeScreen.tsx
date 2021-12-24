import * as React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
  Heading,
  View,
} from 'native-base';
import TopBar from '../../components/TopBar';
import HomeScreenTopBar from '../../components/HomeScreenTopBar';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Carousel from 'react-native-snap-carousel';

const eventData = {
  id: 1,
  wedding_name: 'Ben & Amy 的婚禮',
  wedding_date: '2022-12-24T08:12:33.230Z',
};

const userData = {
  id: 1,
  nickname: 'Den',
  email: 'den@gmail.com',
  phone: '12341234',
};

const todoData = [
  {
    id: 1,
    item: '試衫',
    detail: '去搵amy試下size，順便問下幾多錢',
    date_to_wedding: '30',
  },
];

// const filterItems = (items) => {
//   if ()
// }

function getNumberOfDays(
  start: string | number | Date,
  end: string | number | Date
) {
  const date1 = new Date(start);
  const date2 = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

console.log(getNumberOfDays('2/1/2021', Date.now()));

export default function HomeScreen() {
  const navigation: any = useNavigation();

  const [fadeAnim] = useState(new Animated.Value(0));

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };

  const [index, setIndex] = useState(0);
  return (
    <>
      <Box safeAreaTop backgroundColor="#f2f2f2" />
      <View
        style={{
          bottom: '0.2%',
          // left: '2%',
          paddingHorizontal: '3%',
          zIndex: 10,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <Box style={{ height: 36 }}></Box>
      </View>
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <Box
          alignItems="center"
          pb="0.2"
          borderBottomWidth="1"
          borderColor="#d4d4d4"
        >
          <Text
            fontSize="17"
            fontWeight="semibold"
            position="absolute"
            bottom="11%"
            pb={1}
          >
            {eventData.wedding_name}
          </Text>
        </Box>
      </Animated.View>
      <Animated.ScrollView
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.y > 70) {
            fadeIn();
          } else {
            fadeOut();
          }
        }}
      >
        <Box safeAreaX={3} safeAreaY={1}>
          <Heading size="xl" textAlign="left" mb="3">
            {userData.nickname} 你好!
          </Heading>
          <Carousel
            data={[
              {
                title: 'Item 1',
                text: 'Text 1',
              },
              {
                title: 'Item 2',
                text: 'Text 2',
              },
              {
                title: 'Item 3',
                text: 'Text 3',
              },
              {
                title: 'Item 4',
                text: 'Text 4',
              },
              {
                title: 'Item 5',
                text: 'Text 5',
              },
            ]}
            renderItem={({ item, index }) => {
              return (
                <Box shadow={3}>
                  <Image
                    source={{
                      uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
                    }}
                    alt="Aang flying and surrounded by clouds"
                    height="200"
                    width={367}
                    maxWidth="100%"
                    roundedTop="lg"
                  />
                  <Box
                    bg="primary.600"
                    py="4"
                    px="3"
                    mb="4"
                    roundedBottom="lg"
                    alignSelf="center"
                    width={367}
                    maxWidth="100%"
                  >
                    <Heading size="2xl" color="white" textAlign="left">
                      {eventData.wedding_name}
                    </Heading>
                    <Heading size="lg" color="white" textAlign="left" mb="3">
                      將於{getNumberOfDays(Date.now(), eventData.wedding_date)}
                      日後開始
                    </Heading>
                  </Box>
                </Box>
              );
            }}
            sliderWidth={367}
            itemWidth={367}
            layout={'default'}
          />
          <Heading size="lg" textAlign="left" mb="3">
            你的時間表
          </Heading>

          <Box
            bg="primary.600"
            py="4"
            px="3"
            mb="4"
            rounded="lg"
            alignSelf="center"
            width={375}
            maxWidth="100%"
            shadow={3}
          >
            <HStack>
              <Heading size="lg" color="white" textAlign="left" mr="3">
                08:00
              </Heading>
              <VStack>
                <Heading size="lg" color="white" textAlign="left">
                  到場
                </Heading>
                <Heading size="md" color="white" textAlign="left">
                  買早餐上新郎屋企
                </Heading>
              </VStack>
            </HStack>
          </Box>
          <Box
            bg="primary.600"
            py="4"
            px="3"
            mb="4"
            rounded="lg"
            alignSelf="center"
            width={375}
            maxWidth="100%"
            shadow={3}
          >
            <HStack>
              <Heading size="lg" color="white" textAlign="left" mr="3">
                08:00
              </Heading>
              <VStack>
                <Heading size="lg" color="white" textAlign="left">
                  到場
                </Heading>
                <Heading size="md" color="white" textAlign="left">
                  買早餐上新郎屋企
                </Heading>
              </VStack>
            </HStack>
          </Box>
        </Box>
      </Animated.ScrollView>
    </>

    /* <Box
            bg="primary.600"
            py="4"
            px="3"
            mb="4"
            rounded="md"
            alignSelf="center"
            width={375}
            maxWidth="100%"
          >
            <HStack justifyContent="space-between">
              <Box justifyContent="space-between">
                <VStack space="2">
                  <Text fontSize="sm" color="white">
                    Today @ 9PM
                  </Text>
                  <Text color="white" fontSize="lg">
                    Let's talk about avatar!
                  </Text>
                </VStack>
                <Pressable
                  rounded="sm"
                  bg="primary.400"
                  alignSelf="flex-start"
                  py="4"
                  px="3"
                >
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    color="white"
                  >
                    Remind me
                  </Text>
                </Pressable>
              </Box>
              <Image
                source={{
                  uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
                }}
                alt="Aang flying and surrounded by clouds"
                height="100"
                rounded="full"
                width="100"
              />
            </HStack>
          </Box>
          <Box
            bg="primary.600"
            py="4"
            px="3"
            mb="4"
            rounded="md"
            alignSelf="center"
            width={375}
            maxWidth="100%"
          >
            <HStack justifyContent="space-between">
              <Box justifyContent="space-between">
                <VStack space="2">
                  <Text fontSize="sm" color="white">
                    Today @ 9PM
                  </Text>
                  <Text color="white" fontSize="lg">
                    Let's talk about avatar!
                  </Text>
                </VStack>
                <Pressable
                  rounded="sm"
                  bg="primary.400"
                  alignSelf="flex-start"
                  py="4"
                  px="3"
                >
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    color="white"
                  >
                    Remind me
                  </Text>
                </Pressable>
              </Box>
              <Image
                source={{
                  uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
                }}
                alt="Aang flying and surrounded by clouds"
                height="100"
                rounded="full"
                width="100"
              />
            </HStack>
          </Box> */
  );
}
