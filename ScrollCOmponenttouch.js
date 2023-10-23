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
          <Text style={styles.text}>Text 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Text 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Text 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Text 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Text 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Text 6</Text>
        </TouchableOpacity>
      </ScrollView>
  );
};

export default ScrollComponent;
