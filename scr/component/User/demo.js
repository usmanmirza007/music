import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class demo extends Component {

    render() {
        return (

            <View style={styles.signinContainer}>
                <ScrollView>
                    <Text>demo</Text>
                   <View style={{backgroundColor: Color.accsent, marginHorizontal: '5%',}}>
                   <TextInput 
                        placeholder = {'user input'}
                        style={{}}
                    />
                   </View>
                   <View style={{backgroundColor: Color.accsent, marginHorizontal: '5%',marginTop: 10,}}>
                   <TextInput style={{}}
                                autoCompleteType="email"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Email"
                                underlineColorAndroid={Color.greyPrimray}
                            />
                   </View>
                </ScrollView>
            </View>

        );

    }
}
const styles = StyleSheet.create({
    signinContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },

})