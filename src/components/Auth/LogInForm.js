import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export class LogInForm extends Component {
  state = {
    errors: {
      email: "email errors here",
      password: "password error here"
    }
  };
  render() {
    const {
      errors: { email, password }
    } = this.state;
    return (
      <View style={[styles.stretch, styles.formContainer]}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid={"transparent"}
            placeholder="Input email address"
          />
          <Text style={styles.textError}>{email}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={[styles.stretch, styles.textInput]}
            underlineColorAndroid={"transparent"}
            placeholder="Input password"
          />
          <Text style={styles.textError}>{password}</Text>
        </View>
        <View style={styles.formGroup}>
          <TouchableOpacity style={[styles.stretch, styles.button]}>
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
