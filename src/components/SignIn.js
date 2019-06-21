import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  _showSignUp = () => {
    this.props.navigation.navigate("SignUpScreen");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Sign In!</Text>
        <Button
          title="Sign Up"
          onPress={this._showSignUp}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }
});
