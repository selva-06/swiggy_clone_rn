/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const NavaratriSaleComponent = () => {
  return (
    <LinearGradient
      colors={['rgba(135, 206, 250, 0.1)', 'rgba(135, 206, 250, 0.5)']}
      style={{
        padding: 10,
        margin: 10,
        borderRadius: 5,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 5,
            color: 'black',
          }}
        >
          Navaratri Sale & Offers
        </Text>
        <Text style={{ fontSize: 16, color: 'black' }}>
          Get amazing discounts and special offers during this Navaratri season.
        </Text>
      </View>
      <Image
        source={require('./assets/offer.png')} // Adjust the path and filename
        style={{ width: 100, height: 100, resizeMode: 'cover' }}
      />
    </LinearGradient>
  );
};

export default NavaratriSaleComponent;
