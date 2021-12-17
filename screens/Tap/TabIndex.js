import React from 'react';
import {Button, Text, View} from 'react-native';

export function HomeTapScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Detail 1 열기"
        onPress={() => {
          navigation.push('Detail', {
            id: 1,
          });
        }}
      />
    </View>
  );
}
export function SearchTapScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}
export function NotificationTapScreen() {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
}
export function MessageTapScreen() {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
}
