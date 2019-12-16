import React, { Component } from "react";
import "react-native-gesture-handler";
import { View, Text, TouchableOpacity } from "react-native";
import Style from "../../../Styles";
import { Actions } from "react-native-router-flux";
import Image from "./Image";

class Landing extends Component {
  login() {
    Actions.login();
  }
  render() {
    return (
      <View style={Style.containerHome}>
        <Text
          style={{
            fontSize: 50,
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            fontSize: 50,
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          {" "}
          to{" "}
        </Text>
        <Image />
        <TouchableOpacity style={Style.btnLanding} onPress={this.login}>
          <Text style={Style.btnLandingText}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Landing;
