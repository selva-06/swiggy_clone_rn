/* eslint-disable prettier/prettier */
const mdata = [
  {
    text: 'Field 1',
    lines: ['- yellow background text', '- hi', '- bye'],
    image: require('../assets/img.png'),
  },
  {
    text: 'Field 1',
    lines: ['- yellow background text', '- hi', '- bye'],
    image: require('../assets/img.png'),
  },
  {
    text: 'Field 2',
    lines: [
      '- Another field',
      '- With different text',
      '- And a different image',
    ],
    image: require('../assets/mealoffer.png'),
  },
  {
    text: 'Field 3',
    lines: ['- Third field', '- More text', '- And a third image'],
    image: require('../assets/uoffer.png'),
  },
];

const scrolldata = [
  {
    image: require('../assets/img.png'),
    width: 100,
    height: 100,
    marginRight: 60,
  },
  {
    image: require('../assets/mealoffer.png'),
    width: 100,
    height: 100,
    marginRight: 60,
  },
  {
    image: require('../assets/uoffer.png'),
    width: 100,
    height: 100,
    marginRight: 60,
  },
  {
    image: require('../assets/img.png'),
    width: 100,
    height: 100,
    marginRight: 60,
  },
  {
    image: require('../assets/img.png'),
    width: 100,
    height: 100,
    marginRight: 60,
  },
  {
    image: require('../assets/mealoffer.png'),
    width: 100,
    height: 100,
    marginRight: 60,
  },
  {
    image: require('../assets/uoffer.png'),
    width: 100,
    height: 100,
    marginRight: 60,
  },
  {
    image: require('../assets/img.png'),
    width: 100,
    height: 100,
    marginRight: 60,
  },
  {
    image: require('../assets/img.png'),
    width: 100,
    height: 100,
    marginRight: 60,
  },
  {
    image: require('../assets/mealoffer.png'),
    width: 100,
    height: 100,
    marginRight: 60,
  },
  {
    image: require('../assets/uoffer.png'),
    width: 100,
    height: 100,
    marginRight: 60,
  },
  {
    image: require('../assets/img.png'),
    width: 100,
    height: 100,
    marginRight: 60,
  },

];

const restaurantData = [
  {
    imageSource: require('../assets/offer.png'),
    offerPrice: 'Offer Price 1',
    name: 'Hotel Name 1',
    rating: 'Rating: 4.5',
    description: 'Descriptive text about the hotel 1.',
  },
  {
    imageSource: require('../assets/offer.png'),
    offerPrice: 'Offer Price 2',
    name: 'Hotel Name 2',
    rating: 'Rating: 4.0',
    description: 'Descriptive text about the hotel 2.',
  },
  // Add more items as needed
];

const itemsData = [
  [
    {
      source: require('../assets/offer.png'),
      offerPrice: '$50',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$30',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$40',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$25',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$60',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$35',
    },
  ],
  [
    {
      source: require('../assets/offer.png'),
      offerPrice: '$50',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$0',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$40',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$25',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$10',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$35',
    },
  ],
  [
    {
      source: require('../assets/offer.png'),
      offerPrice: '$50',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$30',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$20',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$25',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$60',
    },
    {
      source: require('../assets/offer.png'),
      offerPrice: '$70',
    },
  ],
];


export {mdata, scrolldata, restaurantData, itemsData};
