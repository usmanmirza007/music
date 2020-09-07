import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Image, KeyboardAvoidingView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'

export default class signUp extends Component {

    render() {
        return (
            <KeyboardAvoidingView style={styles.signupContainer}>
                <View>

                    <View style={styles.maincontainer}>
                                <IcIcon style={{ marginLeft: -10, }} name={'keyboard-arrow-left'} size={40} color="#000"
                                    onPress={
                                        () => this.props.navigation.goBack()} />
                    </View>
                    {/*second View */}

                    <View>

                        <Text style={styles.hellotext}>Hello there,{'\n'}SIGN UP  </Text>
                        <View style={styles.inputview}>
                            <TextInput style={styles.textinput}
                                autoCompleteType="name"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Name"
                                underlineColorAndroid = {Color.greyPrimray}

                            />
                            <TextInput style={styles.textinput1}
                                autoCompleteType="name"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Surname"
                                underlineColorAndroid = {Color.greyPrimray}


                            />
                            <TextInput style={styles.textinput2}
                                autoCompleteType="email"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Email"
                                underlineColorAndroid = {Color.greyPrimray}


                            />
                            <TextInput style={styles.textinput3}
                                secureTextEntry
                                autoCompleteType="password"
                                placeholder="Password"
                                underlineColorAndroid = {Color.greyPrimray}

                            />
                        </View>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.touchableopacity}
                            onPress={() => this.props.navigation.navigate('selectCategory')}>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>CONTINUE</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </KeyboardAvoidingView>
        );

    }
}
const styles = StyleSheet.create({
    signupContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    maincontainer: {
        width: wp('100%'),
        height: hp('10%'),
        marginLeft: 20,
    },
    backicon: {
        width: wp('3%'),
        height: hp('3'),
        marginTop: 20,
    },
    hellotext: {
        marginLeft: 20,
        color: 'green',
        fontSize: 25,
        fontWeight: 'normal'
    },
    inputview: {
        justifyContent: "center",
        alignItems: 'center'
    },
    textinput: { width: wp('90%'), height: hp('8%') },
    textinput1: { width: wp('90%'), height: hp('8%') },
    textinput2: { width: wp('90%'), height: hp('8%') },
    textinput3: { width: wp('90%'), height: hp('8%') },

    touchableopacity: {
        marginTop: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3AB54A',
        borderRadius: 5, height: hp('7%'),
        width: '90%',
    }
})