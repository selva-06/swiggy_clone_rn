/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet } from 'react-native';
import { mdata } from './screens/data';

const MyCarousel = () => {
  const data = mdata;
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSnapToItem = (index) => {
    setCurrentIndex(index);
  };
  const stylesArray = [
    { paddingHorizontal: 10, fontSize: 12, fontWeight: 'bold', color: 'white' ,width: "100%", }, // Style for the first line
    { fontSize: 14, fontWeight: 'bold', color: 'white' }, // Style for the second line
    // Add more styles for other lines as needed
    { fontSize: 16, fontWeight: 'bold', color: 'white' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          borderRadius: 10,
          overflow: 'hidden',
          height: 200,
          width: "100%",
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          position: 'relative',
        }}
      >
        <Text>
          <Text style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
            {item.text}
          </Text>
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>

          <Text style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 14,
            maxWidth: "100%",
            flexShrink: 1,
          }}>{item.lines.join('\n')}</Text>
                  <Text>{'\n'}</Text>
                  <Text>{'\n'}</Text>
                  <Text>{'\n'}</Text>
                  <Text>{'\n'}</Text>

          <TouchableOpacity style ={{
            width: "100%",
            borderWidth: 1,
            borderColor: 'black',
            padding: 5,
            borderRadius: 30,
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
            <Text style={{color:'black', fontWeight: '800'}}>Order Fast</Text>
          </TouchableOpacity>
        </Text>
        <Image
          source={item.image}
          style={{
            width: "50%",
            height: 150,
            aspectRatio: 1,
            resizeMode: 'contain',
            position: 'absolute',
            right: 20,
            top: 30,
            marginTop: 25,
          }}
        />
        </View>
        );
  };
  
  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 50}
        onSnapToItem={onSnapToItem}
      />
      <View style={styles.labelsContainer}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor: i === currentIndex ? '#000' : '#ccc',
              }
            ]}>
            {i === currentIndex && (
              <Text style={styles.dotText}>{i + 1}/4</Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10, // Adjust this value to control the distance between carousel and dots
  },
  dot: {
    width: 16,
    height: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotText: {
    color: '#fff',
    fontSize: 8,
  },
});

export default MyCarousel;
