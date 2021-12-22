import React, { useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ChooseScreen from "./AuthStackScreen/ChooseScreen";
import CreateEventScreen from "./AuthStackScreen/CreateEventScreen";
import JoinEventScreen from "./AuthStackScreen/JoinEventScreen";
import LoginScreen from "./AuthStackScreen/LoginScreen";
import SignupScreen from "./AuthStackScreen/SignupScreen";
import WelcomingScreen from "./AuthStackScreen/WelcomingScreen";

const AuthStack = createStackNavigator();

export default function AuthStackScreen({ navigation }: { navigation: any }) {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="WelcomingScreen"
    >
      <AuthStack.Screen name="WelcomingScreen" component={WelcomingScreen} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
      <AuthStack.Screen name="ChooseScreen" component={ChooseScreen} />
      <AuthStack.Screen
        name="CreateEventScreen"
        component={CreateEventScreen}
      />
      <AuthStack.Screen name="JoinEventScreen" component={JoinEventScreen} />
    </AuthStack.Navigator>
  );
}