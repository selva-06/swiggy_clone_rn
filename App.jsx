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
import {StyleSheet} from 'react-native';
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
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const ItemsRow = ({images}) => {
    return (
      <View style={styles.itemsRow}>
        {images.map((image, index) => (
          <View style={styles.itemContainer} key={index}>
            <Image source={image.source} style={styles.itemImage} />
            <View style={styles.overlay}>
              <Text style={styles.offerPrice}>{image.offerPrice}</Text>
              <Text style={styles.adText}>ad</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };
  const [selectedText, setSelectedText] = useState(1);

  const handleTextClick = textNumber => {
    setSelectedText(textNumber);
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
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
        {/* <ScrollView
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
        </ScrollView> */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '290%',
          }}>
          {scrolldata.map((item, index) => (
            <React.Fragment key={index}>
              <Image
                source={item.image}
                style={{
                  width: item.width,
                  height: item.height,
                  marginLeft: 30,
                  marginTop: 20,
                  marginRight: 20, // Adjust as needed for horizontal spacing between images
                  marginBottom: 10, // Adjust as needed for vertical spacing between rows
                }}
              />
              {(index + 1) % 6 === 0 && (
                <View style={{width: '100%', height: 10}} />
              )}
            </React.Fragment>
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
      <Text style={styles.headtext}>QUick select</Text>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => handleTextClick(1)}>
          <Text style={styles.clickableText}>Text 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTextClick(2)}>
          <Text style={styles.clickableText}>Text 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTextClick(3)}>
          <Text style={styles.clickableText}>Text 3</Text>
        </TouchableOpacity>
      </View>

      {/* Render different two rows of items based on the clicked text */}
      {selectedText === 1 && (
        <>
          <ItemsRow
            images={[
              {
                source: require('./assets/offer.png'),
                offerPrice: '$50',
              },
              {
                source: require('./assets/offer.png'),
                offerPrice: '$30',
              },
              {
                source: require('./assets/offer.png'),
                offerPrice: '$40',
              },
            ]}
          />
          <ItemsRow
            images={[
              {
                source: require('./assets/offer.png'),
                offerPrice: '$25',
              },
              {
                source: require('./assets/offer.png'),
                offerPrice: '$60',
              },
              {
                source: require('./assets/offer.png'),
                offerPrice: '$35',
              },
            ]}
          />
        </>
      )}
      {selectedText === 2 && (
        <>
          <ItemsRow
            images={[
              {
                source: require('./assets/offer.png'),
                offerPrice: '$50',
              },
              {
                source: require('./assets/offer.png'),
                offerPrice: '$0',
              },
              {
                source: require('./assets/offer.png'),
                offerPrice: '$40',
              },
            ]}
          />
          <ItemsRow
            images={[
              {
                source: require('./assets/offer.png'),
                offerPrice: '$25',
              },
              {
                source: require('./assets/offer.png'),
                offerPrice: '$10',
              },
              {
                source: require('./assets/offer.png'),
                offerPrice: '$35',
              },
            ]}
          />
        </>
      )}
      {selectedText === 3 && (
        <>
          <ItemsRow
            images={[
              {
                source: require('./assets/offer.png'),
                offerPrice: '$50',
              },
              {
                source: require('./assets/offer.png'),
                offerPrice: '$30',
              },
              {
                source: require('./assets/offer.png'),
                offerPrice: '$20',
              },
            ]}
          />
          <ItemsRow
            images={[
              {
                source: require('./assets/offer.png'),
                offerPrice: '$25',
              },
              {
                source: require('./assets/offer.png'),
                offerPrice: '$60',
              },
              {
                source: require('./assets/offer.png'),
                offerPrice: '$70',
              },
            ]}
          />
        </>
      )}
    </ScrollView>
  );
};

export default App;
const styles = {
  // Add your styles here
  clickableText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'lightgrey',
  },
  headtext: {
    fontSize: 22,
    color: 'black',
    marginHorizontal: 30,
    marginBottom: 20,
  },
  itemsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  itemContainer: {
    width: '30%', // Adjust the width as needed
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    marginHorizontal: 5, // Add margin here
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  itemImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50, // Adjust the height of the overlay here
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
  },
  offerPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  adText: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    fontSize: 16,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
};
