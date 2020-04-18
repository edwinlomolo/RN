import React from "react"
import { View, Button, Text } from "react-native"

export default class ContactDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam("name"),
    }
  }
  render() {
    return (
      <View>
        <Text>{this.props.navigation.getParam("phone")}</Text>
      </View>
    )
  }
}