/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, ImageBackground} from 'react-native';

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
              <Image source={require('./assets/heart.png')} style={styles.heartImage} />
            </View>
            <Text style={styles.adText}>Ad</Text>
            <Text style={styles.offerPrice}>{item.offerPrice}</Text>
            </ImageBackground>

          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.hotelName}</Text>
            <View style={styles.ratingsContainer}>
              <Image source={require('./assets/rate.png')} style={styles.starImage} />
              <Text style={styles.itemRate}>{item.ratings}</Text>
            </View>
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
        top: 0,
        right: 0,
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
    marginHorizontal: 5,
  },
  itemWrapper: {
    width: '30%',
    marginHorizontal: 5,
    marginBottom: 0,
  },
  itemContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    position: 'relative',
  },
  itemImage: {
    width: '100%',
    height: 150,
    resizeMode: 'center',
    borderColor: 'white', // Add border color here
    borderWidth: 1, // 
  },
  adText: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'white',
    padding: 5,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  offerPrice: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'white',
    padding: 5,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  itemDetails: {
    backgroundColor: 'white',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemRate: {
    fontSize: 14,
    color: 'green',
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
