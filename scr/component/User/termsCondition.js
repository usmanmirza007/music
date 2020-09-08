import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, ScrollView, StyleSheet, Image, KeyboardAvoidingView, Text, Button, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Hearto from 'react-native-vector-icons/AntDesign';
import Cart from 'react-native-vector-icons/Zocial';
import Left from 'react-native-vector-icons/AntDesign';
import CheckBox from 'react-native-check-box'

export default class termsCondition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
        };
    }
    render() {
        return (

            <View style={styles.maincontainer}>
                {/* icon and back view */}
                <View style={styles.vectoricon}>
                    <TouchableOpacity style={styles.touchoableopacity}
                        onPress={() => this.props.navigation.goBack()}>
                        <Left name="left" size={20} color="#000" />
                    </TouchableOpacity>
                    <Hearto style={{ marginRight: 20 }} name="hearto" size={20} color="#000" />
                    <Cart style={{ marginRight: 20 }} name="cart" size={20} color="#000" />
                </View>
                {/* heading view */}
                <ScrollView>
                    <View style={styles.headingcontainer}>
                        <Text style={{ color: '#3AB54A', fontSize: 15, }}>Terms & condition</Text>


                    </View>
                    <View style={styles.textview}>
                        <Text >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aliquam porttitor dapibus nisi, vitae pulvinar lorem
                        retrum vel.Duis egestas oric et nulla faucibus ultrics.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aliquam porttitor dapibus nisi, vitae pulvinar lorem
                        retrum vel.Duis egestas oric et nulla faucibus ultrics.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aliquam porttitor dapibus nisi, vitae pulvinar lorem
                        retrum vel.Duis egestas oric et nulla faucibus ultrics.
                        Vestibulum auctor mauris lorem, a eleifend ligula consequent eu.
                    </Text>
                    </View>
                    <View style={styles.bullet}>
                        <Text style={{ marginVertical: '2%', fontSize: 12 }}>
                            •	    Lorem ipsum dolor sit amet, consectetur adipiscing
                    </Text><Text style={{ marginVertical: '2%', fontSize: 12 }}>
                            •	    Lorem ipsum dolor sit amet, consectetur adipiscing
                    </Text><Text style={{ marginVertical: '2%', fontSize: 12 }}>
                            •	    Lorem ipsum dolor sit amet, consectetur adipiscing
                    </Text><Text style={{ marginVertical: '2%', fontSize: 12 }}>
                            •	    Lorem ipsum dolor sit amet, consectetur adipiscing
                    </Text><Text style={{ marginVertical: '2%', fontSize: 12 }}>
                            •	    Lorem ipsum dolor sit amet, consectetur adipiscing
                    </Text>
                    </View>
                    <View style={styles.textview1}>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aliquam porttitor dapibus nisi, vitae pulvinar lorem
                        retrum vel.Duis egestas oric et nulla faucibus ultrics.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aliquam porttitor dapibus nisi, vitae pulvinar lorem
                        retrum vel.Duis egestas oric et nulla faucibus ultrics.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aliquam porttitor dapibus nisi, vitae pulvinar lorem
                        retrum vel.Duis egestas oric et nulla faucibus ultrics.
                        Vestibulum auctor mauris lorem, a eleifend ligula consequent eu.
                    </Text>
                    </View>
                    <CheckBox
                        style={{ flex: 1, padding: 0, marginLeft: 15,}}
                        checkBoxColor={'#38059F'}
                        onClick={() => {
                            this.setState({
                                isChecked: !this.state.isChecked
                            })
                        }}
                        isChecked={this.state.isChecked}
                        rightText={"Term & Condition"}
                    />
                </ScrollView>
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
        marginTop: 20,

    },
    headingcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 10,
        marginTop: 10
    },

    touchoableopacity: {
        marginRight: '65%'
    },
    textview: {
        marginLeft: 20,
        marginRight: 20
    },
    textview1: {
        marginLeft: 20,
        marginRight: 20
    },
    bullet: {
        marginLeft: 20,
    },




})