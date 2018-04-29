import { TabNavigator } from 'react-navigation'

import Feed from './FeedStack'
import Search from '../screens/Search/Search'
import Add from '../screens/Add/Add'
import Notifications from '../screens/Notifications/Notifications'
import Profile from '../screens/Profile/Profile'

export default TabNavigator({
  Feed: { screen: Feed },
  Search: { screen: Search },
  Add: { screen: Add },
  Notifications: { screen: Notifications },
  Profile: { screen: Profile }
})
