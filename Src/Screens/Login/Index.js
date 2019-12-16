/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { TouchableOpacity, Text, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

import InputText from '../../Component/InputText';
import { loginUser } from '../../Actions/AuthActions';
import { Actions } from 'react-native-router-flux';
import Style from '../../../Styles';
import Image from "../Landing/Image";

// const userInfo = {username: 'Admin', password: 'Admin'};

class Login extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     username: '',
    //     password: '',
    //   };
    // }

    signup() {
        Actions.signup();
    }

    loginUser = async (values) => {
        try {
            const response = await this.props.dispatch(loginUser(values));
            console.log(response.data.token.token);
            if (!response) {
                throw response;
            }
        } catch (error) {
            let errorText;
            if (error.message) {
                errorText = error.message;
            }
            errorText = 'ERROR!';
            Alert.alert('Login Error!', errorText,
                [{
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                }]
            );
        }
    };

    onSubmit = (values) => {
        this.loginUser(values);
    };

    renderTextInput = (field) => {
        const {
            meta: { touched, error },
            label,
            secureTextEntry,
            maxLength,
            keyboardType,
            placeholder,
            input: { onChange, ...restInput },
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
        const { handleSubmit, loginUser } = this.props;
        console.log(loginUser);
        return (
            <View style={Style.container}>
                {(loginUser && loginUser.isLoading)}
                <Image />
                <Field
                    style={Style.input}
                    name="username"
                    placeholder="Username"
                    component={this.renderTextInput}
                // onChangeText={username => this.setState({username})}
                // value={this.state.username}
                />
                <Field
                    style={Style.input}
                    name="password"
                    placeholder="Password"
                    component={this.renderTextInput}
                    // onChangeText={password => this.setState({password})}
                    // value={this.state.password}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={Style.btnEnter}
                    onPress={handleSubmit(this.onSubmit)}>
                        <Text style={Style.btnEnterText}>LOGIN</Text>
                </TouchableOpacity>
                <View>
                    <Text style={Style.texttt}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}>
                        <Text style={Style.texttt}> Sign Up! </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Username is required';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    mapStateToProps = (state) => ({
        loginUser: state.authReducer.loginUser,
    });

    mapDispatchToProps = (dispatch) => ({
        dispatch,
    });

    export default compose(
        connect(mapStateToProps, mapDispatchToProps),
            reduxForm({
                form: 'login',
                validate
            })
  ) (Login);

  //   _login = async () => {
//     if (
//       userInfo.username === this.state.username &&
//       userInfo.password === this.state.password
//     ) {
//       alert('Logged');
//       this.props.navigation.navigate('Home');
//     } else {
//       alert('Username or password wrong');
//     }
//   };
// }
  // export default Login;
