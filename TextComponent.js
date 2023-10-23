/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';

const TextFieldComponent = ({ text, imagePath }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        overflow: 'hidden',
        height: '75%',
        paddingHorizontal: 10,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Text>
        <Text>{'\n'}</Text>
        <Text
          style={{
            paddingTop: 10,
            fontSize: 10,
            fontWeight: 'bold',
            color: 'white',
            borderRadius: 20,
            backgroundColor: '#F26E01',
          }}>
          {text.upperText}
        </Text>
        <Text
          style={{
            paddingTop: 10,
            fontSize: 14,
            fontWeight: 'bold',
            color: 'black',
          }}>
          {text.lowerText}
        </Text>
      </Text>
      <Image
        source={imagePath}
        style={{
          width: '100%',
          height: '100%',
          marginLeft: 7,
          resizeMode: 'cover',
        }}
      />
    </View>
  );
};

export default TextFieldComponent;
