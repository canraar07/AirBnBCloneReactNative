import Login from './Screen/LoginScreen'
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Navigator = createStackNavigator(
    {
        Home: { 
            screen: Login,
            navigationOptions: {
                title: 'Login',
                header: null
              },
        }
    },
    {
        initialRouteName: 'Home',
    }

);
let Navigation = createAppContainer(Navigator);
export default Navigation