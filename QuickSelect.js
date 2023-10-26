/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const QuickSelectComponent = ({ handleTextClick }) => {
  return (
    <View>
      <Text style={styles.headtext}>Quick picks for you</Text>
      <View style={styles.rowContainer}>
      <TouchableOpacity style={{width: "25%", borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: 'black',
    alignItems: 'center', 
    marginLeft: 8, // Center the content horizontally

}} onPress={() => handleTextClick(1)}>
          <Text style={{fontSize: 12,
    fontWeight: 'bold',
    color: 'white'}}>Get it Quickly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: "20%", borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: 'black',
    alignItems: 'center', 
    marginLeft: 8, // Center the content horizontally

}}
        onPress={() => handleTextClick(2)}>
          <Text style={{fontSize: 12,
    fontWeight: 'bold',
    color: 'white'}}> Pure Veg </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: "30%", borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: 'black',
    alignItems: 'center', 
    marginLeft: 8, // Center the content horizontally

}}
         onPress={() => handleTextClick(3)}>
          <Text style={{fontSize: 12,
    fontWeight: 'bold',
    color: 'white'}}> Popular Brands </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
    clickableText: {
      width: "100%", borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: 'black',
    alignItems: 'center', 
    marginLeft: 8,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'blue',
    },
    headtext: {
      fontSize: 18,
          fontWeight: 'bold',
          color: 'black',
          marginBottom: 8,
          marginHorizontal: 10,
    },
    itemsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    itemContainer: {
      width: '30%', // Adjust the width as needed
      borderRadius: 5,
      overflow: 'hidden',
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      marginHorizontal: 5, // Add margin here
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 5,
    },
    itemImage: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
    },
    rowContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      // marginHorizontal: 30,
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 50, // Adjust the height of the overlay here
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      padding: 10,
    },
    offerPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 5,
    },
    adText: {
      position: 'absolute',
      bottom: 5,
      right: 5,
      fontSize: 16,
      color: 'white',
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 5,
    },
  };
export default QuickSelectComponent;
