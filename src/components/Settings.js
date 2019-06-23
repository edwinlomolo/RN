import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";

export default class Settings extends Component {
  reder() {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
