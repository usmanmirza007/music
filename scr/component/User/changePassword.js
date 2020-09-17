import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Image, ScrollView, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class changePassword extends Component {

    render() {
        return (
            <View style={styles.changepasswordContainer}>
                {/*second View */}
                    <View style={styles.maincontainer}>
                <ScrollView>

                        <Text style={styles.changetext}>Change Password</Text>
                        <View style={styles.inputview}>
                            <TextInput style={{}}
                                secureTextEntry
                                autoCompleteType="password"
                                placeholder="New Password"
                                underlineColorAndroid={Color.greyPrimray}
                            />
                            <TextInput style={{ height: 50, }}
                                secureTextEntry
                                autoCompleteType="password"
                                placeholder="Confirm Password"
                                underlineColorAndroid={Color.greyPrimray}
                            />
                        </View>
                </ScrollView>

                    </View>
                    <TouchableOpacity style={styles.touchableopacity}
                        onPress={() => this.props.navigation.navigate('tab')}>
                        <Text style={styles.textopacity}>SAVE</Text>
                    </TouchableOpacity>
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
        marginHorizontal: '5%',
    },
    opacityview: {
        marginBottom: 20,
        alignItems: 'center',
    },
    touchableopacity: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.accsent,
        borderRadius: 5,
        height: 50,
        marginHorizontal: '5%',
        marginBottom: 20,
    },
    opacitytext: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
})