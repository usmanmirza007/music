import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
import {
    AccessToken,
    GraphRequest,
    GraphRequestManager,
    LoginManager,
} from 'react-native-fbsdk';

export default class logIn extends Component {

    constructor(props) {
        super(props)
        state = {
            userInfo: {},
            fName: '',
            lName: '',
            email: ''
        };
    }

    logoutWithFacebook = () => {
        LoginManager.logOut();
        console.log("logout");
        // this.setState({ userInfo: {} });
    };

    // getInfoFromToken = token => {
    //     const PROFILE_REQUEST_PARAMS = {
    //         fields: {
    //             string: 'id,name,first_name,last_name',
    //         },
    //     };
    //     const profileRequest = new GraphRequest(
    //         '/me',
    //         { token, parameters: PROFILE_REQUEST_PARAMS },
    //         (error, user) => {
    //             if (error) {
    //                 console.log('login info has error: ' + error);
    //             } else {
    //                 // this.setState({ userInfo: user });
    //                 console.log('result:', user);
    //             }
    //         },
    //     );
    //     new GraphRequestManager().addRequest(profileRequest).start();
    // };
    initUser = (token) => {
        fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,picture.type(large),friends&access_token=' + token)
            .then((response) => {
                response.json().then((json) => {
                    // const ID = json.id
                    // console.log("ID " + ID);
                    const EM = json.email
                    const FN = json.first_name
                    const LN = json.last_name
                    console.log("First Name " + FN, LN, EM);
                    // console.log("email " +  EM);
                    this.setState({
                        fName: FN,
                        lName: LN,
                        // email: EM
                    })
                })
            })
            .catch(() => {
                console.log('ERROR GETTING DATA FROM FACEBOOK')
            })
    }

    loginWithFacebook = () => {
        // Attempt a login using the Facebook login dialog asking for default permissions.
        LoginManager.logInWithPermissions(['public_profile']).then(
            login => {
                if (login.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    {this.props.navigation.navigate('tab')}
                    AccessToken.getCurrentAccessToken().then(data => {
                        const accessToken = data.accessToken.toString();
                        this.initUser(accessToken);
                    });
                }
            },
            
            error => {
                console.log('Login fail with error: ' + error);
            },
        );
    };

    render() {
        // const isLogin = this.state.userInfo
        // const onPressButton = isLogin ? this.logoutWithFacebook : this.loginWithFacebook;
        return (
            <View style={styles.loginContainer}>

                <View style={styles.maincontainer}>
                    <ImageBackground style={styles.imagebackground} source={require('./../../image/back.png')}>
                        <View style={styles.backopicity}>
                            <IcIcon style={{ marginLeft: -10, }} name={'keyboard-arrow-left'} size={40} color="#000"
                                onPress={() => this.props.navigation.goBack()} />
                        </View>
                        <View style={styles.viewiconmusic}>
                            <Image style={{ marginTop: 10 }} source={require('../../image/music.png')} />
                            <Text style={styles.welcometext}><Text style={{ fontWeight: '700' }} >Welcome </Text> {'\n'}to Eufonia</Text>
                        </View>
                        <View style={styles.viewlogin}>
                            <Text style={styles.logintext}>Login</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.opicityview}>
                    <TouchableOpacity style={styles.touchableopacity1}
                        onPress={this.loginWithFacebook()}>
                        <View style={styles.opicityview1}>
                            <Text style={styles.opicitytext}>Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableopacity2}
                        onPress={() => this.props.navigation.navigate('google.com')}>
                        <Text style={styles.opicitytext1}>Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomview}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('signIn')}>
                        <Text style={styles.opicitytext2}>or Login with via Email Address</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    maincontainer:
    {
        flex: 1,
        width: wp('100%'),
    },
    imagebackground: {
        height: hp('45%'),
    },
    backopicity: {
        marginLeft: 20,
    },
    backicon: {
        width: wp('3%'),
        height: hp('3%'),
        marginTop: 20,
    },
    viewiconmusic: {
        flexDirection: 'row',
        marginTop: '10%',
        marginLeft: 20
    },
    welcometext: {
        fontSize: 15,
        marginLeft: '20%',
        textAlign: 'center',
    },
    viewlogin: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    logintext: {
        color: '#F1F1F1',
        fontSize: 15,
        fontWeight: 'bold'
    },
    opicityview: {
        alignItems: 'center',
        bottom: '20%'
    },
    opicityview1: {
        height: hp('5%'),
        width: wp('20%'),
    },
    touchableopacity1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C7C7C7',
        borderRadius: 5,
        height: hp('8%'),
        bottom: 30,
        width: wp('90%'),
    },
    opicitytext: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,

    },
    touchableopacity2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C7C7C7',
        borderRadius: 5,
        height: hp('8%'),
        width: wp('90%'),
    },
    opicitytext1: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bottomview: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '10%'

    },
    opicitytext2: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#55D4FF',
    },


})
