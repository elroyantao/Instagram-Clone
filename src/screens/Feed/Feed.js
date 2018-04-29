import React, { Component } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { Container } from 'native-base'

import FeedCard from '../../Components/FeedCard/FeedCard'
import feed from '../../mocks/feed.json'

export default class Feed extends Component {
  static navigationOptions = {
    title: 'Feed'
  }

  constructor(props) {
    super(props)
    this.state = {
      posts: feed.data
    }
  }

  handleHomeNavigation = () => {
    const { navigate } = this.props.navigation
    navigate('FeedSearch', { name: 'Luigie' })
  }
  render() {
    const { posts: unformatedPosts } = this.state
    const posts = unformatedPosts.map((post) => ({
      ...post,
      key: post.id
    }))
    return (
      <Container>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <FeedCard post={item} key={item.id} />
          )}
        />
      </Container>
    )
  }
}
