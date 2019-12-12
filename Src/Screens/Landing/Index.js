import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity} from 'react-native';
import Style from '../../../Styles';

import Image from './Image';

class Landing extends Component {
  render() {
    return (
      <View style={Style.containerHome}>
        <Text
          style={{
            fontSize: 30,
            color: '#30133a',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {' '}
          Welcome to ProyekProyek{' '}
        </Text>
        <Image />
        <TouchableOpacity
          style={Style.btnLanding}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={Style.btnLandingText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.btnLanding}
          onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={Style.btnLandingText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Landing;
