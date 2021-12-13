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
 import { createStackNavigator } from '@react-navigation/stack';
 import {
   Button,
   Modal,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
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
 
 function HomeScreen() {
   return (
     <View style={{flex: 1, padding: '5%'}}>
       <Text style={styles.titleText}>主頁</Text>
       <Text style={styles.baseText}>主頁主頁主頁主頁主頁</Text>
     </View>
   );
 }
 
 function ParticipantsScreen() {
   return (
     <View style={{flex: 1, padding: '5%'}}>
       <Text style={styles.titleText}>人員名單</Text>
       <Text style={styles.baseText}>人員名單人員名單人員名單</Text>
     </View>
   );
 }
 
 function MainScreen() {
   return (
     <View style={{flex: 1, padding: '5%'}}>
       {/* <Text style={styles.titleText}>加入</Text>
       <Text style={styles.baseText}>加入加入加入加入加入加入加入</Text> */}
     </View>
   );
 }

 function ModalScreen({navigation}: {navigation: any}) {
   return (
    <View style={{flex: 1 ,flexDirection: 'column', justifyContent: 'flex-end'}}>
      <View style={{ height: "50%" ,width: '100%', backgroundColor:"#fff", justifyContent:"center", borderTopStartRadius:25, borderTopEndRadius:25}}>
        <Text>this is modal</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    </View>

   )
 }
 
 function NotificationsScreen() {
   return (
     <View style={{flex: 1, padding: '5%'}}>
       <Text style={styles.titleText}>訊息通知</Text>
       <Text style={styles.baseText}>訊息通知訊息通知訊息通知訊息通知</Text>
     </View>
   );
 }
 
 function SettingsScreen() {
   return (
     <View style={{flex: 1, padding: '5%'}}>
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
           }}
         >
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
   )
 }
 
 const RootStack = createStackNavigator();
 
 function RootStackScreen() {
   return (
     <RootStack.Navigator screenOptions={{headerShown: false, animationEnabled: false, presentation: 'modal', cardStyle:{
      backgroundColor:"transparent",
      opacity:0.99
      }}}>
      <RootStack.Screen name="TabScreen" component={TabScreen} />
      <RootStack.Screen name="ModalScreen" component={ModalScreen} options={{ animationEnabled: true }}/>
     </RootStack.Navigator>
   )
 }
 
 const App = () => {
 
   return (
     <NavigationContainer>
       <SafeAreaView style={{flex: 1, backgroundColor: '#F2F2F2'}}>
         <RootStackScreen />
       </SafeAreaView>
       <SafeAreaView style={{flex: 0, backgroundColor: '#FFFFFF'}} />
     </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({
   baseText: {
   },
   titleText: {
     fontSize: 40,
     fontWeight: "bold",
     marginBottom: '5%',
   }
 });
 
 export default App;
 