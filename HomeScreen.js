/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.arrowIcon}
        source={require('./assets/arrow.png')} // Replace with your left arrow icon path
      />

    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.hotelName}>Das & Co Cafe</Text>
        <View style={styles.iconsContainer}>
          <Image
            style={styles.icon}
            source={require('./assets/share.png')} // Replace with your first icon path
          />
          <Image
            style={styles.icon}
            source={require('./assets/heart.png')} // Replace with your second icon path
          />
        </View>
      </View>
      <View style={styles.ratingsContainer}>
              <Image source={require('./assets/rate.png')} style={styles.starImage} />
              <Text style={styles.itemRate}>4.2 (10K+ ratings)</Text>
              <Image source={require('./assets/i.png')} style={styles.iImage} />
              <Image source={require('./assets/dottt.png')} style={styles.dottImage} />
              <Text style={styles.itemMin}>{'\u20B9500 for two'}</Text>
        </View>
        <Text style={styles.itemType}>Coffee, Beverages</Text>
        {/* <View style={styles.borderContainer}>
      <View style={styles.borderLine} />
      <TouchableOpacity style={styles.seeMoreButton}>
        <Text style={styles.seeMoreText}>See more restaurants</Text>
        <Text style={styles.vSymbol}>&gt;</Text>
      </TouchableOpacity>
      <View style={styles.borderLine} />
    </View> */}
    <View style={styles.bcontainer}>
  <Image source={require('./assets/td1.png')} style={styles.leftImage} />

  <View style={styles.lineContainer}>
    <View style={styles.horizontalLine} />
    <View style={styles.rowContainer}>
      <Text style={{color:'black'}}>Text 1</Text>
      <Text style={{color:'black'}}>Text 2</Text>
      <Image source={require('./assets/dottt.png')} style={styles.inlineImage} />
    </View>
    <View style={styles.rowContainer}>
      <Text style={{color:'black'}}>Text 3</Text>
      <Text style={{color:'black'}}>Text 4</Text>
      <Image source={require('./assets/dottt.png')} style={styles.inlineImage} />
    </View>
    <View style={styles.horizontalLine} />
    <Text style={{color:'black'}}>hi</Text>
  </View>
</View>

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bcontainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  leftImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  lineContainer: {
    marginLeft: 10,
    flex: 1,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  inlineImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  container: {
    position: 'relative',
    margin: 25,
  },
  arrowIcon: {
    position: 'relative',
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    zIndex: 1, // Ensures the arrow is above the card
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    // margin: 10,
    // marginTop: 30,
    width: "100%",
    backgroundColor: '#fff',
    elevation: 2, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 0, height: 2 }, // For shadow on iOS
    shadowOpacity: 0.2, // For shadow on iOS
    shadowRadius: 4, // For shadow on iOS
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
    top: 0,
    right: 0,
    resizeMode: 'contain'
  },
  content: {
    padding: 10,
    marginLeft: 10,
  },
  description: {
    fontSize: 16,
    color: 'black',
  },
  itemRate: {
    fontSize: 12,
    color: '#6b6b6b',
    fontWeight: 'bold',
  },
  itemMin: {
    fontSize: 12,
    color: '#6b6b6b',
    fontWeight: 'bold',  
  },
    ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -10, // Adjust this value as needed to align the ratings with the hotel name
    marginLeft:6,
  },
  starImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    // marginTop: 3,
  },
  iImage: {
    width: 20,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 5,
    marginTop: 3,
    marginRight: 2,
  },
  dottImage: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    marginTop: 3,
    marginRight: 2,
  },
  itemType: {
    fontSize: 14,
    color: '#4d4d4d',
    marginLeft: 10,
  },
  borderContainer: {
    marginTop: 20, // Adjust as needed
    alignItems: 'center',
    marginBottom: 0,
    // position: 'relative',
    // margin: 25,
  },
  borderLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#e6e6e6',
  },
  seeMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreText: {
    marginHorizontal: 10,
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
  },
  vSymbol: {
    fontSize: 20,
    color: 'orange',
  },
});

export default HomeScreen;
