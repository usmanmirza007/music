import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'

export default class signIn extends Component {

    render() {
        return (

            <View style={styles.signinContainer}>

                <View style={styles.maincontainer}>
                    <IcIcon style={{ marginLeft: -10, }} name={'keyboard-arrow-left'} size={40} color="#000"
                                onPress={
                                    () => this.props.navigation.goBack()} />
                </View>
                {/*second View */}
                <View style={styles.helloview}>

                    <Text style={styles.hellotext}>Hello there,{'\n'}SIGN IN  </Text>
                    <View style={styles.inputview}>
                        <TextInput style={styles.textinput}
                            autoCompleteType="email"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Email"
                            underlineColorAndroid={Color.greyPrimray}
                        />
                        <TextInput style={styles.textinput1}
                            secureTextEntry
                            autoCompleteType="password"
                            placeholder="Password"
                            underlineColorAndroid={Color.greyPrimray}
                        />
                        <View style={styles.forgetview}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('forgotPassword')}>
                                <Text style={styles.textforget}> Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={styles.opacityview}>
                    <TouchableOpacity style={styles.touchableopacity}
                        onPress={() => this.props.navigation.navigate('tab')}>
                        <Text style={styles.textopacity}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );

    }
}
const styles = StyleSheet.create({
    signinContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    maincontainer: {
        height: hp('8%'),
        marginLeft: 20
    },
    backicon: {
        width: wp('3%'),
        height: hp('3'),
        marginTop: 20,
    },
    helloview: {
        flex: 1,
    },
    hellotext: {
        marginLeft: 20,
        color: Color.primray,
        fontSize: 15,
    },
    inputview: {
        flex: .5,
        justifyContent: "center",
        alignItems: 'center'
    },
    textinput: {
        width: wp('90%'),
        height: hp('10%')
    },
    textinput1: {
        width: wp('90%'),
        height: hp('8%'),
        marginTop: 20
    },
    forgetview: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '90%',
        height: 20,
    },
    textforget: {
        color: '#55D4FF',
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    opacityview: {
        bottom: 10,
        alignItems: 'center',
    },
    touchableopacity: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3AB54A',
        borderRadius: 5,
        height: hp('7%'),
        bottom: 0,
        width: wp('90%'),
    },
    textopacity: {
        fontWeight: 'bold',
        textAlign: 'center'
    }

})