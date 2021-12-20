import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FadeInAndOut} from '../AnimationExample/FadeInOut';
import SlideLeftAndRight from '../AnimationExample/SlideLeftAndRight';

function CalendarScreen() {
  return (
    <View style={styles.block}>
      <SlideLeftAndRight />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
});

export default CalendarScreen;
