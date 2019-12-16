/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Footer,
  FooterTab,
  View,
  Thumbnail
} from 'native-base';
import { connect } from 'react-redux';
import { logoutUser } from '../../Actions/AuthActions';
import styles from '../../../Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux';

class Profile extends Component {
  logoutUser = () => {
    this.props.dispatch(logoutUser());
  };
  home() {
    Actions.home();
  }
  profile() {
    Actions.profile();
  }
  project() {
    Actions.project();
  }
  render() {
    const {
      getUser: { userDetails }
    } = this.props;
    return (
      <Container style={{ backgroundColor: '#e7ebea' }}>
        <Header style={{ backgroundColor: '#133A30' }}>
          <StatusBar backgroundColor="#0f2e26" barStyle="'dark-content'" />
          <Text style={{ marginVertical: 15, color: 'white', fontSize: 20 }}>
            Profile
          </Text>
        </Header>

        <Content>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              width: 300,
              marginHorizontal: 30
            }}
          >
            <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 5 }}>
              Profile{userDetails ? userDetails.username : ''}{' '}
            </Text>
            <Thumbnail
              large
              source={{
                uri:
                  'https://middle.pngfans.com/20190509/cj/transparent-company-icon-png-computer-icons-busine-6ddbb200c0a08330.jpg'
              }}
              style={{ alignSelf: 'center', marginVertical: 5 }}
            />
            <Text style={{ marginHorizontal: 10 }}>Company Name : </Text>
            <Text style={{ marginHorizontal: 10 }}>Company Description : </Text>
            <Text style={{ marginHorizontal: 10 }}>Company Location : </Text>
            <Text style={{ marginHorizontal: 10 }}>Company Contact : </Text>
          </View>
          <TouchableOpacity style={styles.btnLogout} onPress={this.logoutUser}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
              Logout{userDetails ? userDetails.username : ''}{' '}
            </Text>
          </TouchableOpacity>
        </Content>

        <Footer>
          <FooterTab style={{ backgroundColor: '#133A30' }}>
            <Button vertical onPress={this.home}>
              <Icon name="home" size={30} color={'#ffffff'} />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active
              style={{ backgroundColor: '#267460' }}
              onPress={this.profile}
            >
              <Icon name="user" size={30} color={'#ffffff'} />
              <Text>Profile</Text>
            </Button>
            <Button vertical onPress={this.project}>
              <Icon name="file" size={30} color={'#ffffff'} />
              <Text>Project</Text>
            </Button>
            {/* <Button vertical>
              <Icon name="cogs" size={30} color={'#ffffff'} />
              <Text>Setting</Text>
            </Button> */}
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

mapStateToProps = state => ({
  getUser: state.userReducer.getUser
});

mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

// export default Profile;
