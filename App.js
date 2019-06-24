/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Button,
  Text
} from 'react-native';

import contacts, { compareNames } from "./src/contacts";
import Row from "./src/components/Row";

export default class App extends Component {
  state = {
    showContacts: false,
    contacts: contacts
  }


  renderItem = ({ item }) => <Row { ...item } />

  toggleContacts = () => this.setState(prevState => ({
    showContacts: !prevState.showContacts,
  }));

  sort = () => {
    this.setState(prevState => ({
      contacts: prevState.contacts.sort(compareNames)
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort contacts" onPress={this.sort} />
        {this.state.showContacts && (
          <FlatList
            data={this.state.contacts}
            renderItem={this.renderItem}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  count: {
    fontSize: 48
  }
});
