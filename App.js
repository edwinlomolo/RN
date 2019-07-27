/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  View,
  ScrollView,
  SectionList,
  StyleSheet,
  Button,
  Text
} from "react-native";

import contacts, { compareNames } from "./src/contacts";
import Row from "./src/components/Row";
import ContactList from "./src/components/ContactList";

export default class App extends Component {
  state = {
    showContacts: false,
    contacts: contacts
  };

  renderItem = obj => <Row {...obj.item} />;

  toggleContacts = () =>
    this.setState(prevState => ({
      showContacts: !prevState.showContacts
    }));

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }));
  };

  renderSectionHeader = obj => <Text>{obj.section.title}</Text>;

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort" onPress={this.sort} />
        {this.state.showContacts && (
          <ContactList
            renderItem={this.renderItem}
            renderSectionHeader={this.renderSectionHeader}
            contacts={this.state.contacts}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#ecf0f1"
  },
  count: {
    fontSize: 48
  }
});
