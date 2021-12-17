/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from 'react-native-vector-icons/MaterialIcons';
import DetailScreen from './screens/DetailScreen';
import HeaderlessScreen from './screens/HeaderlessScreen';
import HomeScreen from './screens/HomeScreen';
import {
  HomeTapScreen,
  MessageTapScreen,
  NotificationTapScreen,
  SearchTapScreen,
} from './screens/Tap/TabIndex';

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          headerStyle: {
            backgroundColor: '#29b6f6',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerBackVisible: false,
          headerLeft: ({onPress}) => (
            <TouchableOpacity onPress={onPress}>
              <Text>Left</Text>
            </TouchableOpacity>
          ),
          headerTitle: ({children}) => (
            <View>
              <Text>{children}</Text>
            </View>
          ),
          headerRight: () => (
            <View>
              <Text>Right</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Headerless"
        component={HeaderlessScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
function HomeDrawerScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}
function SettingScreen({navigation}) {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="left"
      backBehavior="history"
      screenOptions={{
        drawerActiveBackgroundColor: '#fb8c00',
        drawerActiveTintColor: 'white',
      }}
      // drawerContent={({navigation}) => (
      //   <SafeAreaView>
      //     <Text>A Custom Drawer</Text>
      //     <Button
      //       onPress={() => navigation.closeDrawer()}
      //       title="Drawer 닫기"
      //     />
      //   </SafeAreaView>
      // )}
    >
      <Drawer.Screen
        name="Home"
        component={HomeDrawerScreen}
        options={{
          title: '홈',
          // headerLeft: () => <Text>Left</Text>,
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: '설정',
        }}
      />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeTapScreen}
          options={{
            title: '홈',
            // tabBarIcon: ({color, size}) => (
            //   <Icon name="home" color={color} size={size} />
            // ),
          }}
        />
        <Tab.Screen name="Search" component={SearchTapScreen} />
        <Tab.Screen name="Notification" component={NotificationTapScreen} />
        <Tab.Screen name="Message" component={MessageTapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
