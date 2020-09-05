import SafeAreaView from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import home from './../component/home';
import SideMenu from './../route/SideMenu';
import search from '../component/search';

const DashBoard = createDrawerNavigator({
  search: {
    screen: search,
  },
// here drawer navigation
}, {
  drawerWidth: 300,
  initialRouteName: 'search',
  contentComponent: SideMenu,
});


export default (DashBoard);

