/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const AddressComponent = ({navigation}) => {
  return (
    <View>
      <Image
        source={require('./assets/address.png')}
        style={{
          width: "10%",
          height: "25%",
          position: 'absolute',
          zIndex: 1,
          resizeMode: 'contain',
          marginTop: 16,
        }}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate("Location")}}>
      <Text style={styles.addressTitle}>
        Address{'\u25BC'}
      </Text>
      </TouchableOpacity>
      <Text style={styles.addressText}>
        445/2/1, Anna Cross Street, Ranipet - 632401
      </Text>
    </View>
  );
};

const styles = {
  addressTitle: {
    fontSize: 16,
    // marginBottom: 5,
    fontWeight: '900',
    color: 'black',
    marginLeft: 25,
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
    marginLeft: 5,
    marginTop: 0,
    fontWeight: '300',
    fontSize: 12,
  },
};

export default AddressComponent;
