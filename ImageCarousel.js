/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const TextCarousel = () => {
  const data = [
    { text: '20% OFF upto Rs 200', lines: ['Enjoy '] },
    { text: 'hie', lines: ['hom'] },
    { text: 'hlo', lines: ['u'] },
    // Add more items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ padding: 20, alignItems: 'center', borderWidth: 1, borderRadius: 25, borderColor: 'lightgrey', flexDirection: "row", width: "100%",height:80}}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.icon} source={require('./assets/coffee.png')} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ color: 'black' }}>{item.text}</Text>
            <Text style={{ color: 'black' }}>{item.lines}</Text>
          </View>
        </View>
        <View style={{ position: 'absolute', bottom: 10, right: 10, flexDirection: 'row' }}>
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
              <Text style={styles.dotText}>{i + 1}/{data.length}</Text>
            )}
          </View>          ))}
        </View>
      </View>
    );
  };
  

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        windowSize={1}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 20}
        activeSlideAlignment={'start'} // This will make a portion of next item visible
        autoplay={true}
        loop={true}
        onSnapToItem={(index) => setCurrentIndex(index)}
      />
    </View>
  )
}

export default TextCarousel;

const styles = {
  icon: {
    width: 50,
    height: 50,
    marginLeft: 0,
    resizeMode: 'contain'
  },
  dot: {
    width: 14,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  dotText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 8,
  }
};
