import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.welcomeContainer}>
                <View style={styles.maincontainer}>
                    <ImageBackground style={styles.imagebakground}
                        source={require('./../../image/back.png')}>
                        <View style={styles.imageview2}>
                            <Image style={styles.icon}
                                source={require('./../../image/music.png')} />
                            <Text style={styles.textview}>Welcome {'\n'}to Eufonia</Text>
                        </View>
                        <View style={styles.view2}>
                            <Text style={styles.textview2}>Add some tagline here if require</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.imageview3}>
                    <Image style={styles.imagelogo}
                        source={require('./../../image/Logo1.png')}></Image>
                </View>
                <View style={styles.viewopicity}>
                    <TouchableOpacity style={styles.touchablepacity1}
                        onPress={() => this.props.navigation.navigate('logIn')}>
                            <Text style={{ textAlign: 'center' }}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchablepacity2}
                        onPress={() => this.props.navigation.navigate('createAccount')}>
                        <Text style={{ textAlign: 'center' }}>SIGN UP</Text>
                    </TouchableOpacity>

                </View>
                {/* ############################## text here ########################################## */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        backgroundColor:Color.homebackroundColor
    },
    maincontainer: {
        flex: 1,
        width: wp('100%'),
    },
    imagebakground: {
        height: hp('45%')
    },
    imageview2: {
        flexDirection: 'row',
        marginTop: '15%',
        marginLeft: 20
    },
    textview: {
        fontSize: 25,
        marginLeft: '10%',
        textAlign: 'center',
    },
    view2: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textview2: {
        color: '#F1F1F1',
        fontSize: 15,
    },

    touchablepacity1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3AB54A',
        borderRadius: 5,
        height: hp('8%'),
        bottom: 10,
        width: wp('90%'),
    },
    touchablepacity2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A1A1A1',
        borderRadius: 5,
        height: hp('8%'), bottom: 0,
        width: wp('90%'),
    },
    imageview3: {
        flex: .7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagelogo: {
        resizeMode: 'center',
        height: hp('35%'),
    },
    viewopicity: {
        alignItems: 'center',
        marginBottom: 10
    },
    icon: {
        marginTop: 10,
        marginLeft: 20
    }
})
