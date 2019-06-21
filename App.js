/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Button } from 'react-native';

let id = 0;

const Todo = props => (
  <View>
    <Text>{props.todo.text}</Text>
    <Button onPress={props.onDelete} title="delete" />
  </View>
)

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    id++;
    const text = `TODO number ${id}`;
    this.setState({
      todos: [ ...this.state.todos,
        { id: id, text: text, checked: false },
      ]
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      }),
    });
  }
  render() {
    return (
      <View>
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text>Unchecked todos: {this.state.todos.filter(
          todo => !todo.checked).length}</Text>
        <Button onPress={() => this.addTodo()} title="Add Todo" />
        <ScrollView>
          {this.state.todos.map(todo => (
            <Todo
              toggleChange={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  }
});
