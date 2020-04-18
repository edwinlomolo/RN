import React from "react"
import { Button, View, Text } from "react-native"
import { createStackNavigator } from "react-navigation"

class ScreenComponentOne extends React.Component {
  static navigationOptions = {
    headerTitle: "First screen",
    headerTintColor: "teal",
    headerStyle: {
      backgroundColor: "#f3f3f3",
    },
  };

  render() {
    return(
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 25,
        borderColor: "teal"}}
      >
        <Button title="Go to screen two" onPress={() => this.props.navigation.navigate("RouteNameTwo")} />
      </View>
    )
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 10)
}

class ScreenComponentTwo extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Screen Two",
      headerRight: <Button title="Press me" onPress={() => alert("pressed!")} />,
    }
  };

  render() {
    return(
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 25,
        borderColor: "orange"}}
      >
        <Button title="Go to screen three" onPress={() => this.props.navigation.navigate("RouteNameThree", {
          number: randomNumber(),
        })} />
      </View>
    )
  }
}

class ScreenComponentThree extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: `Number: ${navigation.getParam("number")}`
    }
  };

  render() {
    return(
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 25,
        borderColor: "orange"}}
      >
        <Text style={{ fontSize: 25 }}>{this.props.navigation.getParam("number")}</Text>
        <Button title="New number" onPress={() => this.props.navigation.setParams({ number: randomNumber() })} />
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  "RouteNameOne": ScreenComponentOne,
  "RouteNameTwo": ScreenComponentTwo,
  "RouteNameThree": ScreenComponentThree,
});

export default class Example extends React.Component {
  render() {
    return <AppNavigator />
  }
}