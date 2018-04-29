import React, { Component } from 'react'
import { Card, CardItem, Container, Content, Text, Spinner, Left, Right, Body, Icon } from 'native-base'
import { StyleSheet, View } from 'react-native'
import { path } from 'ramda'

import ProfilePicture from '../ProfilePicture/ProfilePicture'
import Photo from '../Media/Photo'
import Comment from '../Comment/Comment'

export default class FeedCard extends Component {

  handleAlert = (message) => {
    alert(message)
  }
  getUserName = () => {
    const { post } = this.props
    const username = path(['user','full_name'], post)
    return username ? (
      <Text style={style.profileName}>{username}</Text>
    ) : null
  }

  getLocationName = () => {
    const location = path(['post', 'location', 'name'], this.props)
    return location ? (
      <Text note style={style.locationName}>{location}</Text>
    ) : null
  }

  renderMedia = () => {
    const { post: { type, images } } = this.props
    if (type === 'image') {
      return (
        <Photo images={images} />
      )
    }
    return null
  }

  renderComments = () => {
    const { post: { caption } } = this.props
    if (caption) {
      return (
        <CardItem>
          <Comment comment={caption} />
        </CardItem>
      )
    }
    return null
  }

  render() {
    const { post: { user } } = this.props
    return (
      <Card>
        <CardItem header button onPress={() => this.handleAlert('open profile')}>
          <Left>
            <ProfilePicture source={user.profile_picture}/>
            <Body>
              {this.getUserName()}
              {this.getLocationName()}
            </Body>
          </Left>
        </CardItem>
        <View>
          {this.renderMedia()}
        </View>
        <CardItem>
          <Left>
            <Icon style={style.icon} onPress={() => this.handleAlert('like photo')} active name="md-heart-outline" />
            <Icon style={style.icon} onPress={() => this.handleAlert('comment')} active name="ios-text-outline" />
            <Icon style={style.icon} onPress={() => this.handleAlert('send photo')} active name="ios-send-outline" />
          </Left>
          <Right>
            <Icon style={style.icon} onPress={() => this.handleAlert('save for later')} active name="ios-bookmark-outline" />
          </Right>
        </CardItem>
        {this.renderComments()}
      </Card>
    )
  }
}

const style = StyleSheet.create({
  profileName: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  locationName: {
    fontSize: 12
  },
  icon: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 5,
    marginRight: 5
  }
})
