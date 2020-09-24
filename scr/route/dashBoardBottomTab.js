import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import home from './../component/User/home';
import profile from './../component/User/profile';
import category from './../component/User/category';
import location from './../component/User/location';
import setting from './../component/User/setting';
import Color from './../constant/color';
import DashBoard from './DashBoard';
const TabScreens = createMaterialBottomTabNavigator({
   
    home:{
        screen: home,
        navigationOptions:  {
            title:'',
        }
    },
    profile:{
        screen: profile,
        navigationOptions:  {
            title:'',
        }
    },
    category:{
        screen: category,
        navigationOptions:  {
            title:'',
        }
    },
    location:{
        screen: location,
        navigationOptions:  {
            title:'',
        }
    },
    setting:{
        screen: setting,
        navigationOptions:  {
            title:'',
        }
    },
}, {
    order: ['home', 'category', 'location', 'setting', 'profile'],
    initialRouteName: 'home',
    activeColor: '#000',
    inactiveColor: '#fff',
    barStyle: { backgroundColor: Color.primray},
  },);

export default (TabScreens);