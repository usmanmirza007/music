import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Image, TextInput, ScrollView, KeyboardAvoidingView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import Left from 'react-native-vector-icons/MaterialIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class addPublish extends Component {

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
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('addPublish') }} style={styles.buyView}>
                            <Text style={styles.buy}>ADD ATTACHMENT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*Body View */}
                <ScrollView>
                    <View style={styles.main}>
                        <TextInput style={styles.textinput}
                            autoCompleteType="name"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Title"
                            underlineColorAndroid={'grey'}
                        />
                        <TextInput style={styles.textinput}
                            autoCompleteType="name"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Author"
                            underlineColorAndroid={'grey'}
                        />
                        <TextInput style={styles.textinput}
                            autoCompleteType="name"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Ensemble"
                            underlineColorAndroid={'grey'}
                        />
                        <TextInput style={styles.textinput}
                            autoCompleteType="name"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="ID"
                            underlineColorAndroid={'grey'}

                        />
                        <TextInput style={styles.textinput}
                            autoCompleteType="name"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Internal Code"
                            underlineColorAndroid={'grey'}

                        />
                        <TextInput style={styles.textinput}
                            autoCompleteType="name"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            placeholder="Description"
                            underlineColorAndroid={'grey'}
                        />
                        <TouchableOpacity style={styles.touchableopacity}
                            onPress={() => this.props.navigation.navigate('addShop')}>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );

    }
}
const styles = StyleSheet.create({
    addpublishContainer: {
        flex: 1,

        backgroundColor: Color.white,
    },
    backicon: {
        width: wp('3%'),
        height: hp('3%'),
        marginTop: 10,
        marginLeft: 40,
    },

    main: {
        marginHorizontal: wp('5%'),

    },
    buyView: {
        backgroundColor: Color.green,
        height: 35,
        width: wp('45%'),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buy: {
        color: Color.white,

    },
    textinput: {
        marginVertical: hp('1.5%')
    },
    touchableopacity: {
        marginTop: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3AB54A',
        borderRadius: 5,
        height: hp('7%'),
        width: '90%',
        marginLeft: 15,
        marginBottom: hp('5%'),
    },
    opacitytext: {
        fontSize: 10,
        color: Color.white,
        height: hp('5%'),
        width: wp('35%'),
        textAlign: 'center',
    },
    attachmentview: {
        backgroundColor: '#3AB54A',
        borderRadius: 5,
        justifyContent: 'center',
    }

})