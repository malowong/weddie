import { useNavigation } from '@react-navigation/native';
import { Box, Heading, Icon, NativeBaseProvider, Text } from 'native-base';
import React, { useState } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ITopBarProps {
  children: any;
  pageName: any;
  navigate: any;
  show: any;
}

export default function HomeScreenTopBar(props: ITopBarProps) {

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
        {props.show === 'true' && <TouchableOpacity onPress={() => navigation.navigate("CreateStackScreen", {screen: `${props.navigate}`})}>
          <Icon as={Ionicons} name="add" size="9"/>
        </TouchableOpacity>}
        <Box style={{height: 36}}></Box>
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
            {props.pageName}
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
          {props.children}
        </Box>
      </Animated.ScrollView>
    </>
  );
}
