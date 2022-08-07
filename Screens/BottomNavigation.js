import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
// Bottom Screens
import LiveScreen from './LiveScreen';
import AboutScreen from './AboutScreen';
import SettingsScreen from './SettingsScreen';
const Tab = createBottomTabNavigator();
const {height, width} = Dimensions.get('window');
const BottomNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            bottom: 0,
            top: -10,
            fontFamily: 'Poppins-Regular',
            fontSize: 10,
          },
          tabBarActiveTintColor: '#15793b',
          tabBarStyle: {
            position: 'absolute',
            bottom: 15,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 15,
            height: 70,
            ...bottomNavStyles.btmBarshadow,
          },
        }}>
        <Tab.Screen
          name="Live"
          component={LiveScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'radio' : 'radio-outline'}
                color={focused ? 'green' : 'black'}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'apps' : 'apps-outline'}
                color={focused ? 'green' : 'black'}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'settings' : 'settings-outline'}
                color={focused ? 'green' : 'black'}
                size={30}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const bottomNavStyles = StyleSheet.create({
  btmBarshadow: {
    shadowColor: '#15793b',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomNavigation;
