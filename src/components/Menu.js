import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import UserDetailScreen from '../screens/profile/UserDetailScreen';
import UserGardenAddScreen from '../screens/garden/UserGardenAddScreen';
import PostDetailScreen from '../screens/post/PostDetailScreen';

const Drawer = createDrawerNavigator();

export default function Menu({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="UserDetailScreen">
      <Drawer.Screen name="Adicionar Garden" component={UserGardenAddScreen} />
      <Drawer.Screen name="UserDetailScreen" component={UserDetailScreen} />
      <Drawer.Screen name="PostDetailScreen" component={PostDetailScreen} />
    </Drawer.Navigator>
  );
}
