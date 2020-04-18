import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types"
// import { TouchableOpacity } from "react-native-gesture-handler";

export default Row = props => (
  <TouchableOpacity style={styles.row} onPress={() => props.onSelectContact(props)}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </TouchableOpacity>
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
