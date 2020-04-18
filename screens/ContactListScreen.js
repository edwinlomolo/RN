import React, { Component } from "react";
import {
  View,
  ScrollView,
  SectionList,
  StyleSheet,
  Button,
  Text
} from "react-native";

import contacts, { compareNames } from "../src/contacts.js";
import ContactList from "../src/components/ContactList";
import AddContactForm from "../src/components/AddContactForm";
export default class App extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
      headerTitle: "Contacts",
      headerRight: <Button title="Add Contact" onPress={() => {
        navigation.navigate("AddContact")
      }} />,
    }
	}

  state = {
    contacts: contacts,
  };

  toggleForm = () => {
    this.props.navigation.navigate("AddContact")
  }

  render() {
    return (
      <View style={styles.container}>
        <ContactList
        contacts={this.props.screenProps.contacts}
        onSelectContact={(contact) => {
          this.props.navigation.navigate("ContactDetail", {
            phone: contact.phone,
            name: contact.name,
          })
        }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3"
  },
  count: {
    fontSize: 48
  }
});