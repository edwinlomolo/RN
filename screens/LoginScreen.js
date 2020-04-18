import React from "react"
import { View, Button, Text, StyleSheet } from "react-native"

export default class LoginScreen extends React.Component {

  _login = () => {
    this.props.navigation.navigate("Main")
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You are currently logged out!</Text>
        <Button title="Press to Log In" onPress={this._login} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  }
})