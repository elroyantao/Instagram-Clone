import * as Expo from "expo";
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StyleProvider } from 'native-base'

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material'
import platform from './native-base-theme/variables/platform'
import commonColor from './native-base-theme/variables/commonColor'

import Tabs from './src/routers/tabScreens'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(platform)}>
        <View style={styles.container}>
          <Tabs/>
        </View>
      </StyleProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
