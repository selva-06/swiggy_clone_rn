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
        source={require('./assets/offer.png')} // Replace with your top left image
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          width: 60,
          height: 80,
          resizeMode: 'cover',
          opacity: 0.5, // Adjust the opacity as needed
        }}
      />
      <Image
        source={require('./assets/offer.png')} // Replace with your top right image
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          width: 60,
          height: 80,
          resizeMode: 'cover',
          opacity: 0.7, // Adjust the opacity as needed
        }}
      />
    </LinearGradient>
  );
};

export default GradientComponent;
