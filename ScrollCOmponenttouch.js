/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import styles from './ScreenStyles';
import RestaurantData from './RestaurantDataMenuCard';
const ScrollComponent = () => {
  return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Sort by</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Fast Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Cuisines</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>New on Swiggy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Ratings 4.0+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Pure Veg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Rs. 300-Rs. 600</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Less than Rs. 300</Text>
        </TouchableOpacity>
      </ScrollView>
  );
};

export default ScrollComponent;
