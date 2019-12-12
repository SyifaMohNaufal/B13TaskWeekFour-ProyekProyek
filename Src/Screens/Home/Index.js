/* eslint-disable react-native/no-inline-styles */
// import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import styles from '../../../Styles';

// class Home extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Home Sweet Home</Text>
//       </View>
//     );
//   }
// }

// export default Home;

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

class Home extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#3a3013'}}>
        <Header style={{backgroundColor: '#133A30'}} searchBar>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>
                <Text>Engineer Name</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={require('./profpict.png')}
                  style={{
                    height: 300,
                    width: 300,
                    flex: 1,
                    alignSelf: 'center',
                  }}
                />
                <Text>Engineer Role</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text> # projects</Text>
                  <Text> # success rate</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>

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

export default Home;
