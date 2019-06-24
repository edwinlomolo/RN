import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Row = props => (
  <View style={styles.row}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
);

const styles = StyleSheet.create({
  row: {
    padding: 20,
  }
});
