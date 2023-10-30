/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// // /* eslint-disable prettier/prettier */
// // import React, { useState } from 'react';
// // import { View, Text, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
// // import Carousel from 'react-native-snap-carousel';
// // import { StyleSheet } from 'react-native';
// // import { mdata } from './screens/data';

// // const MyCarousel = () => {
// //   const data = mdata;
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const onSnapToItem = (index) => {
// //     setCurrentIndex(index);
// //   };
// //   const stylesArray = [
// //     { paddingHorizontal: 10, fontSize: 12, fontWeight: 'bold', color: 'white' ,width: "100%", }, // Style for the first line
// //     { fontSize: 14, fontWeight: 'bold', color: 'white' }, // Style for the second line
// //     // Add more styles for other lines as needed
// //     { fontSize: 16, fontWeight: 'bold', color: 'white' },
// //   ];

// //   const { width: screenWidth } = (Dimensions.get('window'));


// //   const renderItem = ({ item }) => {
// //     return (
// //       <View
// //         style={{
// //           flex: 1,
// //           borderRadius: 30,
// //           overflow: 'hidden',
// //           height: 200,
// //           width: screenWidth - 40,
// //           paddingHorizontal: 10,
// //           flexDirection: 'row',
// //           alignItems: 'center',
// //           position: 'relative',
// //         }}
// //       >
// //         {/* <Text>
// //           <Text style={{
// //             color: 'white',
// //             fontWeight: 'bold',
// //             fontSize: 20,
// //           }}>
// //             {item.text}
// //           </Text>
// //           <Text>{'\n'}</Text>
// //           <Text>{'\n'}</Text>

// //           <Text style={{
// //             color: 'white',
// //             fontWeight: 'bold',
// //             fontSize: 14,
// //             maxWidth: "100%",
// //             flexShrink: 1,
// //           }}>{item.lines.join('\n')}</Text>
// //                   <Text>{'\n'}</Text>
// //                   <Text>{'\n'}</Text>
// //                   <Text>{'\n'}</Text>
// //                   <Text>{'\n'}</Text>

// //           <TouchableOpacity style ={{
// //             width: "100%",
// //             borderWidth: 1,
// //             borderColor: 'black',
// //             padding: 5,
// //             borderRadius: 30,
// //             backgroundColor: 'white',
// //             alignItems: 'center',
// //           }}>
// //             <Text style={{color:'black', fontWeight: '800'}}>Order Fast</Text>
// //           </TouchableOpacity>
// //         </Text> */}
// //         <Image
// //           source={item.image}
// //           style={{ width: screenWidth-40, height: '100%', borderRadius: 8 }}
// //           resizeMode="contain"
// //         />
// //         </View>
// //         );
// //   };
  
// //   return (
// //     <View style={styles.container}>
// //       <Carousel
// //         data={data}
// //         renderItem={renderItem}
// //         sliderWidth={screenWidth}
// //       itemWidth={screenWidth -40}
// //       loop={true}
// //       autoplay={true}
// //       itemHeight={200} // Adjusted height to make next item visible
// //       itemHorizontalMargin={30}
// //         onSnapToItem={onSnapToItem}
// //         inactiveSlideScale={0.8}
// //       />
// //       <View style={styles.labelsContainer}>
// //         {data.map((_, i) => (
// //           <View
// //             key={i}
// //             style={[
// //               styles.dot,
// //               {
// //                 backgroundColor: i === currentIndex ? '#000' : '#ccc',
// //               }
// //             ]}>
// //             {i === currentIndex && (
// //               <Text style={styles.dotText}>{i + 1}/4</Text>
// //             )}
// //           </View>
// //         ))}
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   labelsContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     marginTop: 10, // Adjust this value to control the distance between carousel and dots
// //   },
// //   dot: {
// //     width: 16,
// //     height: 10,
// //     borderRadius: 8,
// //     marginHorizontal: 5,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   dotText: {
// //     color: '#fff',
// //     fontSize: 8,
// //   },
// // });

// // export default MyCarousel;

// import React, { useState } from 'react';
// import { View, Text, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import { StyleSheet } from 'react-native';
// import { mdata } from './screens/data';

// const MyCarousel = () => {
//   const data = mdata;
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const onSnapToItem = (index) => {
//     setCurrentIndex(index);
//   };

//   const { width: screenWidth } = Dimensions.get('window').width;

//   const renderItem = ({ item, index }) => {
//     return (
//       <View
//         style={{
//           flex: 1,
//           borderRadius: 30,
//           overflow: 'hidden',
//           height: 200,
//           width: screenWidth - 40,
//           paddingHorizontal: 10,
//           flexDirection: 'row',
//           alignItems: 'center',
//           position: 'relative',
//         }}
//       >
//         <Image
//           source={item.image}
//           style={{ width: '100%', height: '100%', borderRadius: 8 }}
//           resizeMode="stretch"
//         />
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Carousel
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth - 60}
//         loop={true}
//         autoplay={true}
//         itemHeight={200}
//         itemHorizontalMargin={-50}
//         onSnapToItem={onSnapToItem}
//         inactiveSlideScale={0.8}
//         windowSize={1} // Add this line
//         inactiveSlideOpacity={1}
//       />
//       <View style={styles.labelsContainer}>
//         {data.map((_, i) => (
//           <View
//             key={i}
//             style={[
//               styles.dot,
//               {
//                 backgroundColor: i === currentIndex ? '#000' : '#ccc',
//               }
//             ]}
//           >
//             {i === currentIndex && (
//               <Text style={styles.dotText}>{i + 1}/{data.length}</Text>
//             )}
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   },
//   labelsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   dot: {
//     width: 16,
//     height: 10,
//     borderRadius: 8,
//     marginHorizontal: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dotText: {
//     color: '#fff',
//     fontSize: 8,
//   },
// });

// export default MyCarousel;
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet } from 'react-native';
import { mdata } from './screens/data';

const MyCarousel = ({navigation}) => {
  const data = mdata;
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSnapToItem = (index) => {
    setCurrentIndex(index);
  };


  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          overflow: 'hidden',
          height: 200,
          width: 300,
          // backgroundColor: 'black',
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          position: 'relative',
        }}
      >
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')}>
        <Image
          source={item.image}
          style={{ width: 300, height: '100%', borderRadius: 8}}
          resizeMode="contain"
        />
        </TouchableOpacity>
        </View>
        );
  };
  
  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width -60}
        onSnapToItem={onSnapToItem}
        loop={true}
        autoplay={true}
        // eslint-disable-next-line react/jsx-no-duplicate-props
      />
      <View style={styles.labelsContainer}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor: i === currentIndex ? '#000' : '#ccc',
              }
            ]}>
            {i === currentIndex && (
              <Text style={styles.dotText}>{i + 1}/4</Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10, // Adjust this value to control the distance between carousel and dots
  },
  dot: {
    width: 16,
    height: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotText: {
    color: '#fff',
    fontSize: 8,
  },
});

export default MyCarousel;

