/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput, Image } from 'react-native';

const SearchComponent = ({ searchText, setSearchText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search, Order, Enjoy, Repeat!"
        placeholderTextColor={'grey'}
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <Image
        source={require('./assets/search.png')}
        style={styles.icon}
      />
      <Image
        source={require('./assets/line.png')}
        style={styles.lineIcon}
      />
      <Image
        source={require('./assets/mic.png')}
        style={styles.micIcon}
      />
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    justifyContent: 'space-between',
    borderRadius: 12,
    padding: 10,
    borderColor: '#f0f0f0',
    position: 'relative',
    marginTop: 20,
    height:"1.5%",
    backgroundColor: '#f0f0f0',
  },
  textInput: {
    height: 20,
    flex: 1,
    fontSize: 14,
    paddingVertical: 2,
    paddingHorizontal: 0,
    color: 'black', // Set text color to black
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 45,
    zIndex: 1,
  },
  lineIcon: {
    width: 5,
    height: 30,
    position: 'absolute',
    right: 35,
    zIndex: 1,
},
  micIcon: {
    width: 30,
    height: 20,
    position: 'absolute',
    right: 5,
    zIndex: 1,
    resizeMode: 'contain',
  },
};

export default SearchComponent;
