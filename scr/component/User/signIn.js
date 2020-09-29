import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class signIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        
    }
    register() {
        const { email , password } = this.state;

        if (this.state.email === '') {
            alert("Please Enter Your Email");
            return;
        }
        else if (this.state.password === '') {
            alert("Please Enter Your Password");
            return;
        }
        else {
            const formdata = new FormData();
            formdata.append('username', email);
            formdata.append('password', password);
            formdata.append('grant_type', "password");
            formdata.append('client_id', "2");
            formdata.append('client_secret',"KUtqZIUMVrTbLKCiFtvQFHcHfF5wHTlls6wFG8f3");    
            fetch('http://eufonia.thesmartfreelancer.com/oauth/token', {
                method: 'POST',
                headers: {
                    // 'Accept': 'application/json',
                    'Content-type': 'multipart/form-data'
                },
                body: formdata
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log('res', responseJson);
                    const tokenType = responseJson.token_type
                    const token = responseJson.access_token
                    const combineToken = `${tokenType} ${token}`
                    console.log(combineToken);
                    if (responseJson.token_type === "Bearer") {
                        { this.props.navigation.navigate('tab', {TOKEN: combineToken}) }

                    }
                    else if (responseJson.msg == 'user already exist') {
                        alert('Email is Already Exist');
                        return;
                    }
                    else {
                        alert('SOMETHING WENT WRONG !');
                        return;
                    }
                })
                .catch((error) => {
                    alert(error);
                });
        }
    }
    render() {
        return (

            <View style={styles.signinContainer}>
                
                <View style={{ marginLeft: '1%', }}>
                    <IcIcon style={{}} name={'keyboard-arrow-left'} size={40} color="#000"
                        onPress={() => this.props.navigation.goBack()} />
                </View>
                <ScrollView>

                    <View style={styles.helloview}>

                        <Text style={styles.hellotext}>Hello there,{'\n'}SIGN IN  </Text>
                        <View style={{ marginHorizontal: '5%', }}>
                            <TextInput style={{}}
                                autoCompleteType="email"
                                autoCapitalize='none'
                                keyboardType="email-address"
                                placeholder="Email"
                                underlineColorAndroid={Color.greyPrimray}
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                            />
                            <TextInput style={styles.textinput1}
                                secureTextEntry
                                autoCompleteType="password"
                                placeholder="Password"
                                underlineColorAndroid={Color.greyPrimray}
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.forgetview} onPress={() => this.props.navigation.navigate('forgotPassword')}>
                            <Text style={styles.textforget}> Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <View style={{ marginVertical: '2%', }}>
                    <TouchableOpacity style={styles.touchableopacity}
                        onPress={() => this.register()}>
                        <Text style={styles.textopacity}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>


            </View>

        );

    }
}
const styles = StyleSheet.create({
    signinContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    helloview: {
        flex: 1
    },
    hellotext: {
        marginLeft: '5%',
        color: Color.primray,
        fontSize: 15,
    },
    textinput1: {
        marginTop: 20
    },
    forgetview: {
        alignItems: 'flex-end',
        marginRight: '5%',
    },
    textforget: {
        color: '#55D4FF',
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    touchableopacity: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3AB54A',
        borderRadius: 5,
        height: 50,
        marginHorizontal: '5%',
    },
    textopacity: {
        fontWeight: 'bold',
        textAlign: 'center'
    }

})