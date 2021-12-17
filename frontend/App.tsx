/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  Button,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from './style';
import HomeScreen from './src/screens/HomeScreen';
import ModalScreen from './src/screens/ModalScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ParticipantsScreen from './src/screens/ParticipantsScreen';
import BudgetScreen from './src/screens/BudgetScreen';
import CheckListScreen from './src/screens/CheckListScreen';
import MaterialScreen from './src/screens/MaterialScreen';
import GuestScreen from './src/screens/GuestScreen';
import RundownScreen from './src/screens/RundownScreen';
import SeatScreen from './src/screens/SeatScreen';
import SettingScreen from './src/screens/SettingScreen';
import { Login } from './src/components/Login';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import { Provider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';

// import { store } from "./src/redux/store"

const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '主頁',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'ios-home' : 'ios-home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Participants"
        component={ParticipantsScreen}
        options={{
          tabBarLabel: '人員名單',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'ios-people' : 'ios-people-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Modal"
        component={ModalScreen}
        options={{
          tabBarLabel: '加入',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'}
              color={color}
              size={size}
            />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('ModalScreen');
          },
        })}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: '訊息通知',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'ios-notifications' : 'ios-notifications-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: '用戶設定',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'ios-person-circle' : 'ios-person-circle-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BudgetScreen"
        component={BudgetScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="CheckListScreen"
        component={CheckListScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="MaterialScreen"
        component={MaterialScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="GuestScreen"
        component={GuestScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="RundownScreen"
        component={RundownScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="SeatScreen"
        component={SeatScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="TabScreen" component={TabScreen} />
      <MainStack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{
          presentation: 'transparentModal',
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          cardOverlayEnabled: true,
        }}
      />
    </MainStack.Navigator>
  );
}

const RootStack = createStackNavigator();

function RootStackScreen() {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="LoginScreen"
    >
      {/* {!isLoggedIn && <Login onLoginClick={() => login()} />} */}
      {/* {isLoggedIn && <MainStackScreen />} */}
      {/* <NativeBaseTesting /> */}
      <RootStack.Screen name="MainStackScreen" component={MainStackScreen} />
      <RootStack.Screen name="LoadingScreen" component={LoadingScreen} />
      <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    </RootStack.Navigator>
  );
}

const App = () => {
  return (
    // <Provider store={store}>

    <SafeAreaProvider>
      <NavigationContainer>
        <NativeBaseProvider>
          <RootStackScreen />
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>

    // </Provider>
  );
};

export default App;
