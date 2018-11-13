import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Image, Alert } from "react-native";
import LogInForm from "./LogInForm";
import Logo from "../img/Logo.png";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = data => {
    Alert.alert(
      "LOGIN SUCCESS!",
      `email: ${data.email}, password: ${data.password}`
    );
  };

  render() {
    return (
      <View style={styles.loginContainer}>
        <Image source={Logo} />
        <LogInForm submit={this.submit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignSelf: "stretch",
    width: null,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30
  }
});

export default LogIn;
