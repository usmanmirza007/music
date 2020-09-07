import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, StyleSheet, Image, KeyboardAvoidingView, Text, Button, TouchableOpacity } from 'react-native';
//import { Dropdown } from 'react-native-material-dropdown';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Hearto from 'react-native-vector-icons/AntDesign';
import Cart from 'react-native-vector-icons/Zocial';
import Left from 'react-native-vector-icons/AntDesign';

export default class accountInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
            <View style={styles.maincontainer}>
                <View style={{ height: hp('9%')}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        <View>
                            <Left name="left" size={20} color="#000" onPress={() => this.props.navigation.goBack()} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Hearto style={{ marginRight: 20 }} name="hearto" size={20} color="#000" />
                            <Cart style={{ marginRight: 0 }} name="cart" size={20} color="#000" />
                        </View>
                    </View>
                </View>
                {/* heading view */}
                <View style={styles.headingcontainer}>
                    <Text style={{ color: '#3AB54A', fontSize: 15, }}>Account Information</Text>
                    <TouchableOpacity style={styles.editbutton}
                        onPress={() => this.props.navigation.navigate('#')}>
                        <Text style={{ color: 'grey' }}>Edit</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.informationcontainer}>
                    <Text >Full Name</Text>
                    <Text >John Doe</Text>
                </View>
                <View style={styles.informationcontainer}>
                    <Text>Email Address</Text>
                    <Text>John Doe@mail.com</Text>
                </View>
                <View style={styles.informationcontainer}>
                    <Text>Password</Text>
                    <Text>********</Text>
                </View>
                <View style={styles.informationcontainer}>
                    <Text>Phone no.</Text>
                    <Text>+1 111 000 000</Text>
                </View>
                <View style={styles.informationcontainer}>
                    <Text>Country</Text>
                    <Text>USA</Text>
                </View>
                <View style={styles.informationcontainer}>
                    <Text>City</Text>
                    <Text>New London</Text>
                </View>
                <View style={styles.informationcontainer}>
                    <Text>State</Text>
                    <Text>Connecticut</Text>
                </View>
                <View style={styles.informationcontainer}>
                    <Text>Address</Text>
                    <Text>231 Mohegan</Text>
                </View>
                <View style={styles.informationcontainer}>
                    <Text>Payment Method</Text>
                    <Text>COD</Text>
                </View>
            </View>
        );

    }
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    vectoricon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: wp('5%'),
        marginTop: 20,
        backgroundColor: '#159'

    },
    headingcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 10,
        marginTop: 10
    },
    informationcontainer: {
        marginLeft: 20,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginBottom: 10,

    },
    touchoableopacity: {
        marginRight: '70%'
    },
    editbutton: {
        marginRight: 10,

    }


})