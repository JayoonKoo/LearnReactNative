import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useCallback} from 'react';
import {
  HomeTapScreen,
  MessageTapScreen,
  NotificationTapScreen,
  SearchTapScreen,
} from '../Tap/TabIndex';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';

function OpenDetailButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Detail 1열기"
      onPress={() => navigation.push('Detail', {id: 1})}
    />
  );
}

// const Tap = createMaterialTopTabNavigator();
const Tap = createMaterialBottomTabNavigator();

function MaterialTap() {
  useFocusEffect(
    useCallback(() => {
      console.log('이 화면을 보고 있어요.');
      return () => {
        console.log('다른 화면으로 넘어갔어요.');
      };
    }, []),
  );
  return (
    <Tap.Navigator
      initialRouteName="Home"
      screenOptions={{
        showIcon: true,
      }}
      // screenOptions={{
      //   tabBarIndicatorStyle: {
      //     backgroundColor: '#009788',
      //   },
      //   tabBarActiveTintColor: '#009688',
      //   // tabBarShowLabel: false,
      // }}
    >
      <Tap.Screen
        name="Home"
        component={HomeTapScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
          tabBarColor: 'black',
          tabBarBadge: 'new',
        }}
      />
      <Tap.Screen
        name="Search"
        component={SearchTapScreen}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={24} />
          ),
          tabBarColor: 'gray',
        }}
      />
      <Tap.Screen
        name="Notification"
        component={NotificationTapScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={24} />
          ),
          tabBarColor: 'green',
          tabBarBadge: 30,
        }}
      />
      <Tap.Screen
        name="Message"
        component={MessageTapScreen}
        options={{
          tabBarLabel: '메시지',
          tabBarIcon: ({color}) => (
            <Icon name="message" color={color} size={24} />
          ),
          tabBarColor: 'blue',
          tabBarBadge: true,
        }}
      />
    </Tap.Navigator>
  );
}

export default MaterialTap;
