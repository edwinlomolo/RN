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
  StyleSheet,
  Text,
} from 'react-native';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.inc, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  inc = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.count}>{this.state.count}</Text>
      </View>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true,
    }
  }
  render() {
    return (
      this.state.showCounter && <Counter />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  count: {
    fontSize: 48
  }
});
