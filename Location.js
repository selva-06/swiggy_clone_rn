/* eslint-disable prettier/prettier */
// Location.js
import React from 'react';
import { useState } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LocSearch from './LocSeacrh';

const Location = () => {
  const navigation = useNavigation();

  const handleUseMyLocation = () => {
    navigation.navigate('SetLocation');
  };
  const [searchText, setSearchText] = useState('');


  return (
    <View>
      {/* <TouchableOpacity onPress={handleUseMyLocation}>
        <Text style={{color: 'black'}}>Set My Current Location</Text>
      </TouchableOpacity> */}
      <View style={{flexDirection:'row', marginTop: 20,}}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Appi')}}>
      <Image
        style={{height: 20, width:20, marginLeft: 20, marginTop: 2 }}
        source={require('./assets/arrow.png')} // Replace with your left arrow icon path
      />
      </TouchableOpacity>
      <Text style={{color:'black', marginTop: 0, fontWeight:'900', fontSize: 15, marginLeft: 5}}> Enter Your area or apartment here </Text>
      </View>
      <LocSearch searchText={searchText} setSearchText={setSearchText}  />
      <View style={{flexDirection: 'row'}}>
      <Image
        style={{height: 20, width:20, marginLeft: 13, marginTop: 10 }}
        source={require('./assets/address.png')} // Replace with your left arrow icon path
      />
      <TouchableOpacity onPress={handleUseMyLocation}>
        <Text style={{color: '#f56c22', fontWeight:'800', marginTop:10}}>Set My Current Location</Text>
      </TouchableOpacity>
      </View>
      <View style={{width: '90%', height: 1,backgroundColor: '#e6e6e6', marginTop: 25, marginLeft:20}}></View>
      <View>
        <Text style={{color:'grey', fontSize: 12, fontWeight:'400', marginLeft:20, marginTop: 20}}>RECENT SEARCHES</Text>
        <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row', marginTop: 13, marginLeft: 10}}>
            <Image
            style={{height: 20, width:20, marginLeft: 10, marginTop: 10 }}
            source={require('./assets/greyloc.png')} // Replace with your left arrow icon path
            />
            <Text style={{color:'black', fontWeight:'800',fontSize:16, marginTop: 8}}> Das & Co </Text>
            <Image
            style={{height: 6, width:6, marginLeft: 3, marginTop: 20 }}
            source={require('./assets/dottt.png')} // Replace with your left arrow icon path
            />
            <Text style={{color:'grey', fontWeight:'800',fontSize:13, marginTop: 11, marginLeft:5}}> 67km </Text>  
          </View>
          <Text style={{color: 'grey', marginLeft:20, marginTop: 5}}>Thalapathy Fort, Kashmir, India</Text>
          <View style={{flexDirection:'row', marginTop: 13, marginLeft: 10}}>
            <Image
            style={{height: 20, width:20, marginLeft: 10, marginTop: 10 }}
            source={require('./assets/greyloc.png')} // Replace with your left arrow icon path
            />
            <Text style={{color:'black', fontWeight:'800',fontSize:16, marginTop: 8}}> Das & Co </Text>
            <Image
            style={{height: 6, width:6, marginLeft: 3, marginTop: 20 }}
            source={require('./assets/dottt.png')} // Replace with your left arrow icon path
            />
            <Text style={{color:'grey', fontWeight:'800',fontSize:13, marginTop: 11, marginLeft:5}}> 67km </Text>
            </View>
            <Text style={{color: 'grey', marginLeft:20, marginTop: 5}}>Thalapathy Fort, Kashmir, India</Text>
            <View style={{flexDirection:'row', marginTop: 13, marginLeft: 10}}>
            <Image
            style={{height: 20, width:20, marginLeft: 10, marginTop: 10 }}
            source={require('./assets/greyloc.png')} // Replace with your left arrow icon path
            />
            <Text style={{color:'black', fontWeight:'800',fontSize:16, marginTop: 8}}> Das & Co </Text>
            <Image
            style={{height: 6, width:6, marginLeft: 3, marginTop: 20 }}
            source={require('./assets/dottt.png')} // Replace with your left arrow icon path
            />
            <Text style={{color:'grey', fontWeight:'800',fontSize:13, marginTop: 11, marginLeft:5}}> 67km </Text>
            </View>
            <Text style={{color: 'grey', marginLeft:20, marginTop: 5}}>Thalapathy Fort, Kashmir, India</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'#f56c22', fontWeight:'800', marginLeft:15, marginTop: 10,}}>View More</Text>
          <Image
            style={{height: 15, width:15, marginLeft: 5, marginTop: 15 }}
            source={require('./assets/ordrop.png')} // Replace with your left arrow icon path
            />
        </View>
      </View>
      </View>
 );
};

export default Location;
