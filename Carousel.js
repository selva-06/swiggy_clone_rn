/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const MyCarousel = () => {
  const data = [
    {
      text: 'Field 1',
      lines: ['- yellow background text', '- hi', '- bye'],
      image: require('./assets/img.png'),
    },
    {
      text: 'Field 2',
      lines: [
        '- Another field',
        '- With different text',
        '- And a different image',
      ],
      image: require('./assets/mealoffer.png'),
    },
    {
      text: 'Field 3',
      lines: ['- Third field', '- More text', '- And a third image'],
      image: require('./assets/uoffer.png'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'lightgrey',
          borderRadius: 5,
          overflow: 'hidden',
          height: 100,
          paddingHorizontal: 10,
          margin: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'yellow',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            paddingHorizontal: 5,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            {item.text}
          </Text>
        </View>
        <Text>{item.lines.join('\n')}</Text>
        <Image
          source={item.image}
          style={{width: 40, height: 40, marginLeft: 5}}
        />
      </View>
    );
  };

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
    />
  );
};

export default MyCarousel;
