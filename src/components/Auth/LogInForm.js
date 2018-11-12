import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export class LogInForm extends Component {
  render() {
    return (
      <View style={[styles.stretch, styles.formContainer]}>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid={"transparent"}
          placeholder="Input email address"
        />
        <TextInput
          secureTextEntry={true}
          style={[styles.stretch, styles.textInput]}
          underlineColorAndroid={"transparent"}
          placeholder="Input password"
        />

        <TouchableOpacity style={[styles.stretch, styles.button]}>
          <Text style={styles.signInBtnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    alignSelf: "stretch"
  },
  formContainer: {
    marginTop: 80
  },
  textInput: {
    marginBottom: 20,
    padding: 15,
    borderColor: "#714db2",
    borderWidth: 1,
    borderRadius: 5
  },
  button: {
    marginTop: 20,
    backgroundColor: "#714db2",
    padding: 15,
    alignItems: "center",
    borderRadius: 5
  },
  signInBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500"
  }
});

export default LogInForm;
