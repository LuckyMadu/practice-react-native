import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeStack from './HomeStack';

const NavigatorTab = createBottomTabNavigator(
  {
    HomeStack,
  },
  {
    resetOnBlur: true,
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: '#F26D21',
      style: {
        borderWidth: 0,
        backgroundColor: '#000000',
        borderTopColor: '#000000',
      },
    },
    initialRouteName: 'HomeStack',
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
);

export default NavigatorTab;
