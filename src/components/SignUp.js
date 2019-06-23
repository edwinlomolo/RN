import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  _showSignIn = () => {
    this.props.navigation.navigate("SignInScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up Screen</Text>
        <Button
          title="Sign In"
          onPress={this._showSignIn}
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
