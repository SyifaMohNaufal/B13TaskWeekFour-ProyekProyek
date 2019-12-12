/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  Footer,
  FooterTab,
  Item,
  Icon,
  Input,
  View,
} from 'native-base';

class Profile extends Component {
  render() {
    return (
      <Container style={{backgroundColor: 'black'}}>
        <Header style={{backgroundColor: '#133A30'}} searchBar>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content />

        <Footer>
          <FooterTab style={{backgroundColor: '#133A30'}}>
            <Button vertical>
              <Icon name="apps" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Profile</Text>
            </Button>
            <Button vertical>
              <Icon name="navigate" />
              <Text>Project</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Setting</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Profile;
