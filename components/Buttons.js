import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Buttons = () => {
  return (
    <View
      style={{
        paddingTop: 20,
        //borderWidth: 1,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          //elevation: 10,
          width: 100,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.51,
          borderRadius: 15,
        }}>
        <Text
          style={{
            fontFamily: 'Assistant-Medium',
            fontSize: 22,
            textAlign: 'center',
          }}>
          ז הגיע
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            textDecorationLine: 'underline',
            fontFamily: 'Assistant-Medium',
            fontSize: 22,
            textAlign: 'center',
          }}>
          לה של כו
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
