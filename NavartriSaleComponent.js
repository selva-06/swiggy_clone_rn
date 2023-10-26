/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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
        height: 100,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 5,
            color: 'black',
          }}
        >
          Navaratri Sale & Offers
        </Text>
        <Text style={{ fontSize: 12, color: 'black' }}>
          Get amazing discounts and special offers during this Navaratri season.
        </Text>
        <TouchableOpacity><Text style={{ fontSize: 12, color: 'black', borderColor: 'white', borderWidth:1,backgroundColor: 'white', width: 70, paddingLeft: 5, borderRadius: 7, marginTop: 10, }}>Order Fast</Text></TouchableOpacity>
      </View>
      <Image
        source={require('./assets/dosa.png')} // Adjust the path and filename
        style={{ width: 100, height: 100, resizeMode: 'contain' }}
      />
    </LinearGradient>
  );
};

export default NavaratriSaleComponent;
