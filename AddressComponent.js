/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';

const AddressComponent = () => {
  return (
    <View>
      <Image
        source={require('./assets/address.png')}
        style={{
          width: "12%",
          height: "35%",
          position: 'absolute',
          zIndex: 1,
          resizeMode: 'contain',
          marginTop: 16,
        }}
      />
      <Text style={styles.addressTitle}>
        Address{' '}
        <Text>{'\u25BC'}</Text>
        {/* <Image
          source={require('./assets/drop.png')}
          style={styles.dropImage}
        />{' '} */}
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
    marginTop: 11,
},
//   dropImage: {
//     width: 30,
//     height: 25,
//     zIndex: 1,
//     marginTop: 10,
//   },
  addressText: {
    color: 'grey',
    marginLeft: 15,
    marginTop: 0,
  },
};

export default AddressComponent;
