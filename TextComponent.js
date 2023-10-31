/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';

const TextFieldComponent = ({imagePath }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e6e6e6',
        borderRadius: 15,
        overflow: 'hidden',
        height: 80,
        width: 100,
        paddingHorizontal: 10,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      }}>
      {/* <Text> */}
        {/* <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text> */}

        {/* <Text
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
      </Text> */}
      <Image
        source={imagePath}
        style={{
          width: 80,
          height: '100%',
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

export default TextFieldComponent;
