import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Screen_1 from '../screens/Screen_1';
import Screen_2 from '../screens/Screen_2';
import TabBarCustom from './TabBarCustom';
import Screen_3 from '../screens/Screen_3';
import Screen_4 from '../screens/Screen_4';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <TabBarCustom {...props} />}>
      <Tab.Screen name="First" component={Screen_1} />
      <Tab.Screen name="Second" component={Screen_2} />
      <Tab.Screen name="Third" component={Screen_3} />
      <Tab.Screen name="Fourth" component={Screen_4} />
    </Tab.Navigator>
  );
}
