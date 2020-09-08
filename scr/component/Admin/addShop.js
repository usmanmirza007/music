import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Image, Picker, TextInput, ScrollView, KeyboardAvoidingView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import Left from 'react-native-vector-icons/MaterialIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class addShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
        };
    }
    render() {
        return (
            <View style={styles.addpublishContainer}>
                {/* header View */}
                <View style={{ height: hp('9%'), }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Left style={{ marginLeft: -10, }} name={'keyboard-arrow-left'} size={40} color="#000"
                                onPress={
                                    () => this.props.navigation.navigate('adminScreen')} />
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('addShop') }} style={styles.buyView}>
                            <Text style={styles.buy}>ADD NEW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*Body View */}
                < ScrollView >
                    <View style={styles.secondview}>
                        <TextInput style={styles.textinput}
                            autoCompleteType="name"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Name"
                            underlineColorAndroid={'grey'}

                        />
                        <View style={{ borderWidth: 1, borderColor: '#fff', width: 290, marginLeft: 0 }}>
                            <Picker style={{ height: 30, padding: 0, color: Color.greyPrimray }}
                                selectedValue={this.state.type}
                                mode = "dropdown"
                                onValueChange={(itemValue) =>
                                    this.setState({ type: itemValue })}>
                                <Picker.label label= "Location" />
                                <Picker.Item label="Karachi" value="Karachi" />
                                <Picker.Item label="Lahore" value="Lahore" />
                            </Picker>
                        </View>
                        <TextInput style={styles.textinput}
                            autoCompleteType="name"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Mobile no."
                            underlineColorAndroid={'grey'}

                        />
                        
                        <TextInput style={styles.textinput}
                            autoCompleteType="name"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Email Address"
                            underlineColorAndroid={'grey'}

                        />

                        <TextInput style={styles.textinput}
                            autoCompleteType="name"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Description"
                            underlineColorAndroid={'grey'}
                        />
                    </View>
                    <View style={{ alignItems: 'center', marginBottom: hp('5%'), }}>
                        <TouchableOpacity style={styles.touchableopacity}
                            onPress={() => this.props.navigation.navigate('shop')}>
                            <Text style={{ fontWeight: 'bold', }}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView >
            </View >
        );

    }
}
const styles = StyleSheet.create({
    addpublishContainer: {
        flex: 1,
        backgroundColor: Color.white,
    },
    touchableopacity: {
        width: wp('100%'),
    },
    buy: {
        color: Color.white,

    },
    backicon: {
        width: wp('3%'),
        height: hp('3%'),
        marginTop: 10,
        marginLeft: 40,
    },
    buyView: {
        backgroundColor: Color.green,
        height: 35,
        width: wp('30%'),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondview: {
        marginHorizontal: wp('5%'),

    },
    textinput: {
        marginVertical: hp('1.5%')
    },
    touchableopacity: {
        marginTop: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3AB54A',
        borderRadius: 5,
        height: hp('7%'),
        width: wp('90%'),
    },

    opacitytext: {
        fontSize: 10,
        color: Color.white,
        textAlign: 'center',
        backgroundColor: '#3AB54A',
        borderRadius: 5,
        height: hp('5%'),
        width: wp('35%'),
    },
    attachmentview: {
        backgroundColor: '#3AB54A',
        borderRadius: 5,
        justifyContent: 'center',
    }

})