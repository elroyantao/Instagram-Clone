import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Thumbnail } from 'native-base'

export default class ProfilePicture extends Component {
  render() {
    const { source } = this.props
    return (
        <Thumbnail source={{ uri: source }} style={styles.image}/>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    // backgroundColor: '#fff'
    width: 40,
    height: 40,
    borderRadius: 20
  },
});
