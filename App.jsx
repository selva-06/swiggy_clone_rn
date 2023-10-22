import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
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
import {scrolldata} from './screens/data';
import LinearGradient from 'react-native-linear-gradient';

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
  const [showBanner, setShowBanner] = useState(true);
  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowBanner(offsetY <= 0); // Show banner only if scrolled up
  };

  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <LinearGradient
        colors={['#ADD8E6', 'white']}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: 200,
        }}>
        <Image
          source={require('./assets/offer.png')} // Replace with your top left image
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            width: 60,
            height: 80,
            resizeMode: 'cover',
            opacity: 0.5, // Adjust the opacity as needed
          }}
        />
        <Image
          source={require('./assets/offer.png')} // Replace with your top right image
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: 60,
            height: 80,
            resizeMode: 'cover',
            opacity: 0.7, // Adjust the opacity as needed
          }}
        />
      </LinearGradient>

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
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <MyCarousel />
      </View>
      <View style={{margin: 10, marginTop: 50}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 5,
          }}>
          What's on your mind
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{flexDirection: 'row'}}>
          {scrolldata.map((item, index) => (
            <Image
              key={index}
              source={item.image}
              style={{
                width: item.width,
                height: item.height,
                marginRight: item.marginRight,
              }}
            />
          ))}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{flexDirection: 'row'}}>
          {scrolldata.map((item, index) => (
            <Image
              key={index}
              source={item.image}
              style={{
                width: item.width,
                height: item.height,
                marginRight: item.marginRight,
              }}
            />
          ))}
        </ScrollView>
      </View>
      <LinearGradient
        colors={['rgba(135, 206, 250, 0.1)', 'rgba(135, 206, 250, 0.5)']}
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 5,
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 5,
              color: 'black',
            }}>
            Navaratri Sale & Offers
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>
            Get amazing discounts and special offers during this Navaratri
            season.
          </Text>
        </View>
        <Image
          source={require('./assets/offer.png')} // Adjust the path and filename
          style={{width: 100, height: 100, resizeMode: 'cover'}}
        />
      </LinearGradient>
    </ScrollView>
  );
};

export default App;
