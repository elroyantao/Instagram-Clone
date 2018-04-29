import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  }
  handleHomeNavigation = () => {
    const { navigate } = this.props.navigation
    navigate('Home', { name: 'Homie' })
  }
  render() {
    return (
      <View>
        <Text>You are in Login Screen</Text>
        <Button
          title="Tap to go to home page"
          onPress={this.handleHomeNavigation}
        />
      </View>
    )
  }
}
