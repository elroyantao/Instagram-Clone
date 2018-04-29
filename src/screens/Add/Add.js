import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Add extends Component {
  static navigationOptions = {
    title: 'Add'
  }

  render() {
    return (
      <View>
        <Text>You are in Add Screen</Text>
      </View>
    )
  }
}
