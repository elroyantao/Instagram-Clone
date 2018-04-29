import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Container } from 'native-base'

export default class Comment extends Component {
  render() {
    const { comment } = this.props
    return (
        <Text style={{ marginTop: -20}}>
          <Text style={style.user}>{comment.from.username} </Text>
          {comment.text}
        </Text>
    )
  }
}

const style = StyleSheet.create({
  user: {
    fontWeight: 'bold'
  },
})
