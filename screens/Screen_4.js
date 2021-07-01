import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Buttons from '../components/Buttons';
const Screen_4 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={{fontFamily: 'Assistant-SemiBold', fontSize: 34}}>
        !אז הגיע הלילה של כוכב
      </Text>

      <Image source={require('../assets/imageOnboarding4.png')} />
      <Text
        style={{
          width: '80%',
          fontFamily: 'Assistant-Regular',
          fontSize: 24,
          textAlign: 'center',
        }}>
        אז הגיע הלילה של כוכב אז הגיע הלילה של כוכב
      </Text>
      <TouchableOpacity
        style={{
          //elevation: 10,
          width: 250,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.5,
          borderBottomWidth: 0.7,
          borderBottomColor: 'grey',
          borderRadius: 20,
        }}>
        <Text
          style={{
            width: '80%',
            fontFamily: 'Assistant-Medium',
            fontSize: 24,
            textAlign: 'center',
          }}>
          הגיע
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen_4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
