/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientComponent = () => {
  return (
    <LinearGradient
    colors={['#ADD8E6', 'white']}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: 200,
    }}>
    <Image
      source={require('./assets/flash.png')} // Replace with your image path
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '75%',
        resizeMode: 'contain',
        opacity: 0.3, // Adjust the opacity as needed
      }}
    />
  </LinearGradient>
  
  );
};

export default GradientComponent;
