/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

const Images = () => (
  <Image source={require('./logo_PP.jpg')} style={{width: 200, height: 200, marginVertical:20}} />
);

export default Images;
