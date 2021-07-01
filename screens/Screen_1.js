import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
//import imageSrc from '../assets/imageOnboarding1';
import Buttons from '../components/Buttons';

const Screen_1 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={{fontFamily: 'Assistant-SemiBold', fontSize: 34}}>
        !אז הגיע הלילה של כוכב
      </Text>
      <Image source={require('../assets/imageOnboarding1.png')} />
      <Text
        style={{
          width: '80%',
          fontFamily: 'Assistant-Regular',
          fontSize: 24,
          textAlign: 'center',
        }}>
        אז הגיע הלי לה ב אז הגיע ה לילה של כוכב ב אז הגיע
      </Text>
      <Buttons />
    </View>
  );
};

export default Screen_1;

const styles = StyleSheet.create({
  container: {
    //paddingTop: 50,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
});
