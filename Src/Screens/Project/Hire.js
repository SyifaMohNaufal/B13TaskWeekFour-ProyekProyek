/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { StatusBar, TouchableOpacity, Alert } from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Footer,
  FooterTab,
  Item,
  Form,
  Picker,
} from "native-base";
import axios from "axios";
import { TabNavigator } from "react-navigation";
import Home from "../Home/Index";
import Profile from "../Profile/Index";
import styles from "../../../Styles";
import Icon from 'react-native-vector-icons/FontAwesome5'

class Hire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProj: [],
      dataEng: [],
      selected2: undefined,
      token: this.props.getToken || null,
      id_eng: this.props.navigation.state.params.id_eng || null,
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value,
    });
  }

  getDataProj() {
    axios
      .get("http://192.168.1.8:3014/project/", {
        headers: { authorization: this.state.token },
      })
      .then(response => {
        const result = response.data.result;
        this.setState({ dataProj: result });
        console.log(response.data.result);
      })
      .catch(error => {
        if (error.response) {
          return console.log(error.response.data.result);
        }
        if (error.request) {
          return console.log("error from request", error.request);
        } else {
          console.log(error);
        }
      });
  }

  componentDidMount() {
    this.getDataProj();
  }

  addHire = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.8:3014/project/projeng",
        {
          id_proj: this.state.selected2,
          id_eng: this.state.id_eng,
        }
      );
      console.log("Returned data:", response.data);
      if (response.data.result.affectedRows === 1) {
        Alert.alert("Submit Success!", "Submit form hire Successful", [
          {
            text: "Ok",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ]);
        this.props.navigation.goBack();
      } else {
        Alert.alert("Submit Failed!", "Submit form hire failed", [
          {
            text: "cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ]);
      }
    } catch (error) {
      Alert.alert("Submit Error!", "Submit form hire error", [
        {
          text: "cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]);
      console.log(error);
    }
  };

  render() {
    return (
      <Container style={{ backgroundColor: "#e7ebea" }}>
        <Header style={{ backgroundColor: "#133A30" }}>
        <StatusBar backgroundColor="#0f2e26" barStyle="'dark-content'" />
          <Text style={{ marginVertical: 15, color: "white", fontSize: 20 }}>
            Hiring Form
          </Text>
        </Header>

        <Content>
          <Form
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              padding: 15,
            }}
          >
            <Text style={{ textAlign: "center" }}>
              {" "}
              Please select the project you are going to send.{" "}
            </Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                {this.state.dataProj.map((val, idx) => (
                  <Picker.Item
                    key={idx}
                    label={val.proj_name}
                    value={val.id_proj}
                  />
                ))}
              </Picker>
            </Item>
            <TouchableOpacity
              style={styles.btnHireYes}
              onPress={() => this.addHire()}
            >
              <Text style={{ color: "white" }}> Send Project </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnHireNo}>
              <Text style={{ color: "white" }}> Cancel </Text>
            </TouchableOpacity>
          </Form>
        </Content>

        <Footer>
          <FooterTab style={{ backgroundColor: "#133A30" }}>
            <Button
              vertical

              onPress={this.home}
            >
              <Icon name="home" size={30} color={'#ffffff'} />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={this.profile}>
              <Icon name="user" size={30} color={'#ffffff'} />
              <Text>Profile</Text>
            </Button>
            <Button vertical
              active style={{ backgroundColor: "#267460" }}
              onPress={this.project}>
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

export default Hire;
