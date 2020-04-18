// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
// import Example from "./examples/1-switch"
// export default Example
import React, { Component } from "react";
// import {
//   View,
//   ScrollView,
//   SectionList,
//   StyleSheet,
//   Button,
//   Text
// } from "react-native";

import contacts, { compareNames } from "./src/contacts";
// import ContactList from "./src/components/ContactList";
// import AddContactForm from "./src/components/AddContactForm";
import { createStackNavigator, createSwitchNavigator, createTabNavigator } from "react-navigation"
import { Ionicons } from "react-native-vector-icons"
import AddContactScreen from "./screens/AddContactScreen";
import ContactListScreen from "./screens/ContactListScreen"
import ContactDetailScreen from "./screens/ContactDetailScreen"
import LoginScreen from "./screens/LoginScreen"
import SettingsScreen from "./src/components/Settings"

import { fetchUsers } from "./api"

const ContactTab = createStackNavigator({
  AddContact: AddContactScreen,
  ContactList: ContactListScreen,
  ContactDetail: ContactDetailScreen,
}, {
  initialRouteName: "ContactList"
});

ContactTab.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`md-contact${focused? "" : "-outline"}`}
      size={25}
      color={tintColor}
    />
  ),
};

const MainNavigator = createTabNavigator({
  Contacts: ContactTab,
  Settings: SettingsScreen,
});

const AppNavigator = createSwitchNavigator({
  Main: MainNavigator,
  Login: LoginScreen,
}, {
  initialRouteName: "Login",
})
export default class App extends Component {
  state = {
    // showContacts: false,
    contacts: null,
    // showForm: false
  };

  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
    const result = await fetchUsers()
    this.setState({ contacts: result })
  }

  addContact = newContact => {
    this.setState(prevState => ({ contacts: [...prevState.contacts, newContact] }))
  }

  // toggleContacts = () =>
  //   this.setState(prevState => ({
  //     showContacts: !prevState.showContacts
  //   }));

  // toggleForm = () =>
  //   this.setState(prevState => ({
  //     showForm: !prevState.showForm
  //   }));

  // sort = () => {
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts].sort(compareNames)
  //   }));
  // };

  render() {
    // if (this.state.showForm) return <AddContactForm onSubmit={this.addContact} />;
    return <AppNavigator screenProps={{ contacts: this.state.contacts, addContact: this.addContact }}/>;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: "center",
//     // justifyContent: "center",
//     backgroundColor: "#f3f3f3"
//   },
//   count: {
//     fontSize: 48
//   }
// });
