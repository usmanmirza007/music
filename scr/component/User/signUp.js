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
            fname: '',
            lname: '',
            email: '',
            password: '',
        };
    }
    register() {
        const { fname } = this.state;
        const { lname } = this.state;
        const { email } = this.state;
        const { password } = this.state;

        if (this.state.fname === '') {
            alert("Please Enter Your First Name");
            return;
        }
        else if (this.state.lname === '') {
            alert("Please Enter Your Last Name");
            return;
        }
        else if (this.state.email === '') {
            alert("Please Enter Your Email");
            return;
        }
        else if (this.state.password === '') {
            alert("Please Enter Your Password");
            return;
        }
        else {
            fetch('http://eufonia.thesmartfreelancer.com/api/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: fname,
                    last_name: lname,
                    email: email,
                    password: password,
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log('res', responseJson.msg);
                    if (responseJson.msg === "user registered successfully") {
                        {this.props.navigation.navigate('selectCategory')}

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
                                placeholder="Name"
                                underlineColorAndroid={Color.greyPrimray}
                                value={this.state.fname}
                                onChangeText={fname => this.setState({ fname })}
                            />
                            <TextInput style={{}}
                                placeholder="Surename"
                                underlineColorAndroid={Color.greyPrimray}
                                value={this.state.lname}
                                onChangeText={lname => this.setState({ lname })}
                            />
                            <TextInput style={{}}
                                autoCapitalize='none'
                                keyboardType="email-address"
                                placeholder="Email"
                                underlineColorAndroid={Color.greyPrimray}
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                            />
                            <TextInput style={{}}
                                secureTextEntry
                                placeholder="Password"
                                underlineColorAndroid={Color.greyPrimray}
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                            />
                        </View>
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