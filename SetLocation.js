/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import React, {useState, useEffect} from 'react';
// import {View, Text} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
// import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

// const SetLocation = () => {
//   const [placeName, setPlaceName] = useState(null);

//   const requestLocationPermission = async () => {
//     try {
//       const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

//       if (result === RESULTS.GRANTED) {
//         Geolocation.getCurrentPosition(
//           position => {
//             const {latitude, longitude} = position.coords;
//             setPlaceName(`Latitude: ${latitude}, Longitude: ${longitude}`);
//           },
//           error => {
//             console.error(error);
//           },
//           {enableHighAccuracy: false, timeout: 30000},
//         );
//       } else {
//         console.log('Location permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   useEffect(() => {
//     requestLocationPermission();
//   }, []);

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       {placeName && <Text>{placeName}</Text>}
//     </View>
//   );
// };

// export default SetLocation;

// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import MapView from 'react-native-maps';
// import { Dimensions } from 'react-native';
// export default function SetLocation() {

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         zoomEnabled={true}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       />
//     </View>
//   );
// }
// var { width, height } = Dimensions.get('window');
// console.log(width,height);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     flex: 1,
//     width: width,
//     height: height,  },
// });
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const SetLocation = () => {
  const [placeName, setPlaceName] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const requestLocationPermission = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (result === RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setMarkerLocation(latitude, longitude);
            reverseGeocode(latitude, longitude);
          },
          error => {
            console.error(error);
          },
          { enableHighAccuracy: false, timeout: 30000 },
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const setMarkerLocation = (lat, lng) => {
    setMarkerPosition({ latitude: lat, longitude: lng });
  };

  const onMarkerDragEnd = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
    reverseGeocode(latitude, longitude);
  };

  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
      );
      const data = await response.json();
      if (data.display_name) {
        setPlaceName(data.display_name);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (markerPosition) {
      setInitialRegion({
        latitude: markerPosition.latitude,
        longitude: markerPosition.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [markerPosition]);
  
  const handleDelivery = () => {
    // Implement your delivery logic here
    console.log("Delivering to:", placeName);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        zoomEnabled={true}
        initialRegion={initialRegion}
        showsUserLocation={true}
        followUserLocation={true}
      >
        {markerPosition && (
          <Marker
            coordinate={markerPosition}
            title={`Latitude: ${markerPosition.latitude}, Longitude: ${markerPosition.longitude}`}
            draggable
            onDragEnd={onMarkerDragEnd}
          />
        )}
      </MapView>
      <View style={{flexDirection:'row'}}>
      <Text style={{color:'grey', fontWeight:'800', marginLeft:20, marginTop: 10}}>SELECT DELIVERY LOCATION</Text>
      <Image
        source={require('./assets/address.png')}
        style={{height:20,width:20, marginTop:10, marginLeft:5}}
      /> 
      </View>
      <Text style={styles.text}>{placeName}</Text>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity onPress={handleDelivery}>
          <Text style={{color: '#f56c22',fontWeight: '800',borderColor: '#f56c22',borderRadius: 20,borderWidth: 1,paddingHorizontal: 20,paddingVertical: 5,}}>Deliver here</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '75%',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    padding: 10,
    fontSize:12,
    fontWeight:'300',
  },
});

export default SetLocation;
