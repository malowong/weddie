import * as React from 'react';
import { Box, HStack, VStack, Text, Image, Heading, View } from 'native-base';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import { useQuery } from 'react-query';
import { config } from '../../../app.json';

const rundownData = [
  {
    id: 1,
    time: '2022-12-24T03:02:00.230Z',
    item: '到場',
    detail: '買早餐上新郎屋企',
    date_to_wedding: '30',
  },
  {
    id: 2,
    time: '2022-12-24T05:02:00.230Z',
    item: '新郎化妝',
    detail: '化妝師協助',
    date_to_wedding: '30',
  },
  {
    id: 3,
    time: '2022-12-24T05:02:00.230Z',
    item: '新郎化妝',
    detail: '化妝師協助',
    date_to_wedding: '30',
  },
  {
    id: 4,
    time: '2022-12-24T05:02:00.230Z',
    item: '新郎化妝',
    detail: '化妝師協助',
    date_to_wedding: '30',
  },
  {
    id: 5,
    time: '2022-12-24T05:02:00.230Z',
    item: '新郎化妝',
    detail: '化妝師協助',
    date_to_wedding: '30',
  },
  {
    id: 6,
    time: '2022-12-24T05:02:00.230Z',
    item: '新郎化妝',
    detail: '化妝師協助',
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

// function getTime(time: string | number | Date) {
//   const dateTime = new Date(time);
//   const hours = dateTime.getHours().toString().padStart(2, '0');
//   const minutes = dateTime.getMinutes().toString().padStart(2, '0');
//   return `${hours}:${minutes}`;
// }

function getTimeString(time: string) {
  return time.substring(0, 5);
}

function getTime(itinerary_time: string) {
  const time = new Date();
  time.setHours(parseInt(itinerary_time.substring(0, 2)));
  time.setMinutes(parseInt(itinerary_time.substring(3, 5)));
  return time;
}

export default function HomeScreen() {
  const navigation: any = useNavigation();

  const [fadeAnim] = useState(new Animated.Value(0));

  const userData = useSelector((state: IRootState) => state.auth.user);
  console.log(userData);
  const eventData: any = useSelector((state: IRootState) => state.event.event);
  const token = useSelector((state: IRootState) => state.auth.token);

  console.log(eventData);
  console.log(eventData.id);

  const [itinList, setItinList] = useState([]);
  const { isLoading, error, data } = useQuery('itinData', async () => {
    const resp = await fetch(
      `${config.BACKEND_URL}/api/itin/me/${eventData.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await resp.json();
    console.log('data: ', data);

    data.sort((a: any, b: any) => {
      const keyA = getTime(a.itinerary_time);
      const keyB = getTime(b.itinerary_time);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });

    console.log('data sorted: ', data);

    setItinList(data);
  });

  const carouselData_couple = [
    {
      title: eventData.wedding_name,
      text: `將於${getNumberOfDays(
        Date.now(),
        eventData.wedding_date
      )}日後開始`,
      image: require('../../images/template_1.jpeg'),
    },
    {
      title: '邀請你的朋友幫忙',
      text: '於人員名單加入你的兄弟姊妹',
      image: require('../../images/template_4.jpeg'),
    },
    {
      title: '記下你的所有事項',
      text: '於待辦事項新增事件',
      image: require('../../images/template_3.jpeg'),
    },
  ];

  const carouselData_parti = [
    {
      title: eventData.wedding_name,
      text: `將於${getNumberOfDays(
        Date.now(),
        eventData.wedding_date
      )}日後開始`,
      image: require('../../images/template_1.jpeg'),
    },
    {
      title: '看看有什麼需要幫忙',
      text: '你可於待辦事項查看',
      image: require('../../images/template_3.jpeg'),
    },
    {
      title: '熟習當日流程',
      text: '於當日流程查看最新時間表',
      image: require('../../images/template_2.jpeg'),
    },
  ];

  const carouselData_helper = [
    {
      title: eventData.wedding_name,
      text: `將於${getNumberOfDays(
        Date.now(),
        eventData.wedding_date
      )}日後開始`,
      image: require('../../images/template_1.jpeg'),
    },
    {
      title: '聯絡查詢最新安排',
      text: '你可於人員名單查詢各人聯絡方式',
      image: require('../../images/template_3.jpeg'),
    },
    {
      title: '預早了解當日行程',
      text: '查閱「你的時間表」了解更多',
      image: require('../../images/template_2.jpeg'),
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
            {userData ? userData.nickname : ''} 你好!
          </Heading>
          <Carousel
            data={
              getNumberOfDays(Date.now(), eventData.wedding_date) === 0
                ? carouselData_today
                : eventData.role === '新郎' || eventData.role === '新娘'
                ? carouselData_couple
                : eventData.role === '兄弟' || eventData.role === '姊妹'
                ? carouselData_parti
                : carouselData_helper
            }
            renderItem={({ item, index }) => {
              return (
                <Box shadow={3}>
                  <Image
                    source={item.image}
                    alt="Aang flying and surrounded by clouds"
                    height="250"
                    width="100%"
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
                    width="100%"
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
          {itinList.map((item: any, index) => (
            <Box
              key={index}
              bg="primary.600"
              py="4"
              px="3"
              mb="4"
              rounded="lg"
              alignSelf="center"
              width="100%"
              maxWidth="100%"
              shadow={3}
            >
              <HStack>
                <View width="25%">
                  <Heading size="lg" color="white" textAlign="left" mr="3">
                    {getTimeString(item.itinerary_time)}
                  </Heading>
                </View>
                <VStack width="75%">
                  <Heading size="lg" color="white" textAlign="left">
                    {item.itinerary}
                  </Heading>
                  <Text fontSize="md" color="white" textAlign="left">
                    {item.job_duty}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </Box>
      </Animated.ScrollView>
    </>
  );
}
