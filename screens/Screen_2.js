import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Buttons from '../components/Buttons';
const Screen_2 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={{fontFamily: 'Assistant-SemiBold', fontSize: 34}}>
        !אז הגיע הלילה של כוכב
      </Text>
      <Image source={require('../assets/imageOnboarding2.png')} />
      <Text
        style={{
          width: '80%',
          fontFamily: 'Assistant-Regular',
          fontSize: 24,
          textAlign: 'center',
        }}>
        אז הגיע הלילה של כוכב אז הגיע הלילה של כוכב
      </Text>
      <Buttons />
    </View>
  );
};

export default Screen_2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
