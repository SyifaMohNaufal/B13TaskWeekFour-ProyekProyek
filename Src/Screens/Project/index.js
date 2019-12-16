/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { StatusBar, TouchableOpacity, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Footer,
  FooterTab,
  //   Fab,
  View
} from "native-base";
import { FlatGrid } from "react-native-super-grid";
import Axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Actions } from "react-native-router-flux";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    Axios.get("http://192.168.1.8:3014/project/").then(res => {
      console.log(res);
      this.setState({ items: res.data.result });
    });
  }

  home() {
    Actions.home();
  }
  profile() {
    Actions.profile();
  }
  project() {
    Actions.project();
  }
  addproject() {
    Actions.addproject();
  }
  projectstatus() {
    Actions.projectstatus();
  }

  render() {
    const { items } = this.state;
    return (
      <Container style={{ backgroundColor: "#e7ebea" }}>
        <Header style={{ backgroundColor: "#133A30" }}>
          <StatusBar backgroundColor="#0f2e26" barStyle="'dark-content'" />
          <Text style={{ marginVertical: 15, color: "white", fontSize: 20 }}>
            Project
          </Text>
        </Header>

        <Content>
          <View>
            <Text style={{ textAlign: "center", fontSize: 30, marginTop: 10 }}>
              List of Projects
            </Text>

            <FlatGrid
              itemDimension={200}
              items={items}
              style={styles.gridView}
              renderItem={({ item, index }) => (
                <TouchableOpacity style={styles.itemContainer} onPress= {this.projectstatus}>
                  <Text style={styles.itemName}>
                    Project Name: {item.proj_name}
                  </Text>
                  <Text style={styles.itemCode}>
                    Project Description: {item.proj_desc}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Content>

        <TouchableOpacity
          style={styles.floatBtn}
          onPress={this.addproject}
        >
          <Icon name="plus" size={30} color="#ffffff" />
        </TouchableOpacity>
        <Footer>
          <FooterTab style={{ backgroundColor: "#133A30" }}>
            <Button vertical onPress={this.home}>
              <Icon name="home" size={30} color={"#ffffff"} />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={this.profile}>
              <Icon name="user" size={30} color={"#ffffff"} />
              <Text>Profile</Text>
            </Button>
            <Button
              vertical
              active
              style={{ backgroundColor: "#267460" }}
              onPress={this.project}
            >
              <Icon name="file" size={30} color={"#ffffff"} />
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
  gridView: {
    marginTop: 0,
    flex: 1
  },
  itemContainer: {
    backgroundColor: "white",
    justifyContent: "flex-start",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#3a3013",
    padding: 0,
    height: "auto"
  },
  itemName: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
    textAlign: "left",
    marginHorizontal: 10
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 16,
    color: "black",
    textAlign: "left",
    marginHorizontal: 10,
    marginBottom: 10
  },
  floatBtn: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    position: "absolute",
    right: 5,
    bottom: 65,
    backgroundColor: "#30133a",
    borderRadius: 100
  }
});

export default Project;
