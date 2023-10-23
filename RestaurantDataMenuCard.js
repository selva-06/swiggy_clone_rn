/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './ScreenStyles';
const RestaurantData = ({ restaurantData }) => {
  return (
    <>
      {restaurantData.map((item, index) => (
        <View style={styles.restaurantItem} key={index}>
          <View style={styles.resitemImageContainer}>
            <ImageBackground
              source={item.imageSource}
              style={styles.resitemImage}>
              <Text style={styles.resitemText}>{item.offerPrice}</Text>
            </ImageBackground>
            <View style={styles.resshadow} />
          </View>
          <View style={styles.resitemDetails}>
            <Text style={styles.resitemName}>{item.name}</Text>
            <Text style={styles.resitemRating}>{item.rating}</Text>
            <Text style={styles.resitemDescription}>
              {item.description}
            </Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default RestaurantData;
