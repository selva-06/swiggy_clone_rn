/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet } from 'react-native';
import { mdata } from './screens/data';
const MyCarousel = () => {
  const data = mdata;
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSnapToItem = (index) => {
    setCurrentIndex(index);
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: 'lightgrey',
          borderRadius: 10,
          overflow: 'hidden',
          height: 200,
          width: "100%",
          // width: Dimensions.get('window').width - 40,
          paddingHorizontal: 10,
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'yellow',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingHorizontal: 5,
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
            {item.text}
          </Text>
        </View>
        <Text>{item.lines.join('\n')}</Text>
        <Image
          source={item.image}
          style={{ width: 40, height: 40, marginLeft: 5 }}
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
        itemWidth={Dimensions.get('window').width - 40}
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
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 0,
  },
  dot: {
    width: 20,
    height: 13,
    borderRadius: 8,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1, // Add this line
    marginBottom: 0,
  },
  dotText: {
    color: '#fff',
    fontSize: 10,
  },
});

export default MyCarousel;
