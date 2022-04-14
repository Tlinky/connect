import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Device from './Device/Device';
import Setting from './Setting';
import Keep from './Keep/Keep';

const Home: React.FC<{}> = ({}) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen key="Device" name="Device" component={Device} />
      <Tab.Screen key="Setting" name="Setting" component={Setting} />
      <Tab.Screen key="Keep" name="Keep" component={Keep} />
    </Tab.Navigator>
  );
};

export default Home;
