import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { InfoPage } from '../pages/InfoPage';
import { SocialPage } from '../pages/SocialPage';
import { TabNavigator } from './TabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen 
          name='Home'
          component={ TabNavigator }
        />
        <Drawer.Screen 
          name='Información'
          component={ InfoPage }
        />
        <Drawer.Screen 
          name='Redes sociales'
          component={ SocialPage }
        />
    </Drawer.Navigator>
  )
}
