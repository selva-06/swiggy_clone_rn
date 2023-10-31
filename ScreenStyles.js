/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    marginTop: 20, // Adjust as needed
    alignItems: 'center',
    marginBottom: 0,
  },
  borderLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#e6e6e6',
  },
  seeMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreText: {
    marginHorizontal: 10,
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
  },
  vSymbol: {
    fontSize: 20,
    color: 'orange',
  },
  scrollcontainer: {
    flex: 1,
    marginTop: 10, // Adjust as needed
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  scrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableOpacity: {
    // width: 75, borderWidth: 1,
    // borderColor: '#e6e3e6',
    // padding: 5,
    // marginTop: 10,
    // borderRadius: 30,
    // backgroundColor: 'white',
    // alignItems: 'center', 
    // marginLeft: 8, 
  },
  text: {
    borderWidth: 1,
    borderColor: '#e6e3e6',
    padding: 5,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center', 
    marginLeft: 8,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black'
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
    // backgroundColor: 'white',
  },
  resitemImageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    height: 135,
    resizeMode: 'contain',
  },
  resitemImage: {
    width: 100, // Adjust as needed
    height: 135, // Adjust as needed
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
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
  addToCartContainer: {
    position: 'absolute',
    bottom: -5, // Adjust as needed
    left: 278, // Adjust as needed
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ededeb',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  
  addToCartText: {
    color: 'green',
    fontSize: 15,
    fontWeight: '900',
  },
  
  cartText: {
    marginLeft: -6, // Adjust as needed
  },  
  resitemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  resitemName: {
    fontSize: 16,
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
    color: 'grey',
  },
  heartContainer: {
    position: 'absolute',
    top: 3,
    right: 6,
    zIndex: 1,
  },
  heartImage: {
    width: 20, // Adjust the width as needed
    height: 20, // Adjust the height as needed
    resizeMode: 'contain',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80, // Adjust this value to control the height of the gradient overlay
    justifyContent: 'flex-end',
  },
  gradientTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 20, // Adjust this value to control the height of the gradient overlay
    justifyContent: 'flex-end',
  },
  overlayContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  resadText: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  resofferPrice: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
    left: 10,
    fontSize: 10,
    width: 80,
  },
  labelContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  labelImage: {
    width: 40, // Adjust the width as needed
    height: 40, // Adjust the height as needed
    resizeMode: 'contain',
  },
  itemRate: {
    fontSize: 10,
    color: 'black',
  },
  itemMin: {
    fontSize: 10,
    color: 'black',
  },
  itemType: {
    fontSize: 10,
    color: '#919091',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  dotImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 50,
    position: 'absolute',
    right: 0,
 },
 bstarImage: {
  width: 40,
  height: '40%',
  resizeMode: 'contain',
  marginRight: 5,
},

});
export default styles;