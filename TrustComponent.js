/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './ScreenStyles';
import TrusItemsRow from './TrusItemsRow';
import { trustedData } from './screens/data';
const TrustComponent = () => {
  return (
    <View style={{  marginTop: 20 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'black',
          marginBottom: 5,
          marginLeft:10,
        }}
      >
        Trusted picks for you!!
      </Text>
      <TouchableOpacity style={{width: "20%", borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: 'black',
    alignItems: 'center', 
    marginLeft: 8, // Center the content horizontally

}}>
          <Text style={{fontSize: 12,
    fontWeight: 'bold',
    color: 'white'}}>Reorder</Text>
        </TouchableOpacity>
        <TrusItemsRow data={trustedData} />

      </View>
  );
};
 export default TrustComponent;
