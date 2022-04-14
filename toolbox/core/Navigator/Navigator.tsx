import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useTranslation} from 'react-i18next';

import Home from '../Home';
import TemplatePage from '../TemplatePage';

const Navigator = () => {
  const Tab = createBottomTabNavigator();

  const {t} = useTranslation();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return null;
          },
        })}>
        <Tab.Screen key="Home" name={t('home')} component={Home} />
        <Tab.Screen
          key="Template"
          name="Template"
          component={TemplatePage}
          options={{title: t('home')}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
