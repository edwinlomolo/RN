import React from "react";
import PropTypes from "prop-types";
import { TextInput, View, Button, StyleSheet } from "react-native";

export default class AddContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func
  };

  state = {
    name: "",
    phone: ""
  };

  handleNamechange = name => {
    this.setState({ name });
  };

  handlePhoneChange = phone => {
    this.setState({ phone });
  };

  render() {
    return (
      <View style={{ paddingTop: 20 }}>
        <TextInput
          style={styles.input}
          onChangeText={this.handleNamechange}
          value={this.state.name}
        />
        <TextInput
          style={styles.input}
          onChangeText={this.handlePhoneChange}
          value={this.state.phone}
          keyboardType="numeric"
        />
        <Button title="Add Contact" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1
  }
});
