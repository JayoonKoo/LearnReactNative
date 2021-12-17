import React from 'react';
import {Text} from 'react-native';
import {Icon} from 'react-native-vector-icons/MaterialIcons';

export function HomeTapScreen() {
  return (
    <>
      <Icon name="home" />
      <Text>Home</Text>
    </>
  );
}
export function SearchTapScreen() {
  return <Text>Search</Text>;
}
export function NotificationTapScreen() {
  return <Text>Notification</Text>;
}
export function MessageTapScreen() {
  return <Text>Message</Text>;
}
