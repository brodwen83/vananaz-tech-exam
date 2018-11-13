import React, { Component } from "react";
import PropTypes from "prop-types";
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
    // loading: false,
    loginSuccess: false,
    errors: {
      // email: "",
      // password: ""
    }
  };

  handleChange = (holder, text) => {
    this.setState(prevState => ({
      data: { ...prevState.data, [holder]: text }
    }));
  };

  onSubmit = () => {
    const { data } = this.state;
    const errors = this.validate(data);
    this.setState({ errors });

    //if all validated, pass the data to the parent component class
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  // validateEmail = data => {
  //   const errors = {};
  //   if (Validator.isEmpty(data.email)) {
  //     errors.email = "email is required";
  //   } else if (!Validator.isEmail(data.email)) {
  //     errors.email = "not correct format for email address";
  //   }

  //   // this.setState(prevState => ({
  //   //   errors: { ...prevState.errors, ["email"]: errors.email }
  //   // }));

  //   return errors;
  // };

  // validatePassword = data => {
  //   const errors = {};
  //   if (!data.password) {
  //     errors.password = "Password can't be blank";
  //   } else if (data.password.length < 6 || data.password.length > 12) {
  //     errors.password = "please use at least 6 - 12 characters";
  //   }

  //   // this.setState(prevState => ({
  //   //   errors: { ...prevState.errors, ["password"]: errors.password }
  //   // }));

  //   return errors;
  // };

  validate = data => {
    const errors = {};
    if (Validator.isEmpty(data.email)) {
      errors.email = "email is required";
    } else if (!Validator.isEmail(data.email)) {
      errors.email = "not correct format for email address";
    }
    if (!data.password) {
      errors.password = "Password can't be blank";
    } else if (data.password.length < 6 || data.password.length > 12) {
      errors.password = "please use at least 6 - 12 characters";
    }
    return errors;
  };

  displayFormState = () => {
    this.onSubmit();
    Alert.alert("Login form states", "Tha data: ", [
      { text: `email: ${this.state.data.email}` },
      { text: `password: ${this.state.data.password}` },
      { text: `errors in email: ${this.state.errors.email}` },
      { text: `errors in password: ${this.state.errors.password}` },
      { text: `LoginSuccessful? : ${this.state.loginSuccess}` }
    ]);
  };

  render() {
    const {
      data: { email, password },
      errors,
      data,
      loginSuccess
    } = this.state;
    return (
      <View style={[styles.stretch, styles.formContainer]}>
        <View>
          <Text>email: {email}</Text>
          <Text>password: {password}</Text>
          <Text>errors.email: {errors.email}</Text>
          <Text>errors.password: {errors.password}</Text>
          <Text>loginSuccess: {loginSuccess.toString()}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            style={styles.textInput}
            underlineColorAndroid={"transparent"}
            placeholder="Input email address"
            onChangeText={text => this.handleChange("email", text)}
            onBlur={() => this.onSubmit()}
          />
          {errors.email && <Text style={styles.textError}>{errors.email}</Text>}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            secureTextEntry={true}
            style={[styles.stretch, styles.textInput]}
            underlineColorAndroid={"transparent"}
            placeholder="Input password"
            onChangeText={text => this.handleChange("password", text)}
            onBlur={() => this.onSubmit()}
          />
          {errors.password && (
            <Text style={styles.textError}>{errors.password}</Text>
          )}
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

LogInForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LogInForm;
