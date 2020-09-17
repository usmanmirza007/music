import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default class Welcome extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.welcomeContainer}>
                <ScrollView>
                    <View style={styles.maincontainer}>
                        <ImageBackground style={styles.imagebakground}
                            source={require('./../../image/back.png')} resizeMode={'stretch'} >
                            <View style={styles.imageview2}>
                                <Image style={styles.icon}
                                    source={require('./../../image/music.png')} />
                                <Text style={styles.textview}><Text style={{ fontWeight: '700' }} >Welcome </Text>{'\n'}to Eufonia</Text>
                            </View>
                                <Text style={styles.textview2}>Add some tagline here if require</Text>
                           
                        </ImageBackground>
                    </View>
                    <View style={styles.imageview3}>
                        <Image style={styles.imagelogo} resizeMode='stretch'
                            source={require('./../../image/Logo1.png')}></Image>
                    </View>
                    <View style={{ marginVertical: '20%', }}>
                        <TouchableOpacity style={styles.signinView}
                            onPress={() => this.props.navigation.navigate('logIn')}>
                            <Text style={styles.textopacity}>SIGN IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signupView}
                            onPress={() => this.props.navigation.navigate('createAccount')}>
                            <Text style={styles.textopacity}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor
    },
    imagebakground: {
        height: hp('100%')
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
    textview2: {
        color: '#F1F1F1',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 15,
    },
    signupView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A1A1A1',
        borderRadius: 5,
        height: 50,
        marginHorizontal: '5%',
    },
    imageview3: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagelogo: {
        height: 150,
        width: 150

    },
    icon: {
        marginTop: 10,
        marginLeft: 20
    },
    signinView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3AB54A',
        borderRadius: 5,
        height: 50,
        marginHorizontal: '5%',
        marginBottom: 10,
    },
})
