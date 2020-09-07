import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Image, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'

export default class forgotPassword extends Component {

    render() {
        return (

            <View style={styles.forgotContainer}>

                <View style={styles.maincontainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <IcIcon style={{ marginLeft: -10, }} name={'keyboard-arrow-left'} size={40} color="#000"
                            onPress={
                                () => this.props.navigation.goBack()} />
                    </TouchableOpacity>
                </View>
                {/*second View */}
                <View style={styles.forgotview}>
                    <Text style={styles.forgottext1}>Forgot Password</Text>
                    <Text style={styles.forgottext2}>Enter your email address</Text>
                </View>
                <View style={styles.inputview}>
                    <TextInput style={styles.textinput}
                        autoCompleteType="email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        placeholder="Email"
                        underlineColorAndroid = {Color.greyPrimray}

                    />
                </View>
                <View style={styles.opacityview}>
                    <TouchableOpacity style={styles.touchableopacity}
                        onPress={() => this.props.navigation.navigate('changePassword')}>
                        <Text style={styles.opacitytext}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );

    }
}
const styles = StyleSheet.create({
    forgotContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    maincontainer: {
        flex: .2,
        width: wp('100%'),
        marginLeft: 20
    },

    backicon: {
        width: wp('3%'),
        height: hp('3'),
        marginTop: 20,
    },
    forgotview: {
        flex: .3,
        marginLeft: 20
    },
    forgottext1: {
        color: '#3AB54A',
        fontSize: 20,
        fontWeight: 'bold'
    },
    forgottext2: {
        fontSize: 11,
        marginTop: 10,
    },
    inputview: {
        flex: .4,
        alignItems: 'center'
    },
    textinput: {
        width: '90%',
        height: hp('10%'),
    },
    opacityview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableopacity: {
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: '50%',
        backgroundColor: '#3AB54A',
        height: hp('8%'),
        width: wp('90%'),
    },
    opacitytext: {
        textAlign: 'center',
        fontSize: 20
    }
})