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
import welcome from './../component/User/welcome';
import signIn from './../component/User/signIn';
import signUp from './../component/User/signUp';
import logIn from './../component/User/logIn';
import createAccount from './../component/User/createAccount';
import forgotPassword from './../component/User/forgotPassword';
import changePassword from './../component/User/changePassword';
import accountInformation from './../component/User/accountInformation';
import checkOut from './../component/User/checkOut';
import nearestStores from './../component/User/nearestStores';
import termsCondition from './../component/User/termsCondition';
import aboutApp from './../component/User/aboutApp';
import publishSetting from './../component/User/publishSetting';
import pageAuthor from './../component/User/pageAuthor';
import productName from '../component/Admin/productName';
import addCardDetail from './../component/User/addCardDetail';
import adminScreen from './../component/Admin/adminScreen';
import shop from './../component/Admin/shop';
import addShop from './../component/Admin/addShop';
import addPublish from './../component/Admin/addPublish';
import user from './../component/Admin/user';
import comment from './../component/Admin/comment';
import publish from './../component/Admin/publish';
import product from './../component/Admin/product';
import facebookLogin from './../component/User/facebookLogin';
import composers from './../component/Admin/composers';
import demo from './../component/User/demo';

const Route =  createStackNavigator({
    selectCategory: {
        screen: selectCategory,
        navigationOptions: {
            headerShown: false
        },
    },
    welcome: {
        screen: welcome,
        navigationOptions: {
            headerShown: false
        },
    },
    demo: {
        screen: demo,
        navigationOptions: {
            headerShown: false
        },
    },
    facebookLogin: {
        screen: facebookLogin,
        navigationOptions: {
            headerShown: false
        },
    },
    addPublish: {
        screen: addPublish,
        navigationOptions: {
            headerShown: false
        },
    },
    addShop: {
        screen: addShop,
        navigationOptions: {
            headerShown: false
        },
    },
    productName: {
        screen: productName,
        navigationOptions: {
            headerShown: false
        },
    },
    addCardDetail: {
        screen: addCardDetail,
        navigationOptions: {
            headerShown: false
        },
    },
    pageAuthor: {
        screen: pageAuthor,
        navigationOptions: {
            headerShown: false
        },
    },
    publishSetting: {
        screen: publishSetting,
        navigationOptions: {
            headerShown: false
        },
    },
    aboutApp: {
        screen: aboutApp,
        navigationOptions: {
            headerShown: false
        },
    },
    nearestStores: {
        screen: nearestStores,
        navigationOptions: {
            headerShown: false
        },
    },
    termsCondition: {
        screen: termsCondition,
        navigationOptions: {
            headerShown: false
        },
    },
    checkOut: {
        screen: checkOut,
        navigationOptions: {
            headerShown: false
        },
    },
    accountInformation: {
        screen: accountInformation,
        navigationOptions: {
            headerShown: false
        },
    },
    changePassword: {
        screen: changePassword,
        navigationOptions: {
            headerShown: false
        },
    },
    forgotPassword: {
        screen: forgotPassword,
        navigationOptions: {
            headerShown: false
        },
    },
    logIn: {
        screen: logIn,
        navigationOptions: {
            headerShown: false
        },
    },
    createAccount: {
        screen: createAccount,
        navigationOptions: {
            headerShown: false
        },
    },
    signIn: {
        screen: signIn,
        navigationOptions: {
            headerShown: false
        },
    },
    signUp: {
        screen: signUp,
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
    search: {
        screen: DashBoard,
        navigationOptions: {
            headerShown: false
        },
    },
    
   
  },{
      initialRouteName: 'mainScreen'
  })

export default createAppContainer(Route);

