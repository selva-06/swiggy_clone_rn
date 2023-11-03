/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Text, Switch, Image } from 'react-native';
import styles from './ScreenStyles';
import RestaurantData from './RestaurantDataMenuCard';
const MenuScroll = () => {
    const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnableda, setIsEnableda] = useState(false);

  const toggleSwitcha = () => setIsEnableda(previousState => !previousState);


  return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={toggleSwitch} style={{marginTop: 30, marginLeft: 10,}}>
        <View style={{ backgroundColor: isEnabled ? '#b55c48' : 'white',borderColor:'#ccc',borderWidth:1, height: 20, width: 50, borderRadius: 10 }}>
          <Image source={require('./assets/nv.png')} style={{ width: 20, height: 15, position: 'absolute', left: isEnabled ? '50%' : 0 , marginTop: 2, resizeMode: 'contain'}} />
        </View>
        <Text>{isEnabled ? 'On' : 'Off'}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={toggleSwitcha} style={{marginTop: 30, marginLeft: 10,}}>
        <View style={{ backgroundColor: isEnableda ? '#32a662' : 'white',borderColor:'#ccc',borderWidth:1, height: 20, width: 50, borderRadius: 10 }}>
          <Image source={require('./assets/v.png')} style={{ width: 20, height: 15, position: 'absolute', left: isEnableda ? '50%' : 0, resizeMode: 'contain', marginTop: 2, }} />
        </View>
        <Text>{isEnableda ? 'On' : 'Off'}</Text>
    </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Non veg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Bestseller</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Cuisines</Text>
        </TouchableOpacity>
      </ScrollView>
  );
};

export default MenuScroll;
