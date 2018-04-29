import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Search extends Component {
  static navigationOptions = {
    title: 'Search'
  }

  render() {
    return (
      <View>
        <Text>You are in Search Screen</Text>
      </View>
    )
  }
}
