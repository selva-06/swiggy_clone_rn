import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyCarousel from './Carousel';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['ViewPropTypes']);

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    // Add more items as needed
  ]);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  const om = () => {
    console.log('hi');
  };
  const [address, setAddress] = useState('');

  const handleGoPress = () => {
    console.log('Navigating to:', address);
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Image
        source={require('./assets/location.png')} // Adjust the path and filename
        style={{
          width: 20,
          height: 15,
          position: 'absolute',
          left: 5, // Changed from left to right
          zIndex: 1,
          resizeMode: 'contain',
          marginTop: 17,
          marginLeft: 0,
        }} // Set width and height as needed
      />
      <Text
        style={{
          fontSize: 18,
          marginBottom: 5,
          fontWeight: 'bold',
          color: 'black',
          left: 30,
          marginTop: 5,
          marginLeft: 0,
        }}>
        Address{' '}
        <Image
          source={require('./assets/drop.png')} // Adjust the path and filename
          style={{
            width: 30,
            height: 25,
            zIndex: 1,
            marginTop: 10,
            paddingLeft: 0,
          }} // Set width and height as needed
        />{' '}
      </Text>
      <Text style={{color: 'grey', marginLeft: 15, marginTop: 0}}>
        {' '}
        445/2/1, Anna Cross Street, Ranipet - 632401{' '}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
          borderWidth: 1,
          justifyContent: 'space-between',
          borderRadius: 5,
          padding: 10,
          borderColor: '#C0C0C0',
          position: 'relative',
          marginTop: 20,
          backgroundColor: 'lightgrey',
        }}>
        <TextInput
          style={{
            height: 20,
            flex: 1,
            fontSize: 14,
            paddingVertical: 2, // Adjust the vertical padding
            paddingHorizontal: 0,
          }}
          placeholder="Search, Order, Enjoy, Repeat!"
          placeholderTextColor={'black'}
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
        <Image
          source={require('./assets/search.png')} // Adjust the path and filename
          style={{
            width: 20,
            height: 20,
            position: 'absolute',
            right: 45, // Changed from left to right
            zIndex: 1,
          }} // Set width and height as needed
        />
        <Image
          source={require('./assets/line.png')} // Adjust the path and filename
          style={{
            width: 5,
            height: 30,
            position: 'absolute',
            right: 35, // Changed from left to right
            zIndex: 1,
          }} // Set width and height as needed
        />
        <Image
          source={require('./assets/mic.png')} // Adjust the path and filename
          style={{
            width: 30,
            height: 20,
            position: 'absolute',
            right: 5, // Changed from left to right
            zIndex: 1,
            resizeMode: 'contain',
          }} // Set width and height as needed
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* First Text Field */}
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
                fontSize: 10, // Increase the font size for the first line
                fontWeight: 'bold', // Make the first line bold
                color: 'white',
                borderRadius: 20,
                backgroundColor: '#F26E01',
              }}>
              Under ₹199{'\n'}
            </Text>
            <Text
              style={{
                paddingTop: 10,
                fontSize: 14, // Increase the font size for the first line
                fontWeight: 'bold', // Make the first line bold
                color: 'black',
              }}>
              Value Meals{'\n'}
            </Text>
          </Text>
          <Image
            source={require('./assets/mealoffer.png')} // Adjust the path and filename
            style={{
              width: '100%',
              height: '100%',
              marginLeft: 7,
              resizeMode: 'cover',
            }}
          />
        </View>

        {/* Second Text Field */}
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
          }}>
          <Text
            style={{
              paddingTop: 10,
              fontSize: 14, // Increase the font size for the first line
              fontWeight: 'bold', // Make the first line bold
              color: 'black',
            }}>
            Offer Zone
          </Text>
          <Image
            source={require('./assets/uoffer.png')} // Adjust the path and filename
            style={{
              width: '70%',
              height: '100%',
              marginLeft: 7,
              resizeMode: 'cover',
            }}
          />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <MyCarousel />
      </View>
    </View>
  );
};

export default App;
