import {
  View,
  Text,
  Alert,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// access
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const dw = Dimensions.get('window').width;
var a = '09s'

const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'white'}}>
        <ImageBackground
          imageStyle={{backgroundColor: '#c4edea'}}
          source={{
            uri: 'https://img.freepik.com/free-vector/oriental-mandala-frame-floral_53876-115955.jpg?size=626&ext=jpg&ga=GA1.2.768304847.1657902583',
          }}
          style={{top: -4, height: 200, width: dw}}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dik4mzdta/image/upload/v1610183573/vaanisai_og_1_ya2ea5.jpg',
            }}
            style={{height: 100, width: 100, borderRadius: 50, margin: 20}}
          />
          <Text
            style={{
              color: '#15793b',
              marginLeft: 20,
              fontSize: 18,
              fontFamily: 'Poppins-Regular',
            }}>
            VAANISAI FM
          </Text>
          <Text
            style={{
              color: '#15793b',
              fontSize: 12,
              marginLeft: 20,
              fontFamily: 'Poppins-Regular',
            }}>
            Tamilnadu's Exclusive Online Channel!
          </Text>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={{paddingVertical:15}}>
        <View style={{padding: 10, borderTopColor: '#ccc', borderTopWidth: 2,borderRadius:10}}>
          <Text style={{color: 'black'}}>App Release: {a}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;
