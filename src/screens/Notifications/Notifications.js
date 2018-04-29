import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Notifications extends Component {
  static navigationOptions = {
    title: 'Notifications'
  }

  render() {
    return (
      <View>
        <Text>You are in Notifications Screen</Text>
      </View>
    )
  }
}
