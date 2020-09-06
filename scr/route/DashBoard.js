import SafeAreaView from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import home from './../component/User/home';
import SideMenu from './../route/SideMenu';
import search from '../component/User/search';
import shoppingCart from '../component/User/shoppingCart';

const DashBoard = createDrawerNavigator({
  shoppingCart: {
    screen: shoppingCart,
  },
// here drawer navigation
}, {
  drawerWidth: 300,
  initialRouteName: 'shoppingCart',
  contentComponent: SideMenu,
});


export default (DashBoard);

