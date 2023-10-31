/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground} from 'react-native';
import {
    scrolldata,
    restaurantData,
    itemsData,
    trustedData,
    bevdata,
  } from './screens/data';
  import ScrollComponent from './ScrollCOmponenttouch';
  import RestaurantData from './RestaurantDataMenuCard';
import RestBev from './RestBev';


const Rest = ({navigation}) => {


  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <ImageBackground
        source={require('./assets/wa2.jpg')}
        style={styles.headerImage}
      ></ImageBackground>
      <TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('Appi')}} style={styles.hoverlayImage}>
        <Image
          source={require('./assets/arrow.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
        <View
            style={{
            flex: 1,
            width: '100%',
            marginTop: 0,
            backgroundColor: '#fff',
            marginBottom: 10,
            }}>
            <View style={styles.restaurantInfo}>
            <Text style={{color: 'black', fontWeight: '900', fontSize: 16}}>BEVERAGES</Text>
            <Text style={{color: 'grey', fontSize: 12}}>The perfect drinks to enrgize you to the core.</Text>
            <Text style={styles.dots}>....................................................................</Text>

            <ScrollComponent />
            <Text style={styles.infoTitle}>67 restaurants to explore</Text>
            {/* <RestaurantData restaurantData={restaurantData} /> */}
            <RestBev bevdata={bevdata} />
            </View>
        </View>
</ScrollView>  );
};


export default Rest;

const styles = {
    // Add your styles here
    clickableText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'blue',
      borderRadius: 3,
      borderWidth: 2,
      borderColor: 'lightgrey',
    },
    hoverlayImage: {
        position: 'absolute',
        top: 30, // Adjust the position as needed
        left: 10, // Adjust the position as needed
        width: 30, // Adjust the size as needed
        height: 30, // Adjust the size as needed
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% opacity
        borderRadius: 15, // Half of the width and height to make it a circle
    },
    arrowImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
    headerImage: {
        width: '100%',
        height: 100, // Adjust the height as per your requirement
        resizeMode: 'cover', // This ensures the image covers the entire space
      },
    headtext: {
      fontSize: 22,
      color: 'black',
      marginHorizontal: 30,
      marginBottom: 20,
    },
    dotsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, // Adjust the spacing between text and dots
      },
      dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'black',
        marginHorizontal: 5, // Adjust the spacing between dots
      },
      dots: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        color: 'grey',
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
    borderContainer: {
      marginTop: 30, // Adjust as needed
      alignItems: 'center',
      marginBottom: 10,
    },
    borderLine: {
      width: '100%',
      height: 1,
      backgroundColor: 'black',
    },
    seeMoreButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    seeMoreText: {
      marginHorizontal: 10,
      color: 'black',
      fontWeight: 'bold',
    },
    vSymbol: {
      fontSize: 20,
      color: 'black',
    },
    scrollcontainer: {
      flex: 1,
      marginTop: 30, // Adjust as needed
      backgroundColor: '#fff',
      marginBottom: 10,
    },
    scrollContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    touchableOpacity: {
      backgroundColor: '#3498db',
      borderRadius: 20, // Adjust as needed
      paddingHorizontal: 15,
      paddingVertical: 10,
      margin: 5,
    },
    text: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    restaurantInfo: {
      padding: 20,
    },
    infoTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 5,
    },
    restaurantItem: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    resitemImageContainer: {
      borderRadius: 10,
      overflow: 'hidden',
      position: 'relative',
    },
    resitemImage: {
      width: 100, // Adjust as needed
      height: 100, // Adjust as needed
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    resshadow: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 30, // Adjust as needed
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    resitemText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'black',
      // textShadowColor: 'rgba(0, 0, 0, 0.5)',
      // textShadowOffset: {width: 1, height: 1},
      // textShadowRadius: 5,
      position: 'absolute',
      bottom: 10, // Adjust as needed
      left: 10, // Adjust as needed
    },
    resitemDetails: {
      flex: 1,
      marginLeft: 10,
    },
    resitemName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
    },
    resitemRating: {
      fontSize: 16,
      color: 'green',
      marginBottom: 5,
    },
    resitemDescription: {
      fontSize: 14,
      color: 'black',
    },
  };
  