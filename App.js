import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import LogIn from "./src/components/Auth/LogIn";

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <LogIn />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
