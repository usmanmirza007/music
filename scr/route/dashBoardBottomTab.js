import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import home from './../component/home';
import search from './../component/search';
import category from './../component/category';
import location from './../component/location';
import setting from './../component/setting';
import Color from './../constant/color';
import EnIcon from 'react-native-vector-icons/MaterialIcons'

const TabScreens = createMaterialBottomTabNavigator({
    home:{
        screen: home,
        navigationOptions:  {
            title:'',
        }
    },
    search:{
        screen: search,
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
    order: ['home', 'search', 'category', 'location', 'setting'],
    initialRouteName: 'home',
    activeColor: '#000',
    inactiveColor: '#fff',
    barStyle: { backgroundColor: Color.primray},
  },);

export default (TabScreens);