import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';

function Dot({active, focused}) {
  console.log(active.name + ' ' + focused);
  return (
    <View
      style={{
        backgroundColor: focused ? 'black' : 'grey',
        width: 10,
        height: 10,
        margin: 10,
        borderRadius: 5,
      }}></View>
  );
}

export default function TabBarCustom({
  state,
  descriptors,
  navigation,
  position,
}) {
  //console.log(props.navigationState);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 100,
        zIndex: 1000,
        backgroundColor: 'transparent',
        width: Dimensions.get('screen').width,
      }}>
      {state.routes.map((route, index) => {
        return <Dot active={route} focused={state.index === index} />;
      })}
    </View>
  );
}
