import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// Bottom navigation
import BottomNavigation from './BottomNavigation';
import SettingsScreen from './SettingsScreen';
import DrawerContent from './DrawerContent'; // this for drawer top image content
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          drawerLabelStyle: {marginLeft: -20, fontFamily: 'Poppins-Regular'},
          drawerActiveBackgroundColor: '#c4edea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: 'black',
        }}>
        <Drawer.Screen
          name="Home"
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
          component={BottomNavigation}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="settings-outline" size={22} color={color} />
            ),
          }}
          component={SettingsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
