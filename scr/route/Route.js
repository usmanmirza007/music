import {createStackNavigator} from 'react-navigation-stack';
import SafeAreaView from 'react-native-safe-area-context';
import dashBoardBottomTab from './dashBoardBottomTab';
import DashBoard from './DashBoard';
import { createAppContainer } from 'react-navigation';
import productDetail from './../component/User/productDetail';
import shoppingCart from './../component/User/shoppingCart';
import map from './../component/User/map';
import publishHouse from './../component/User/publishHouse';
import folderName from './../component/User/folderName';
import playMusic from './../component/User/playMusic';
import pdf from '../component/User/pdf';
import selectCategory from './../component/User/selectCategory';
import mainScreen from './../component/mainScreen';
import adminScreen from './../component/Admin/adminScreen';
import shop from './../component/Admin/shop';
import user from './../component/Admin/user';
import comment from './../component/Admin/comment';
import publish from './../component/Admin/publish';
import product from './../component/Admin/product';
import composers from './../component/Admin/composers';

const Route =  createStackNavigator({
    selectCategory: {
        screen: selectCategory,
        navigationOptions: {
            headerShown: false
        },
    },
    productDetail: {
        screen: productDetail,
        navigationOptions: {
            headerShown: false
        },
    },
    shoppingCart: {
        screen: shoppingCart,
        navigationOptions: {
            headerShown: false
        },
    },
    map: {
        screen: map,
        navigationOptions: {
            headerShown: false
        },
    },
    publishHouse: {
        screen: publishHouse,
        navigationOptions: {
            headerShown: false
        },
    },
    folderName: {
        screen: folderName,
        navigationOptions: {
            headerShown: false
        },
    },
    playMusic: {
        screen: playMusic,
        navigationOptions: {
            headerShown: false
        },
    },
    mainScreen: {
        screen: mainScreen,
        navigationOptions: {
            headerShown: false
        },
    },
    pdf: {
        screen: pdf,
        navigationOptions: {
            headerShown: false
        },
    },
    adminScreen: {
        screen: adminScreen,
        navigationOptions: {
            headerShown: false
        },
    },
    shop: {
        screen: shop,
        navigationOptions: {
            headerShown: false
        },
    },
    user: {
        screen: user,
        navigationOptions: {
            headerShown: false
        },
    },
    comment: {
        screen: comment,
        navigationOptions: {
            headerShown: false
        },
    },
    publish: {
        screen: publish,
        navigationOptions: {
            headerShown: false
        },
    },
    product: {
        screen: product,
        navigationOptions: {
            headerShown: false
        },
    },
    composers: {
        screen: composers,
        navigationOptions: {
            headerShown: false
        },
    },
    tab:{
        screen: dashBoardBottomTab,
        navigationOptions: {
            headerShown: false
        },
    },
    tabs: {
        screen: DashBoard,
        navigationOptions: {
            headerShown: false
        },
    },
  },{
      initialRouteName: 'mainScreen'
  })

export default createAppContainer(Route);

