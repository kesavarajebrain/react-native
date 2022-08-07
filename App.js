import React from 'react';
// provider for redux
import { Provider } from 'react-redux';
import {View, Text, SafeAreaView} from 'react-native';
// Screens
import DrawerNavigation from './Screens/DrawerNavigation';
import  store  from './Redux/store';
const App = () => {
  return(
    <Provider store={store}>
    <DrawerNavigation />
   </Provider>
  )
};

export default App;
