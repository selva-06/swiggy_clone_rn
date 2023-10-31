/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import styles from './ScreenStyles';
import LinearGradient from 'react-native-linear-gradient';
const RestBev = ({ bevdata }) => {
  return (
    <>
      {bevdata.map((item, index) => (
        <View style={styles.restaurantItem} key={index}>
          <View style={styles.resitemImageContainer}>
            <ImageBackground source={item.imageSource} style={styles.resitemImage}>
            <View style={styles.labelContainer}>
                <Image source={require('./assets/save.png')} style={styles.labelImage} />
              </View>
            <View style={styles.heartContainer}>
              <Image source={require('./assets/heart1.png')} style={styles.heartImage} />
            </View>
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.5)']}
              style={styles.gradientOverlay}>
              <View style={styles.overlayContent}>
                <Text style={styles.resadText}>Ad</Text>
              </View>
            </LinearGradient>
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.5)']}
              style={styles.gradientOverlay}>
              <View style={styles.overlayContent}>
                <Text style={styles.resofferPrice}>{item.offerPrice}</Text>
                <Text style={{color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    fontSize: 14,
    bottom: 12,
    left: 8,}}>{item.texta}</Text>
                <Text style={{color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    fontSize: 14,
    bottom: 25,
    left: 8,}}>{item.textb}</Text>
              </View>
            </LinearGradient>
            </ImageBackground>
          </View>

          <View style={styles.resitemDetails}>
            <View style={{flexDirection: 'row'}}>
  <Text style={styles.resitemName}>{item.name}</Text>
  <Image source={require('./assets/dot.png')} style={styles.dotImage} />
  </View>
  <View style={styles.ratingsContainer}>
    <Image source={require('./assets/rate.png')} style={styles.starImage} />
    <Text style={styles.itemRate}>{item.rating}</Text>
    <Text style={styles.itemMin}>{' . '}{item.min}</Text>
  </View>
  <Text style={styles.resitemDescription}>{item.description}</Text>
  <Text style={styles.resitemDescription}>{item.place}</Text>

  {/* Free Delivery Section */}
  <LinearGradient
colors={['transparent', 'rgba(255, 200, 200, 0.5)']}
style={{borderRadius: 5}}
  >
    <View style={{flexDirection:'row'}}>
    <View style={styles.overlayContent}>
      <Text style={{color:'black', marginTop:10, fontWeight:'bold'}}>FREE DELIVERY</Text>
      <Image
        source={require('./assets/save.png')}
        style={{width: 40, // Adjust the width as needed
        height: 40, // Adjust the height as needed
        resizeMode: 'contain',
        left: 50,
      right:0}}
      />
    </View>
    </View>
  </LinearGradient>
</View>
</View>
      ))}
    </>
  );
};

export default RestBev;
