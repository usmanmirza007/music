import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'

export default class createAccount extends Component {

    render() {

        return (
            <View style={styles.createaccountContainer}>
                <View style={styles.maincontainer}>
                    <ImageBackground style={styles.backgroundimage}
                        source={require('./../../image/back.png')}
                    >
                        <View style={styles.backiconview}>
                            <IcIcon style={{ marginLeft: -10, }} name={'keyboard-arrow-left'} size={40} color="#000"
                                    onPress={
                                        () => this.props.navigation.goBack()} />
                            </View>
                        <View style={styles.musiciconview}>
                            <Image style={styles.iconmusic}
                                source={require('./../../image/music.png')}
                            >
                            </Image>
                            <Text style={styles.textwelcome}><Text style={{fontWeight: '700'}} >Welcome </Text> {'\n'}to Eufonia</Text>
                        </View>

                        <View style={styles.createaccountview}>
                            <Text style={styles.createaccounttext}>Create Account</Text>
                        </View>
                    </ImageBackground>
                </View>
                {/* second view */}
                <View style={styles.secondview}>
                    <TouchableOpacity style={styles.touchableopacity1}
                        onPress={() => this.props.navigation.navigate('www.facebook.com')}>
                        <View>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableopacity2}
                        onPress={() => this.props.navigation.navigate('google.com')}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.opacityview}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('signUp')}>

                        <Text style={styles.opacitytext}>or Signup with via Email Address</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    createaccountContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    maincontainer: {
        flex: 1,
        width: '100%',
    },
    backgroundimage: {
        height: hp('45%'),
        width: wp('100%'),
    },
    backiconview: { marginLeft: 20, },
    backicon: {
        width: wp('3%'),
        height: hp('3%'),
        marginTop: 20,
    },
    musiciconview: {
        flexDirection: 'row',
        marginTop: '10%',
        marginLeft: 20,
    },
    iconmusic: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textwelcome: {
        fontSize: 25,
        marginLeft: '20%',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    createaccountview: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    createaccounttext: {
        color: '#F1F1F1',
        fontSize: 15,
        fontWeight: 'bold'
    },
    secondview: {
        alignItems: 'center',
        bottom: '20%'
    },
    touchableopacity1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C7C7C7',
        borderRadius: 5,
        height: hp('7%'),
        bottom: 30,
        width: wp('90%'),
    },
    touchableopacity2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C7C7C7',
        borderRadius: 5,
        height: hp('7%'), width: wp('90%'),
    },
opacityview:{ 
    alignItems: 'center', 
justifyContent: 'center',
 bottom: '15%'
 },
 opacitytext:
 { 
     fontWeight: 'bold',
  textAlign: 'center', 
  color: '#55D4FF',
},

})


