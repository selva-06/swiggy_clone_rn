/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

const TrusItemsRow = ({ data }) => {
  return (
    <View style={styles.itemsRow}>
      {data.map((item, index) => (
        <View style={styles.itemWrapper} key={index}>
          <View style={styles.itemContainer}>
            <ImageBackground source={item.source} style={styles.itemImage}>
              <View style={styles.labelContainer}>
                <Image source={require('./assets/save.png')} style={styles.labelImage} />
              </View>
              <View style={styles.heartContainer}>
                <Image source={require('./assets/heart1.png')} style={styles.heartImage} />
              </View>
              {/* Gradient overlay for adText */}
                            <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.5)']} // Set your gradient colors
                style={styles.gradientOverlay}
              >
                <View style={styles.overlayContent}>
                  <Text style={styles.adText}>Ad</Text>
                </View>              
              </LinearGradient>

              <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.5)']} // Set your gradient colors
                style={styles.gradientOverlay}
              >
                <View style={styles.overlayContent}>
                  <Text style={styles.offerPrice}>{item.offerPrice}</Text>
                </View>
              </LinearGradient>
            </ImageBackground>
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.hotelName}</Text>
            <View style={styles.ratingsContainer}>
              <Image source={require('./assets/rate.png')} style={styles.starImage} />
              <Text style={styles.itemRate}>{item.ratings}</Text>
              <Text style={styles.itemMin}>{' . '}{item.min}</Text>
            </View>
            <Text style={styles.itemType}>{item.type}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = {
    labelContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
      },
      labelImage: {
        width: 40, // Adjust the width as needed
        height: 40, // Adjust the height as needed
        resizeMode: 'contain',
      },
      heartContainer: {
        position: 'absolute',
        top: 3,
        right: 6,
        zIndex: 1,
      },
      heartImage: {
        width: 20, // Adjust the width as needed
        height: 20, // Adjust the height as needed
        resizeMode: 'contain',
      },
  itemsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  itemWrapper: {
    width: '30%',
    marginBottom: 0,
    paddingHorizontal: 5,
    marginRight: 0,

  },
  itemContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
    width: "110%",
    position: 'relative',
  },
  itemImage: {
    width: '100%',
    height: 120,
    resizeMode: 'center',
    borderColor: 'white', // Add border color here
    borderWidth: 1, // 
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90, // Adjust this value to control the height of the gradient overlay
    justifyContent: 'flex-end',
  },
  overlayContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  adText: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  offerPrice: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
    left: 10,
  },
  itemDetails: {
    backgroundColor: 'white',
  },
  itemName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
  },
  itemRate: {
    fontSize: 10,
    color: 'black',
  },
  itemMin: {
    fontSize: 10,
    color: 'black',
  },
  itemType: {
    fontSize: 10,
    color: '#919091',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },

};

export default TrusItemsRow;
