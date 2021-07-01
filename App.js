import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import MyTabs from './navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
