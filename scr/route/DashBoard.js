import SafeAreaView from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import home from './../component/User/home';
import SideMenu from './../route/SideMenu';
import search from '../component/User/search';
import drawer from '../component/User/drawer';

const DashBoard = createDrawerNavigator({
  drawer: {
    screen: drawer,
  },
}, {
  drawerWidth: 300,
  initialRouteName: 'drawer',
  contentComponent: SideMenu,
});


export default (DashBoard);

