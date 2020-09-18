import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
import {
    AccessToken,
    GraphRequest,
    GraphRequestManager,
    LoginManager,
    LoginButton,
} from 'react-native-fbsdk';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';
GoogleSignin.configure({
    offlineAccess: false,
    // webClientId:'999697635442-kbe7rblrigie09a05mctkurh9p4knj55.apps.googleusercontent.com',
    androidClientId: '999697635442-kbe7rblrigie09a05mctkurh9p4knj55.apps.googleusercontent.com',
    scopes: ['profile', 'email']
    // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    // webClientId: '999697635442-kbe7rblrigie09a05mctkurh9p4knj55.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    // hostedDomain: '', // specifies a hosted domain restriction
    // androidCliendId: '999697635442-kbe7rblrigie09a05mctkurh9p4knj55.apps.googleusercontent.com',
    // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    // accountName: '', // [Android] specifies an account name on the device that should be used
    // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});
export default class logIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userGoogleInfo: {},
            loaded: false,
            userInfo: {},
            fName: '',
            lName: '',
            email: '',

            gName: '',
            gEmail: '',
            gPhoto: ''
        };
    }

    // logoutWithFacebook = () => {
    //     LoginManager.logOut();
    //     console.log("logout");
    //     // this.setState({ userInfo: {} });
    // };

    // // getInfoFromToken = token => {
    // //     const PROFILE_REQUEST_PARAMS = {
    // //         fields: {
    // //             string: 'id,name,first_name,last_name',
    // //         },
    // //     };
    // //     const profileRequest = new GraphRequest(
    // //         '/me',
    // //         { token, parameters: PROFILE_REQUEST_PARAMS },
    // //         (error, user) => {
    // //             if (error) {
    // //                 console.log('login info has error: ' + error);
    // //             } else {
    // //                 // this.setState({ userInfo: user });
    // //                 console.log('result:', user);
    // //             }
    // //         },
    // //     );
    // //     new GraphRequestManager().addRequest(profileRequest).start();
    // // };
    // initUser = (token) => {
    //     fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,picture.type(large),friends&access_token=' + token)
    //         .then((response) => {
    //             response.json().then((json) => {
    //                 // const ID = json.id
    //                 // console.log("ID " + ID);
    //                 const EM = json.email
    //                 const FN = json.first_name
    //                 const LN = json.last_name
    //                 console.log("First Name " + FN, LN, EM);
    //                 // console.log("email " +  EM);
    //                 this.setState({
    //                     fName: FN,
    //                     lName: LN,
    //                     // email: EM
    //                 })
    //             })
    //         })
    //         .catch(() => {
    //             console.log('ERROR GETTING DATA FROM FACEBOOK')
    //         })
    // }

    // loginWithFacebook = () => {
    //     // Attempt a login using the Facebook login dialog asking for default permissions.
    //     LoginManager.logInWithPermissions(['public_profile']).then(
    //         login => {
    //             if (login.isCancelled) {
    //                 console.log('Login cancelled');
    //             } else {
    //                 { this.props.navigation.navigate('tab') }
    //                 AccessToken.getCurrentAccessToken().then(data => {
    //                     const accessToken = data.accessToken.toString();
    //                     this.initUser(accessToken);
    //                 });
    //             }
    //         },

    //         error => {
    //             console.log('Login fail with error: ' + error);
    //         },
    //     );
    // };
    initUser = (token) => {
        fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,picture.type(large),friends&access_token=' + token)
            .then((response) => {
                response.json().then((json) => {
                    console.log("hello");
                    const ID = json.id
                    console.log("ID " + ID);
                    const EM = json.email
                    const FN = json.first_name
                    const LN = json.last_name
                    console.log("First Name " + FN, LN);
                    this.setState({
                        fName: FN,
                        lName: LN,
                        email: EM
                    })
                })
            })
            .catch(() => {
                console.log('ERROR GETTING DATA FROM FACEBOOK')
            })
    }

    googleSignIn = async () => {
        try {
            console.log("login");
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log("info", userInfo.user.email);
            const name = userInfo.user.name
            const email = userInfo.user.email
            const image = userInfo.user.photo
            this.setState({
                // userGoogleInfo: userInfo,
                gName: name,
                gEmail: email,
                gPhoto: image,
                loaded: true
            });
            { this.props.navigation.navigate('tab', { NAME: this.state.gName, IMAGE: this.state.gPhoto }) }

        } catch (error) {
            // console.log("err",error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('user cancelled the login flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('operation (e.g. sign in) is in progress already');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('play services not available or outdated');
            } else {
                console.log('some other error happened');
            }
        }
    };
    render() {
        const { fName, lName, email } = this.state
        return (
            <View style={styles.loginContainer}>
                <ScrollView>
                    <ImageBackground style={styles.imagebackground} source={require('./../../image/back.png')} resizeMode={'stretch'}>
                        <View style={styles.backopicity}>
                            <IcIcon style={{ marginLeft: 0, }} name={'keyboard-arrow-left'} size={40} color="#000"
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
                    <View style={{ alignItems: 'center', marginTop: 40, }}>
                        <LoginButton
                            onLoginFinished={
                                (error, result) => {
                                    if (error) {
                                        console.log("login has error: " + result.error);
                                    } else if (result.isCancelled) {
                                        console.log("login is cancelled.");
                                    } else {
                                        console.log('login');
                                        AccessToken.getCurrentAccessToken().then(
                                            (data) => {
                                                console.log('data', data.accessToken.toString())
                                                const userdata = data.accessToken.toString()
                                                this.initUser(userdata)
                                            }
                                        )
                                    }
                                    { this.props.navigation.navigate('tab') }
                                }
                            }
                            onLogoutFinished={() => console.log("logout.")} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginLeft: 0, }}>{fName}</Text>
                        <Text style={{ marginLeft: 5, }}>{lName}</Text>
                    </View>
                    <Text style={{ marginLeft: 0, }}>{email}</Text>

                    {/* ##################### google login #################### */}
                    <View style={{ alignItems: 'center' }}>
                        <GoogleSigninButton
                            style={{ width: 192, height: 48 }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={this.googleSignIn}
                        />
                    </View>
                    <TouchableOpacity style={styles.bottomview} onPress={() => this.props.navigation.navigate('signIn')}>
                        <Text style={styles.opicitytext2}>or Login with via Email Address</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    imagebackground: {
        // height: hp('100%'),
    },
    backopicity: {
        marginLeft: '5%',
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
    bottomview: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50,

    },
    opicitytext2: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#55D4FF',
    },


})
