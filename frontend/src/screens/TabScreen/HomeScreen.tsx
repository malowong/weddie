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

function getNumberOfDays(
  start: string | number | Date,
  end: string | number | Date
) {
  const date1 = new Date(start);
  const date2 = new Date(end);
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
}

const carouselData_couple = [
  {
    title: eventData.wedding_name,
    text: `將於${getNumberOfDays(Date.now(), eventData.wedding_date)}日後開始`,
    image:
      'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
  },
  {
    title: '邀請你的朋友幫忙',
    text: '於人員名單加入你的兄弟姊妹',
    image:
      'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
  },
  {
    title: '記下你的所有事項',
    text: '於待辦事項新增事件',
    image:
      'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
  },
];

const carouselData_parti = [
  {
    title: eventData.wedding_name,
    text: `將於${getNumberOfDays(Date.now(), eventData.wedding_date)}日後開始`,
    image:
      'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
  },
  {
    title: '看看有什麼需要幫忙',
    text: '你可於待辦事項查看',
    image:
      'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
  },
  {
    title: '熟習當日流程',
    text: '於當日流程查看最新時間表',
    image:
      'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
  },
];

const carouselData_helper = [
  {
    title: eventData.wedding_name,
    text: `將於${getNumberOfDays(Date.now(), eventData.wedding_date)}日後開始`,
    image:
      'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
  },
  {
    title: '聯絡查詢最新安排',
    text: '你可於人員名單查詢各人聯絡方式',
    image:
      'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
  },
  {
    title: '預早了解當日行程',
    text: '查閱「你的時間表」了解更多',
    image:
      'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
  },
];

const carouselData_today = [
  {
    title: eventData.wedding_name,
    text: `就是今天！`,
    image:
      'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
  },
];

export default function HomeScreen() {
  const navigation: any = useNavigation();

  const [fadeAnim] = useState(new Animated.Value(0));

  const [role, setRole] = useState('helper'); // couple / parti / helper

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
            data={
              getNumberOfDays(Date.now(), eventData.wedding_date) === 0
                ? carouselData_today
                : role === 'couple'
                ? carouselData_couple
                : role === 'parti'
                ? carouselData_parti
                : carouselData_helper
            }
            renderItem={({ item, index }) => {
              return (
                <Box shadow={3}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    alt="Aang flying and surrounded by clouds"
                    height="250"
                    width={367}
                    maxWidth="100%"
                    roundedTop="lg"
                  />
                  <Box
                    bg="primary.600"
                    pt="4"
                    pb="4"
                    px="3"
                    mb="4"
                    roundedBottom="lg"
                    width={367}
                    maxWidth="100%"
                  >
                    <Heading size="xl" color="white" textAlign="left">
                      {item.title}
                    </Heading>
                    <Text fontSize="md" color="white" textAlign="left">
                      {item.text}
                    </Text>
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
                <Text fontSize="md" color="white" textAlign="left">
                  買早餐上新郎屋企
                </Text>
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
                <Text fontSize="md" color="white" textAlign="left">
                  買早餐上新郎屋企
                </Text>
              </VStack>
            </HStack>
          </Box>
        </Box>
      </Animated.ScrollView>
    </>
  );
}
