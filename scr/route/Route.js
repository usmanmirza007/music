import selectCategory from './../component/selectCategory';
import {createStackNavigator} from 'react-navigation-stack';
import SafeAreaView from 'react-native-safe-area-context';
import dashBoardBottomTab from './dashBoardBottomTab';
import { createAppContainer } from 'react-navigation';
import productDetail from './../component/productDetail';
import shoppingCart from './../component/shoppingCart';
import map from './../component/map';
import publishHouse from './../component/publishHouse';
import folderName from './../component/folderName';
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
    tab:{
        screen: dashBoardBottomTab,
        navigationOptions: {
            headerShown: false
        },
    }
  },{
      initialRouteName: 'selectCategory'
  })

export default createAppContainer(Route);

