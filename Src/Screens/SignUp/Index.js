/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from "react";
import "react-native-gesture-handler";
import { TouchableOpacity, Text, View } from "react-native";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { createNewUser } from "../../Actions/AuthActions";
import { ErrorUtils } from "../../Utils/AuthUtils";
import InputText from "../../Component/InputText";
import { Actions } from "react-native-router-flux";
import Image from "./Image";

import Style from "../../../Styles";

class SignUp extends Component {
  login() {
    Actions.login();
  }
  createNewUser = async values => {
    try {
      const response = await this.props.dispatch(createNewUser(values));
      if (!response.success) {
        throw response;
      }
    } catch (error) {
      const newError = new ErrorUtils(error, "Signup Error");
      newError.showAlert();
    }
  };

  onSubmit = values => {
    this.createNewUser(values);
  };

  renderTextInput = field => {
    const {
      meta: { touched, error },
      label,
      secureTextEntry,
      maxLength,
      keyboardType,
      placeholder,
      input: { onChange, ...restInput }
    } = field;
    return (
      <View>
        <InputText
          onChangeText={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          label={label}
          {...restInput}
        />
        {touched && error && <Text style={Style.errorText}>{error}</Text>}
      </View>
    );
  };

  render() {
    const { handleSubmit, createUser } = this.props;
    return (
      <View style={Style.container}>
        <Image />
        <Field
          style={Style.input}
          name="name"
          placeholder="Full Name"
          component={this.renderTextInput}
        />
        <Field
          style={Style.input}
          name="email"
          placeholder="Email"
          component={this.renderTextInput}
        />
        <Field
          style={Style.input}
          name="username"
          placeholder="Username"
          component={this.renderTextInput}
        />
        <Field
          style={Style.input}
          name="password"
          placeholder="Password"
          component={this.renderTextInput}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={Style.btnEnter}
          onPress={handleSubmit(this.onSubmit)}
        >
          <Text style={Style.btnEnterText}>Sign Up</Text>
        </TouchableOpacity>
        <View>
          <Text style={Style.texttt}>Already have an account?</Text>
          <TouchableOpacity onPress={this.login}>
            <Text style={Style.texttt}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.username) {
    errors.username = "Username is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};

mapStateToProps = state => ({
  createUser: state.authReducer.createUser
});

mapDispatchToProps = dispatch => ({
  dispatch
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: "register",
    validate
  })
)(SignUp);

// _signup = async () => {
//   if (
//     userInfo.username !== this.state.username &&
//     userInfo.password !== this.state.password &&
//     userInfo.name !== this.state.name &&
//     userInfo.email !== this.state.email
//   ) {
//     alert('Registered');
//     this.props.navigation.navigate('Login');
//   } else {
//     alert('Data must be filled');
//   }
// };
