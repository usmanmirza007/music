import React, { Component } from 'react';
import { View, StatusBar, ImageBackground,ScrollView, Image, KeyboardAvoidingView, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Color from '../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Left from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var radio_props = [
    { value: 0 },
    { value: 1 }
];

export default class checkOut extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.checkoutContainer}>
                    <ScrollView>

                <View style={styles.maincontainer}>

                    <View style={styles.touchableopacity} >
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Left name="left" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>
                    {/*second View */}
                    <View style={styles.checkoutheading}>
                        <Text style={styles.textcheckout}>Checkout</Text>

                    </View>
                    {/* third view  or view of name*/}
                    <View style={styles.textinputcontainer}>
                        <TextInput style={styles.textinput1}
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
                            placeholder="Last Name"
                            underlineColorAndroid = {Color.greyPrimray}


                        />
                        <TextInput style={styles.textinput1}
                            autoCompleteType="email"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Email Address"
                            underlineColorAndroid = {Color.greyPrimray}


                        />
                        <TextInput style={styles.textinput1}
                            autoCompleteType="tel"
                            keyboardType="name-phone-pad"
                            textContentType="telephoneNumber"
                            placeholder="Telephone no."
                            underlineColorAndroid = {Color.greyPrimray}
                            />
                    </View>
                    {/* View of region */}
                    <View style={styles.regioncontainer}>
                        {/* <Dropdown
                            label='Country Region'
                            data={data}
                        /> */}
                        <TextInput style={styles.textinput1}
                            autoCompleteType="name"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="City"
                            underlineColorAndroid = {Color.greyPrimray}


                        />
                        <TextInput style={styles.textinput1}
                            autoCompleteType="name"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="State"
                            underlineColorAndroid = {Color.greyPrimray}


                        />
                        <TextInput style={styles.textinput1}
                            autoCompleteType="email"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Address"
                            underlineColorAndroid = {Color.greyPrimray}
                        />

                    </View>
                    <View style={styles.paymentview}>
                        <Text style={styles.paymenttext}>Payment Method</Text>
                        <View style={styles.radiobuttonview}>
                            <View>
                                <Text style={styles.radiobuttontext}>CASH ON DELIVERY</Text>
                                <Text style={styles.radiobuttontext1}>ADD CARD</Text>
                            </View>
                            <View style={{ marginTop: 25, marginBottom: 10 }}>

                                <RadioForm style={{ fontSize: 15, }}
                                    radio_props={radio_props}
                                    initial={0}
                                    buttonColor={'#8A8989'}
                                    buttonSize={4}
                                    borderRadius={1}
                                    buttonInnerColor={'#8A8989'}
                                    buttonOuterColor={'#38059F'}
                                    onPress={(value) => { this.setState({ value: value }) }}

                                />
                            </View>

                        </View>

                    </View>
                    <View style={styles.opacityview}>
                        <TouchableOpacity style={styles.touchableopacity1}
                            onPress={() => this.props.navigation.navigate('addCardDetail')}>

                            <Text style={styles.opacitytext}>Complete Order</Text>


                        </TouchableOpacity>

                    </View>
                </View>
                </ScrollView>

            </KeyboardAvoidingView>

        );

    }
}
const styles = StyleSheet.create({
    checkoutContainer: {
        flex: 1,
        backgroundColor: Color.white,
        padding: 10,

    },
    touchableopacity: {
        width: wp('100%'), marginLeft: 10, marginTop: 10
    },
    maincontainer: {
      marginHorizontal: wp('3%'),
    },
    checkoutheading: {
        marginLeft: 10, marginTop: 5
    },
    textinputcontainer: {
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#F5F5F5',
    },

    regioncontainer: {
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#F5F5F5',
    },
    textcheckout: {
        color: '#3AB54A',
        fontSize: 20,
    },
    textinput1: { marginHorizontal: wp('5%'), fontSize: 10, height: 35, },
    opacityview: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableopacity1: {
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#3AB54A',
        height: 40,
        width: '97%',
    },
    opacitytext: {
        textAlign: 'center',
        fontSize: 20
    },
    paymentview: {
        marginLeft: 2,
        marginTop: 10,
        marginBottom: wp('5%'),
        borderRadius: 5,
        backgroundColor: '#F5F5F5'
    },
    paymenttext: {
        fontSize: 10,
        color: '#8A8989',
        marginLeft: 20,
        marginTop: 10,
    },
    radiobuttonview: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    radiobuttontext: {
        marginTop: 20,
        color: '#8A8989',
        marginLeft: 20
    },
    radiobuttontext1: {
        marginTop: 10,
        color: '#8A8989',
        marginLeft: 20
    },
})