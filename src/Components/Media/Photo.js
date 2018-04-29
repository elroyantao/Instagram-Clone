import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Container } from 'native-base'

export default class Photo extends Component {
  render() {
    const { images } = this.props
    return (
      <Image
        source={{ uri: images.standard_resolution.url }}
        style={style.image}
        aspectRatio={images.standard_resolution.width/images.standard_resolution.height}
      />
    )
  }
}

const style = StyleSheet.create({
  image: {
    flex: 1
  },
})
