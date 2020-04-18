import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types"

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

Row.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
}
