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
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid={"transparent"}
            placeholder="Input email address"
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={[styles.stretch, styles.textInput]}
            underlineColorAndroid={"transparent"}
            placeholder="Input password"
          />
        </View>
        <View>
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
    padding: 20,
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
