import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile'
  }

  render() {
    return (
      <View>
        <Text>You are in Profile Screen</Text>
      </View>
    )
  }
}
