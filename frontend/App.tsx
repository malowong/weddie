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
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { styles } from './style';
import HomeScreen from './screens/HomeScreen';
import ModalScreen from './screens/ModalScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ParticipantsScreen from './screens/ParticipantsScreen';
import BudgetScreen from './screens/BudgetScreen';
import CheckListScreen from './screens/CheckListScreen';
import MaterialScreen from './screens/MaterialScreen';
import GuestScreen from './screens/GuestScreen';
import RundownScreen from './screens/RundownScreen';
import SeatScreen from './screens/SeatScreen';
import SettingScreen from './screens/SettingScreen'
import { Login } from './src/components/Login';



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
        name="Main"
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

const RootStack = createStackNavigator();

function RootStackScreen() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="TabScreen" component={TabScreen} />
      <RootStack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{
          presentation: 'transparentModal',
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          cardOverlayEnabled: true,
        }}
      />
    </RootStack.Navigator>
  );
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    setIsLoggedIn(true);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {!isLoggedIn && <Login onLoginClick={() => login()} />}
        {isLoggedIn && <RootStackScreen />}
        {/* <NativeBaseTesting /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
