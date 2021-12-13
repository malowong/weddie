/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>主頁</Text>
      <Text style={styles.baseText}>主頁主頁主頁主頁主頁</Text>
    </View>
  );
}

function ParticipantsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>人員名單</Text>
      <Text style={styles.baseText}>人員名單人員名單人員名單</Text>
    </View>
  );
}

function MainScreen() {
  return <View style={styles.screen}></View>;
}

function ModalScreen({navigation}: {navigation: any}) {
  return (
    <View
      style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
      <View
        style={{
          height: '50%',
          width: '100%',
          backgroundColor: '#fff',
          justifyContent: 'center',
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
        }}>
        <View style={styles.mainModalRow}>
            <TouchableOpacity style={styles.mainModalButton}>
              <Ionicons name={'ios-logo-usd'} size={50} />
              <Text>婚禮預算</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainModalButton}>
              <Ionicons name={'ios-checkbox'} size={50} />
              <Text>待辦事項</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainModalButton}>
              <Ionicons name={'ios-briefcase'} size={50} />
              <Text>物資管理</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainModalButton}>
              <Ionicons name={'ios-person-add'} size={50} />
              <Text>來賓安排</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainModalButton}>
              <Ionicons name={'ios-home'} size={50} />
              <Text>當日流程</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainModalButton}>
              <Ionicons name={'ios-home'} size={50} />
              <Text>未知</Text>
            </TouchableOpacity>
        </View>
        <Button onPress={() => navigation.goBack()} title="返回" />
      </View>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>訊息通知</Text>
      <Text style={styles.baseText}>訊息通知訊息通知訊息通知訊息通知</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>用戶設定</Text>
      <Text style={styles.baseText}>設定設定設定設定設定設定</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '主頁',
          tabBarIcon: ({focused, color, size}) => (
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
          tabBarIcon: ({focused, color, size}) => (
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
        component={MainScreen}
        options={{
          tabBarLabel: '加入',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'}
              color={color}
              size={size}
            />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
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
          tabBarIcon: ({focused, color, size}) => (
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
        component={SettingsScreen}
        options={{
          tabBarLabel: '用戶設定',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'ios-person-circle' : 'ios-person-circle-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

function RootStackScreen() {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
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
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontSize: 15,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  screen: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingTop: '15%',
  },
  mainModalRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },
  mainModalButton: {
    paddingHorizontal: 30,
    alignItems: 'center',
    paddingBottom: 30,
  },
});

export default App;
