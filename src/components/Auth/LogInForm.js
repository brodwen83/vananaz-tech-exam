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
    loading: false,
    errors: {
      // email: "email errors here",
      // password: "password error here"
    }
  };

  handleChange = (holder, text) => {
    this.setState({
      data: { ...this.state.data, [holder]: text }
    });
  };

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email))
      errors.email = "not correct format for email address";

    if (!data.password) {
      errors.password = "Password can't be blank";
      return errors;
    }

    if (data.password.length < 6 || data.password.length > 12)
      errors.password = "please use at least 6 - 12 characters";

    return errors;
  };

  displayFormState = () => {
    Alert.alert("Login form states", "Tha data: ", [
      { text: `Email: ${this.state.data.email}` },
      { text: this.state.data.password }
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
