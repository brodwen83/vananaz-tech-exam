import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

import Validator from "validator";

export class LogInForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
<<<<<<< HEAD
    loginSuccess: false,
=======
    // loading: false,
    loginSuccess: true,
>>>>>>> de6cf24be23ebacf624eb460bbbb0448bc833801
    errors: {
      // email: "",
      // password: ""
    }
  };

  handleChange = (holder, text) => {
    this.setState({
      data: { ...this.state.data, [holder]: text }
    });
  };

  onSubmit = () => {
    const { data } = this.state;
    this.validateEmail(data);
    this.validatePassword(data);
  };

  validateEmail = data => {
    const errors = {};
    if (Validator.isEmpty(data.email)) errors.email = "email is required";
    else if (!Validator.isEmail(data.email))
      errors.email = "not correct format for email address";

    this.setState(prevState => ({
      errors: { ...prevState.errors, ["email"]: errors.email }
    }));
  };

  validatePassword = data => {
    const errors = {};
    if (!data.password) errors.password = "Password can't be blank";
    else if (data.password.length < 6 || data.password.length > 12)
      errors.password = "please use at least 6 - 12 characters";

    this.setState(prevState => ({
      errors: { ...prevState.errors, ["password"]: errors.password }
    }));
  };

  validate = data => {};

  displayFormState = () => {
    this.onSubmit();
    Alert.alert("Login form states", "Tha data: ", [
      { text: `errors in email: ${this.state.errors.email}` },
      { text: `errors in password: ${this.state.errors.password}` },
      { text: `LoginSuccessful? : ${this.state.loginSuccess}` }
    ]);
  };

  render() {
    const {
      data: { email, password },
      errors
    } = this.state;
    return (
      <View style={[styles.stretch, styles.formContainer]}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid={"transparent"}
            placeholder="Input email address"
            onChangeText={text => this.handleChange("email", text)}
            onBlur={() => this.validateEmail(this.state.data)}
          />
          <Text style={styles.textError}>{errors.email}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={[styles.stretch, styles.textInput]}
            underlineColorAndroid={"transparent"}
            placeholder="Input password"
            onChangeText={text => this.handleChange("password", text)}
            onBlur={() => this.validatePassword(this.state.data)}
          />
          <Text style={styles.textError}>{errors.password}</Text>
        </View>
        <View style={styles.formGroup}>
          <TouchableOpacity
            // onPress={this.displayFormState}
            onPress={this.onSubmit}
            style={[styles.stretch, styles.button]}
          >
            <Text style={styles.signInBtnText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    alignSelf: "stretch"
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5
  },
  formContainer: {
    marginTop: 60
  },
  formGroup: {
    marginBottom: 15
  },
  textInput: {
    padding: 15,
    borderColor: "#714db2",
    borderWidth: 1,
    borderRadius: 5
  },
  button: {
    marginTop: 20,
    backgroundColor: "#714db2",
    padding: 20,
    alignItems: "center",
    borderRadius: 5
  },
  signInBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500"
  },
  textError: {
    color: "red",
    fontStyle: "italic"
  }
});

export default LogInForm;
