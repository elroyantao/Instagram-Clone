import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home/Home'
import Login from '../screens/Login/Login'

export const MainRoute = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
});
