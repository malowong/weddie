import { Box, Heading, NativeBaseProvider, Text } from "native-base";
import React, { useState } from "react";
import { Animated } from "react-native";

interface ITopBarProps {
    children: any;
    pageName: any;
}

export default function TopBar(props: ITopBarProps) {
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
      <NativeBaseProvider>
        <Box safeAreaTop backgroundColor="#f2f2f2" />
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
              height="30"
            >
              <Text fontSize="17" fontWeight="semibold">
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
            <Heading size="xl" textAlign="left" mb="3">
            {props.pageName}
            </Heading>
            {props.children}
          </Box>
        </Animated.ScrollView>
      </NativeBaseProvider>
    );
  }
  