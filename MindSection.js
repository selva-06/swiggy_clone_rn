/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const MindSection = ({ scrolldata, navigation }) => {
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
        What's on your mind, Leo?
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '200%',
        }}
      >
        {scrolldata.map((item, index) => (
          <React.Fragment key={index}>
                <View style={{ alignItems: 'center' }}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Rest')}>
            <Image
              source={item.image}
              style={{
                width: item.width,
                height: item.height,
                marginLeft: 10,
                marginTop: 20,
                marginRight: 20,
                marginBottom: 10,
                borderRadius: 10,
                overflow: 'hidden', // Clip the content to container boundaries
                resizeMode: 'contain',
                backgroundColor: 'white'
              }}
            />
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#919091' }}>{item.name}</Text>
    </View>
            {(index + 1) % 6 === 0 && <View style={{ width: '100%', height: 2 }} />}
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default MindSection;
