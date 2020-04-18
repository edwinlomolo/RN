import React from "react";
import PropTypes from "prop-types";
import Constants from "expo-constants"
import { TextInput, KeyboardAvoidingView, View, Button, StyleSheet } from "react-native";

export default class AddContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func
  };

  state = {
    name: "",
    phone: "",
    isFormValid: false
  };

  // getHandler = key => val => {
  //   this.setState({[key]: val})
  // }

  handleNamechange = name => {
    this.setState({ name }, this.validateForm);
  };

  handlePhoneChange = phone => {
    if (+phone >= 0 && phone.length <= 10) {
      this.setState({ phone }, this.validateForm)
    }
  };

  validateForm = () => {
    if (+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3) {
      this.setState({isFormValid: true})
    } else {
      this.setState({isFormValid: false})
    }
  }

  handleSubmit = () => {
    this.props.onSubmit({...this.state})
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.handleNamechange}
          value={this.state.name}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.handlePhoneChange}
          value={this.state.phone}
          keyboardType="numeric"
          placeholder="Phone"
        />
        <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center"
  },
  input: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3,
    minWidth: 100,
    marginTop:20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
});
