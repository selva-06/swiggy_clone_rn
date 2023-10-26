/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';

const Heart = props => {
  return (
    <View style={[styles.heart, props.style]}>
      <View style={styles.heartShape} />
      <View style={styles.leftHeart} />
      <View style={styles.rightHeart} />
    </View>
  );
};

const Hello = ({navigation}) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(prevLiked => !prevLiked);
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Appi')}
      />
      <TouchableOpacity onPress={handleLike}>
        <Heart />
      </TouchableOpacity>
      <Button title="Go to Home" onPress={() => navigation.navigate('Appi')} />
    </View>
  );
};

const styles = StyleSheet.create({
  heart: {
    width: 50,
    height: 50,
  },
  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  leftHeart: {
    transform: [{rotate: '-45deg'}],
    left: 5,
  },
  rightHeart: {
    transform: [{rotate: '45deg'}],
    right: 5,
  },
});

export default Hello;
