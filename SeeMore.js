/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './ScreenStyles';
const SeeMoreComponent = ({navigation}) => {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.borderLine} />
      <TouchableOpacity style={styles.seeMoreButton} onPress={() => navigation.navigate('Hello')} >
        <Text style={styles.seeMoreText}>See more restaurants</Text>
        <Text style={styles.vSymbol}>&gt;</Text>
      </TouchableOpacity>
      <View style={styles.borderLine} />
    </View>
  );
};

export default SeeMoreComponent;
