/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text} from 'react-native';

const ItemsRow = ({images}) => {
  return (
    <View style={styles.itemsRow}>
      {images.map((image, index) => (
        <View style={styles.itemContainer} key={index}>
          <Image source={image.source} style={styles.itemImage} />
          <View style={styles.overlay}>
            <Text style={styles.offerPrice}>{image.offerPrice}</Text>
            <Text style={styles.adText}>ad</Text>
          </View>
        </View>
      ))}
    </View>
  );
};


const styles = {
  clickableText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'lightgrey',
  },
  headtext: {
    fontSize: 22,
    color: 'black',
    marginHorizontal: 30,
    marginBottom: 20,
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
    marginHorizontal: 30,
    justifyContent: 'space-between',
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
export default ItemsRow;
