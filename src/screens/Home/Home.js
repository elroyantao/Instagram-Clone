import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Welcome'
  }
  handleHomeNavigation = () => {
    const { navigate } = this.props.navigation
    navigate('Login', { name: 'Luigie' })
  }
  render() {
    return (
      <View>
        <Text>You are in Home Screen</Text>
        <Button
          title="Tap to go to login screen"
          onPress={this.handleHomeNavigation}
        />
      </View>
    )
  }
}
