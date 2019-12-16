/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { StatusBar, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Footer,
  FooterTab,
  Item,
  Input,
  View
} from "native-base";

// import { connect } from "react-redux";

// import { logoutUser } from "../../Actions/AuthActions";
import { Actions } from "react-native-router-flux";
import Axios from "axios";
import Styles from "../../../Styles";
import Icon from 'react-native-vector-icons/FontAwesome5'

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    Axios.get(`http://192.168.1.8:3014/engineer/` + this.props.id_eng).then(
      res => {
        const datas = res.data.result[0];
        this.setState({ data: datas });
      }
    );
  }

  goBack() {
    Actions.pop();
  }
  hire() {
    Actions.hire();
  }
  render() {
    return (
      <Container style={{ backgroundColor: "#e7ebea" }}>
        <Header style={{ backgroundColor: "#133A30" }}>
        <StatusBar backgroundColor="#0f2e26" barStyle="'dark-content'" />
          <Text style={{ marginVertical: 15, color: "white", fontSize: 20 }}>
            Engineer Details
          </Text>
        </Header>

        <Content>
          <View>
            <TouchableOpacity style={styles.itemContainer}>
              <Image
                source={{ uri: this.state.data.eng_image }}
                style={styles.theImagee}
              />
              <Text style={styles.itemName}>{this.state.data.eng_name}</Text>
              <Text style={styles.itemCode}>{this.state.data.eng_desc}</Text>
              <Text style={styles.itemCode}>
                projects done: {this.state.data.project}
              </Text>
              <Text style={styles.itemCode}>
                success rate: {this.state.data.success}%
              </Text>
              <Text style={styles.itemCode}>
                skill: {this.state.data.skill_name}
              </Text>
              <Text style={styles.itemCode}>
                Location: {this.state.data.eng_location}
              </Text>
              <Text style={styles.itemCode}>
                Date of birth: {this.state.data.eng_dob}
              </Text>
              <Text style={styles.itemCode}>
                Github: {this.state.data.showcase}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Actions.hire({ id_eng: this.state.data.id_eng });
                }}
                style={Styles.btnHire}
              >
                <Text style={{ color: "white" }}>Send me a project!</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={this.goBack}>
              <Text> back </Text>
            </TouchableOpacity> */}
          </View>
        </Content>

        <Footer>
          <FooterTab style={{ backgroundColor: "#133A30" }}>
            <Button
                vertical
                active style={{ backgroundColor: "#267460" }}
                onPress={this.home}
              >
              <Icon name="home" size={30} color={'#ffffff'}/>
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={this.profile}>
              <Icon name="user" size={30} color={'#ffffff'}/>
              <Text>Profile</Text>
            </Button>
            <Button vertical onPress={this.project}>
              <Icon name="file" size={30} color={'#ffffff'}/>
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

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3a3013",
    padding: 0,
    width: 250,
    marginHorizontal: 60,
    marginVertical: 1
  },
  theImagee: {
    width: 250,
    height: 280,
    resizeMode: "contain"
  },
  itemName: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
    textAlign: "center"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "black",
    textAlign: "center"
  }
});

export default Details;
