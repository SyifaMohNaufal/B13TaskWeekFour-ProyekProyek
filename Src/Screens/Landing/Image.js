/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

const Images = () => (
  <Image source={require('./welcome.png')} style={{width: 200, height: 200}} />
);

export default Images;
