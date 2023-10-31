/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import ICarousel from './ICarousel';
// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.arrowIcon}
//         source={require('./assets/arrow.png')} // Replace with your left arrow icon path
//       />

//     <View style={styles.card}>
//       <View style={styles.header}>
//         <Text style={styles.hotelName}>Das & Co Cafe</Text>
//         <View style={styles.iconsContainer}>
//           <Image
//             style={styles.icon}
//             source={require('./assets/share.png')} // Replace with your first icon path
//           />
//           <Image
//             style={styles.icon}
//             source={require('./assets/heart.png')} // Replace with your second icon path
//           />
//         </View>
//       </View>
//       <View style={styles.ratingsContainer}>
//               <Image source={require('./assets/rate.png')} style={styles.starImage} />
//               <Text style={styles.itemRate}>4.2 (10K+ ratings)</Text>
//               <Image source={require('./assets/i.png')} style={styles.iImage} />
//               <Image source={require('./assets/dottt.png')} style={styles.dottImage} />
//               <Text style={styles.itemMin}>{'\u20B9500 for two'}</Text>
//         </View>
//         <Text style={styles.itemType}>Coffee, Beverages</Text>
//         <View style={styles.horizontalLine} />
//     <View style={styles.bcontainer}>
//   <Image source={require('./assets/td1.png')} style={styles.leftImage} />

//   <View style={styles.lineContainer}>
//     <View style={styles.rowContainer}>
//       <Text style={{color:'black', marginRight: 10, fontWeight: 'bold'}}>Outlet</Text>
//       <Text style={{color:'#6b6b6b'}}>Velacherry</Text>
//       <Text style= {{color:'orange', fontSize: 20}}>{'\u25BC'}</Text>

//     </View>
//     <View style={styles.rowContainer}>
//       <Text style={{color:'black', marginRight: 10, fontWeight: 'bold'}}>35 mins</Text>
//       <Text style={{color:'#6b6b6b'}}>Delivery to Tidel Park</Text>
//       <Text style= {{color:'orange', fontSize: 20}}>{'\u25BC'}</Text>
//     </View>
    
//   </View>
// </View>
// <View style={styles.horizontalLine} />
// <View style={styles.sratingsContainer}>
//               <Image source={require('./assets/in.png')} style={styles.starImage} />
//               <Text style={styles.sitemRate}> Far (4.3 kms)  | Free delivery</Text>
//         </View>
//       <LinearGradient
// colors={['transparent', 'rgba(255, 200, 200, 0.5)']}
// style={{borderRadius: 5}}
//   >
//     <View style={{flexDirection:'row'}}>
//     <View style={styles.soverlayContent}>
//       <Text style={{color:'black', marginTop:10, fontWeight:'bold'}}>FREE DELIVERY</Text>
//       <Image
//         source={require('./assets/save.png')}
//         style={{width: 40, // Adjust the width as needed
//         height: 40, // Adjust the height as needed
//         resizeMode: 'contain',
//         left: 50,
//       right:0}}
//       />
//       </View>
//     </View>
//   </LinearGradient>
//     </View>
//     <View>
//     <Text style={{color: 'black'}}></Text>
//     </View>
//     <View style={styles.sadditionalText}>
//     <Text style={{ fontSize: 16, color: 'black' }}>Additional Text 1</Text>
//     <Text style={{ fontSize: 16, color: 'black' }}>Additional Text 2</Text>
//   </View>
//     </View>

//   );
// };

// const styles = StyleSheet.create({
//   sadditionalText: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: '#f0f0f0', // Optional: You can change the background color
//     borderRadius: 8,
//     width: '100%',
//   },  
//   soverlayContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//   },
//   headerImage: {
//     width: '100%',
//     height: 100, // Adjust the height as per your requirement
//     resizeMode: 'cover', // This ensures the image covers the entire space
//   },
//   bcontainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginTop: 0,
//   },
//   leftImage: {
//     width: 50,
//     height: 50,
//     resizeMode: 'stretch',
//     marginTop: 20,
//   },
//   lineContainer: {
//     marginLeft: 0,
//     flex: 1,
//   },
//   horizontalLine: {
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderColor: '#e6e6e6',
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   inlineImage: {
//     width: 30,
//     height: 30,
//     resizeMode: 'contain',
//   },
//   container: {
//     position: 'relative',
//     margin: 25,
//   },
//   arrowIcon: {
//     position: 'relative',
//     top: 0,
//     left: 0,
//     width: 30,
//     height: 30,
//     zIndex: 1, // Ensures the arrow is above the card
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     // margin: 10,
//     // marginTop: 30,
//     width: "100%",
//     backgroundColor: '#fff',
//     elevation: 2, // For shadow on Android
//     shadowColor: '#000', // For shadow on iOS
//     shadowOffset: { width: 0, height: 2 }, // For shadow on iOS
//     shadowOpacity: 0.2, // For shadow on iOS
//     shadowRadius: 4, // For shadow on iOS
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//   },
//   hotelName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   iconsContainer: {
//     flexDirection: 'row',
//   },
//   icon: {
//     width: 25,
//     height: 25,
//     marginLeft: 10,
//     top: 0,
//     right: 0,
//     resizeMode: 'contain'
//   },
//   content: {
//     padding: 10,
//     marginLeft: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: 'black',
//   },
//   itemRate: {
//     fontSize: 12,
//     color: '#6b6b6b',
//     fontWeight: 'bold',
//   },
//   itemMin: {
//     fontSize: 12,
//     color: '#6b6b6b',
//     fontWeight: 'bold',  
//   },
//     ratingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: -10, // Adjust this value as needed to align the ratings with the hotel name
//     marginLeft:6,
//   },
//   starImage: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     // marginTop: 3,
//   },
//   iImage: {
//     width: 20,
//     height: 15,
//     resizeMode: 'contain',
//     marginLeft: 5,
//     marginTop: 3,
//     marginRight: 2,
//   },
//   dottImage: {
//     width: 10,
//     height: 10,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginRight: 2,
//   },
//   itemType: {
//     fontSize: 14,
//     color: '#4d4d4d',
//     marginLeft: 10,
//   },
//   borderContainer: {
//     marginTop: 20, // Adjust as needed
//     alignItems: 'center',
//     marginBottom: 0,
//     // position: 'relative',
//     // margin: 25,
//   },
//   borderLine: {
//     width: '100%',
//     height: 1,
//     backgroundColor: '#e6e6e6',
//   },
//   seeMoreButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   seeMoreText: {
//     marginHorizontal: 10,
//     color: 'orange',
//     fontWeight: 'bold',
//     marginTop: 8,
//     marginBottom: 8,
//   },
//   vSymbol: {
//     fontSize: 20,
//     color: 'orange',
//   },
//   sratingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10, // Adjust this value as needed to align the ratings with the hotel name
//     marginLeft:6,
//   },
//   sitemRate: {
//     fontSize: 14,
//     color: '#6b6b6b',
//     marginLeft: 10,
//   },
// });

// export default HomeScreen;
import Icarousel from "./ICarousel";
import React from "react";
import { View,Text } from "react-native";
import SeeMoreComponent from "./SeeMore";
import ScrollComponent from "./ScrollCOmponenttouch";
import MyCarousel from "./Carousel";
import ImageCarousel from "./ImageCarousel";
const HomeScreen = ({navigation}) =>{
  return(
    <View>
      <Icarousel navigation={navigation}/>
      {/* <ImageCarousel /> */}
    </View>
  )

}
export default HomeScreen;