import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
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
import {
  scrolldata,
  restaurantData,
  itemsData,
  trustedData,
} from './screens/data';
import LinearGradient from 'react-native-linear-gradient';
import GradientComponent from './Gradient';
import AddressComponent from './AddressComponent';
import SearchComponent from './SearchComponent';
import TextFieldComponent from './TextComponent';
import MindSection from './MindSection';
import NavaratriSaleComponent from './NavartriSaleComponent';
import QuickSelectComponent from './QuickSelect';
import ItemsRow from './ItemsRow';
import SeeMoreComponent from './SeeMore';
import ScrollComponent from './ScrollCOmponenttouch';
import RestaurantData from './RestaurantDataMenuCard';
import TrustComponent from './TrustComponent';
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

  const [selectedText, setSelectedText] = useState(1);

  const handleTextClick = textNumber => {
    setSelectedText(textNumber);
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <GradientComponent />
      <AddressComponent />
      <SearchComponent searchText={searchText} setSearchText={setSearchText} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextFieldComponent
          text={{upperText: 'Under ₹199\n', lowerText: 'Value Meals\n'}}
          imagePath={require('./assets/mealoffer.png')}
        />
        <TextFieldComponent
          text={{upperText: '', lowerText: 'Offer Zone'}}
          imagePath={require('./assets/uoffer.png')}
        />
      </View>
      <MyCarousel />
      <TrustComponent />
      <MindSection scrolldata={scrolldata} />
      <NavaratriSaleComponent />
      <QuickSelectComponent handleTextClick={handleTextClick} />

      {selectedText >= 1 && selectedText <= 3 && (
        <>
          <ItemsRow images={itemsData[selectedText - 1].slice(0, 3)} />
          <ItemsRow images={itemsData[selectedText - 1].slice(3, 6)} />
        </>
      )}
      <SeeMoreComponent />
      <View style={styles.scrollcontainer}>
        <ScrollComponent />
        <View style={styles.restaurantInfo}>
          <Text style={styles.infoTitle}>Much more restaurants</Text>
          <RestaurantData restaurantData={restaurantData} />
        </View>
      </View>
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
  borderContainer: {
    marginTop: 30, // Adjust as needed
    alignItems: 'center',
    marginBottom: 10,
  },
  borderLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  },
  seeMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreText: {
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  vSymbol: {
    fontSize: 20,
    color: 'black',
  },
  scrollcontainer: {
    flex: 1,
    marginTop: 30, // Adjust as needed
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  scrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableOpacity: {
    backgroundColor: '#3498db',
    borderRadius: 20, // Adjust as needed
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaurantInfo: {
    padding: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  restaurantItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  resitemImageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  resitemImage: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resshadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30, // Adjust as needed
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  resitemText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    // textShadowColor: 'rgba(0, 0, 0, 0.5)',
    // textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 5,
    position: 'absolute',
    bottom: 10, // Adjust as needed
    left: 10, // Adjust as needed
  },
  resitemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  resitemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  resitemRating: {
    fontSize: 16,
    color: 'green',
    marginBottom: 5,
  },
  resitemDescription: {
    fontSize: 14,
    color: 'black',
  },
};
