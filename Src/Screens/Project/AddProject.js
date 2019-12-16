/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Alert, StatusBar, TouchableOpacity, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Footer,
  FooterTab,
  Form,
  View,
  Item,
  Label,
  Input,
  DatePicker
} from "native-base";
import { connect } from "react-redux";
import Axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Actions } from "react-native-router-flux";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.getToken || null,
      proj_name: "",
      proj_desc: "",
      proj_deadline: "",
      proj_fee: "",
      chosenDate: new Date()
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  componentDidMount() {
    console.log(this.props.getToken);
  }

  addProject = async () => {
    try {
      const response = await Axios.post(
        "http://192.168.1.8:3014/project",
        {
          proj_name: this.state.proj_name,
          proj_desc: this.state.proj_desc,
          proj_deadline: this.project.chosenDate,
          proj_fee: this.state.proj_fee
        },
        { headers: { authorization: this.props.getToken } }
      );
      console.log("Returned data: ", response);
      if (response.data.result.affectedRows === 1) {
        Alert.alert("Submit Success!", "Submit new project successful", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ]);
        this.props.navigation.goBack();
      } else {
        Alert.alert("Submit Failed!", "Submit form project failed", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ]);
      }
    } catch (error) {
      Alert.alert("Submit Error!", "Submit form error", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ]);
      console.log(error);
    }
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
            <Text>ADD PROJECT</Text>
          </View>
          <Form>
            <Item floatingLabel>
              <Label>Project Name</Label>
              <Input
                onChangeText={value => this.setState({ proj_name: value })}
              />
            </Item>

            <Item floatingLabel>
              <Label>Description</Label>
              <Input
                onChangeText={value => this.setState({ proj_desc: value })}
              />
            </Item>

            <Item style={{ marginTop: 30, paddingLeft: 0 }}>
              <Label>Deadline</Label>
              <DatePicker
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select Estimated Deadline"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "#706f6f" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Item>
            <Item floatingLabel>
              <Label>Fee</Label>
              <Input
                onChangeText={value => this.setState({ proj_fee: value })}
              />
            </Item>
          </Form>
        </Content>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 15
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.addProject()}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

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
  button: {
    width: 300,
    backgroundColor: "#30133a",
    opacity: 0.9,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});

const mapStateToProps = state => ({
  getToken: state.authReducer.authData.token
});

export default connect(mapStateToProps)(AddProject);
