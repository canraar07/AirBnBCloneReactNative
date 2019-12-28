import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ExplormoreScreen from './Screen/ExplormoreScreen';
import InboxScreen from './Screen/InboxScreen';
import ProfileScreen from './Screen/ProfileScreen';
import SavedScreen from './Screen/SavedScreen';
import TrifScreen from './Screen/TrifScreen';

const TabNavigator = createBottomTabNavigator({
    Explore: {
        screen: ExplormoreScreen,
      },
      Saved: {
        screen: SavedScreen,
      },
      Trip: {
        screen: TrifScreen,
      },
      Inbox: {
        screen: InboxScreen,
      },
      Profile: {
        screen: ProfileScreen,
      },
});
export default createAppContainer(TabNavigator);