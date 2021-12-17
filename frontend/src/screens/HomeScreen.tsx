import * as React from 'react';
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
} from 'native-base';
import TopBar from '../components/TopBar';

export default function HomeScreen() {
  return (
    <NativeBaseProvider>
      <TopBar pageName="主頁">
          <Box
            bg="primary.600"
            py="4"
            px="3"
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
        </TopBar>   
         </NativeBaseProvider>
  );
}
