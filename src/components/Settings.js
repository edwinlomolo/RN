import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";

export default class SettingsScreen extends Component {
  static navigationOptions = {}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
});
