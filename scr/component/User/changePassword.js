import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class changePassword extends Component {

    render() {
        return (
            <View style={styles.changepasswordContainer}>
                {/*second View */}
                <View style={styles.maincontainer}>
                    <Text style={styles.changetext}>Change Password</Text>
                    <View style={styles.inputview}>
                        <TextInput style={{ width: '90%', }}
                            secureTextEntry
                            autoCompleteType="password"
                            placeholder="New Password"
                            underlineColorAndroid = {Color.greyPrimray}
                        />
                        <TextInput style={{ width: '90%', height: 50, }}
                            secureTextEntry
                            autoCompleteType="password"
                            placeholder="Confirm Password"
                            underlineColorAndroid = {Color.greyPrimray}
                        />
                    </View>
                </View>
                <View style={styles.opacityview}>
                    <TouchableOpacity style={styles.touchableopacity}
                        onPress={() => this.props.navigation.navigate('tab')}>
                        <Text style={styles.opacitytext}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );

    }
}
const styles = StyleSheet.create({
    changepasswordContainer:
    {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    maincontainer: {
        flex: 1,
        marginTop: '10%'
    },
    changetext: {
        marginLeft: 20,
        color: '#3AB54A',
        fontSize: 25,
    },
    inputview: {
        marginTop: 30,
        justifyContent: "center",
        alignItems: 'center'
    },
    opacityview: {
        marginBottom: 20,
        alignItems: 'center',
    },
    touchableopacity: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3AB54A',
        borderRadius: 5,
        height: hp('7%'),
        width: '90%',
    },
    opacitytext: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
})