/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const MindSection = ({ scrolldata }) => {
  return (
    <View style={{ margin: 10, marginTop: 20 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'black',
          marginBottom: 5,
        }}
      >
        What's on your mind
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '290%',
        }}
      >
        {scrolldata.map((item, index) => (
          <React.Fragment key={index}>
            <Image
              source={item.image}
              style={{
                width: item.width,
                height: item.height,
                marginLeft: 30,
                marginTop: 20,
                marginRight: 20,
                marginBottom: 10,
                borderRadius: 10,
              }}
            />
            {(index + 1) % 6 === 0 && <View style={{ width: '100%', height: 10 }} />}
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default MindSection;
