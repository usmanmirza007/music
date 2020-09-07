import React, { Component } from 'react';
import { View, StatusBar, ImageBackground,ScrollView, StyleSheet, Image, KeyboardAvoidingView, Text, Button, TouchableOpacity } from 'react-native';
//import { Dropdown } from 'react-native-material-dropdown';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Left from 'react-native-vector-icons/AntDesign';
export default class addCardDetail extends Component {
    render() {

        return (
            <KeyboardAvoidingView style={styles.addcarddetailContainer}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.touchoableopacity}
                        onPress={() => this.props.navigation.goBack()}>
                        <Left name="left" size={20} color="#000" />
                    </TouchableOpacity>
                    {/*second View */}
                    <View style={{ marginLeft: 20, marginTop: 5 }}>
                        <Text style={{ color: '#3AB54A', fontSize: 20, }}>Add Card Details</Text>

                    </View>
                    {/* third view  or view of name*/}
                    <ScrollView>
                    <View style={styles.inputcontainer}  >

                        <TextInput style={styles.textinput}
                            autoCompleteType="cc-number"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Card Number"
                            underlineColorAndroid = {Color.greyPrimray}

                        />
                        <TextInput style={styles.textinput}
                            secureTextEntry
                            autoCompleteType="password"
                            placeholder="Security Code"
                            underlineColorAndroid = {Color.greyPrimray}
                        />
                        <TextInput style={styles.textinput}
                            placeholder="MM/YY"
                            keyboardType="numeric"
                            underlineColorAndroid = {Color.greyPrimray}>
                        </TextInput>
                        <TextInput style={styles.textinput}
                            autoCompleteType="name"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Card Holder Name"
                            underlineColorAndroid = {Color.greyPrimray}
                        />
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '60%' }}>
                        <TouchableOpacity style={styles.touchoableopacity1}
                            onPress={() => this.props.navigation.navigate('home')}>
                            <Text style={{ textAlign: 'center', fontSize: 20 }}>Done</Text>
                        </TouchableOpacity>

                    </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>

        );

    }
}
const styles = StyleSheet.create({
    addcarddetailContainer: {
        backgroundColor: Color.homebackroundColor,
        flex: 1,
    },
    touchoableopacity: {
        marginLeft: 20,
        height: 20,
        marginTop: 20
    },
    inputcontainer: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5,
    },
    textinput: {
        width: '90%',
        fontSize: 10,
        height: 35
    },
    touchoableopacity1: {
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#3AB54A',
        height: 50,
        width: '90%',

        marginTop: 20,
    },

})