import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, ScrollView, Image, Text, Button, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'

export default class forgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMe: false,
        };
    }
    renderModel = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                // style={{justifyContent: 'center',}}
                visible={this.state.showMe}>
                <View style={{ flex: 1 }}>
                    {/* <View style={{ flex: 0 }}></View> */}
                    <View style={[{ marginHorizontal: wp('5%'), alignItems: 'center', justifyContent: 'center', borderRadius: 10, height: hp('30%'), backgroundColor: Color.white, marginTop: '50%',  }, shadow]}>
                        <Text style={{ marginHorizontal: wp('5%'), color: Color.black, marginBottom: hp('4%'), }}>Resetting password link has been sent to your email</Text>
                        <TouchableOpacity onPress={() => { this.setState({ showMe: false }, () => { this.props.navigation.navigate('changePassword') }) }} style={styles.checkoutView}>
                            <Text style={styles.checkout}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
    render() {
        return (

            <View style={styles.forgotContainer}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <IcIcon style={{ marginLeft: 0, }} name={'keyboard-arrow-left'} size={40} color="#000"
                                onPress={() => this.props.navigation.goBack()} />
                        </TouchableOpacity>
                        <View style={styles.forgotview}>
                            <Text style={styles.forgottext1}>Forgot Password</Text>
                            <Text style={styles.forgottext2}>Enter your email address</Text>
                        </View>
                        <TextInput style={{ marginHorizontal: '5%', }}
                            autoCompleteType="email"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            autoCapitalize='none'
                            placeholder="Email"
                            underlineColorAndroid={Color.greyPrimray}
                        />
                    </View>
                </ScrollView>

                <View style={{}}>
                    <TouchableOpacity style={styles.signupView}
                        onPress={() => { this.setState({ showMe: true }) }}>
                        <Text style={styles.textopacity}>CONTINUE</Text>
                        {this.renderModel()}

                    </TouchableOpacity>
                </View>
            </View>
        );

    }
}
const shadow = {
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
        width: 0,
        height: 4
    }
}
const styles = StyleSheet.create({
    forgotContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    signupView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.accsent,
        borderRadius: 5,
        height: 50,
        marginHorizontal: '5%',
        marginBottom: '5%',
    },
    forgotview: {
        marginLeft: '5%'
    },
    checkoutView: {
        backgroundColor: Color.green,
        marginHorizontal: wp('0%'),
        width: wp('40%'),
        height: hp('8%'),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('3%'),
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
})