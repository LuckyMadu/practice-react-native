import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'HomeScreen',
    navigationOptions: ({navigation}) => ({
      header: null,
      tabBarLabel: 'Home',
    }),
  },
);

export default HomeStack;
