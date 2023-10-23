/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';

const AddressComponent = () => {
  return (
    <View>
      <Image
        source={require('./assets/location.png')}
        style={{
          width: 20,
          height: 15,
          position: 'absolute',
          left: 5, // Adjusted from left to right
          zIndex: 1,
          resizeMode: 'contain',
          marginTop: 17,
        }}
      />
      <Text style={styles.addressTitle}>
        Address{' '}
        <Image
          source={require('./assets/drop.png')}
          style={styles.dropImage}
        />{' '}
      </Text>
      <Text style={styles.addressText}>
        445/2/1, Anna Cross Street, Ranipet - 632401
      </Text>
    </View>
  );
};

const styles = {
  addressTitle: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 30,
    marginTop: 5,
  },
  dropImage: {
    width: 30,
    height: 25,
    zIndex: 1,
    marginTop: 10,
  },
  addressText: {
    color: 'grey',
    marginLeft: 15,
    marginTop: 0,
  },
};

export default AddressComponent;
