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
import ContactList from "./src/components/ContactList";
import AddContactForm from "./src/components/AddContactForm";
export default class App extends Component {
  state = {
    showContacts: false,
    contacts: contacts,
    showForm: false
  };

  addContact = newContact => {
    this.setState(prevState => ({ showForm: false, contacts: [...prevState.contacts, newContact] }))
  }

  toggleContacts = () =>
    this.setState(prevState => ({
      showContacts: !prevState.showContacts
    }));

  toggleForm = () =>
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }));
  };

  render() {
    if (this.state.showForm) return <AddContactForm onSubmit={this.addContact} />;
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort" onPress={this.sort} />
        <Button title="Add Contact" onPress={this.toggleForm} />
        {this.state.showContacts && (
          <ContactList contacts={this.state.contacts} />
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
    backgroundColor: "#f3f3f3"
  },
  count: {
    fontSize: 48
  }
});
