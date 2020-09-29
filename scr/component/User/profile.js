import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Alert, Modal, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity, DevSettings } from 'react-native';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import TabIcon from 'react-native-vector-icons/FontAwesome'

export default class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            fname: '',
            lname: '',
            // auth: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMzVlNWJmNzJjMjJhZTk5OTc3NWI3NjUzMWEzODc3ZDA2ZTJhZjk0OTEyMzZjYjg3ZGY4MGEyOTU2NWFmYTkzZjY4MTliZDYwNGQxOTA2NTMiLCJpYXQiOjE2MDEyNzE2NzEsIm5iZiI6MTYwMTI3MTY3MSwiZXhwIjoxNjMyODA3NjcxLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.jT896teinm0VccIXnWY4WdmOFrTzzphSZde96dIZWowzd-1l0c55dtXqwDkBpiymvi0QcuqN4G7aFnCKtNA0jTWtliv73UO8UEcrryl63-w2CsstrwYwfIZgiUZYYAp_vkn5l6faBc9ovRaYCrXNfXpHITkmwlhYUKrpTO5yFXKrvSMywFwdWeyB2bFWRZC2PWKLQd1S2SEgL9pLBg-9HWx1dDVI-NJ9Un-skk0A1iu8nhxVDPU0NlZuwAtKpBZCaVTZjFagAwkgN2CVgbWyIA3GfJ4qOgJSqkZyW93fsMXoj9f_43Nr1oa_-pAlxb5FK1-7zX2hB9P1oLyvckfQ-bEGlAc6t_MTKUnxvld363--5W96JvURGbetn75b3b1leh8iULcv5RUVu6poeBTMdBGu7QXF_dTnBrdmjoZNaZX-jCB2h_W02fCtDQqzbWUNt00mDHWt2gXc_l4s15XGdp-WumZrbHz_RNRHYzg8L5DoA_t_o56A_5WHZOY2CoSi26_CxJS99I3BjThHWmYZPwPgjSAy0QqakXfdZAfUwgXuQSxh4rR8tZOf77b9U-4i1XAA7Y_GNegj4M5BtpaYqaFDzM23h42HbwL6ewF_n52g2baETzt6pglmCFTIk1v7IvWDnxY-gqbQL_aYyp6hkEeQlsS1VqnTbuddov24dwY",
            // tokenType: this.props.navigation.getParam('TOKENTYPE'),
            token: this.props.navigation.getParam('TOKEN'),
            // auth: tokenType, " ",
        };
        // console.log("token", this.state.token);
    }

    componentDidMount() {
        this.profile()
    }

    async profile() {
        const { auth, tokenType, token } = this.state
        await fetch('http://eufonia.thesmartfreelancer.com/api/user', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': token
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log('res', responseJson.data.email);
                if (responseJson.msg === "user data") {
                    this.setState({
                        fname: responseJson.data.first_name,
                        lname: responseJson.data.last_name,
                        Email: responseJson.data.email,
                    })
                }
                else{
                    Alert.alert('Unauthenticated')
                }
            })
            .catch((error) => {
                alert(error);
            });
    }





    // publish = async () => {
    //     const { auth } = this.state
    //     await fetch('http://eufonia.thesmartfreelancer.com/api/user', {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-type': 'application/json',
    //             'Authorization': auth
    //         },
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //             console.log("response", responseJson);

    //             if (responseJson.success === '1') {
    //                 this.props.navigation.navigate('publish')
    //                 // AsyncStorage.setItem('OFFERID2', ID);
    //                 //   console.log("OFFERID", responseJson.obj.id)
    //                 //   let ID = `${responseJson.obj.id}`;
    //                 //   AsyncStorage.setItem('OFFERID', ID);
    //                 Alert.alert('successfully')
    //             }
    //         })
    //         .catch((error) => {
    //             alert(error);
    //         });
    // }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <TabIcon
                name={'user'}
                type='font-awesome'
                size={25}
                style={{ color: tintColor }}
                containerStyle={{ width: 10 }}
            />
        )
    }
    render() {
        const { fname, lname, Email } = this.state
        return (
            <View style={styles.signinContainer}>
                <View style={{ marginLeft: '1%', }}>
                    <IcIcon style={{}} name={'keyboard-arrow-left'} size={40} color="#000"
                        onPress={() => this.props.navigation.goBack()} />
                </View>
                <ScrollView>
                    <View style={styles.headingcontainer}>
                        <Text style={{ color: '#3AB54A', marginLeft: '5%', fontSize: 15, }}>Profile</Text>
                    </View>
                    <Image source={require('./../../image/user2.jpg')} style={{ width: 70, height: 70, marginTop: 10, borderRadius: 70, marginLeft: wp('5%'), }} />
                    <View style={styles.informationcontainer}>
                        <Text >First Name</Text>
                        <Text >{fname}</Text>
                    </View>
                    <View style={styles.informationcontainer}>
                        <Text>Last Name</Text>
                        <Text>{lname}</Text>
                    </View>
                    <View style={styles.informationcontainer}>
                        <Text>Email Address</Text>
                        <Text>{Email}</Text>
                    </View>
                    <View style={{ marginVertical: '2%', }}>
                        <TouchableOpacity style={styles.touchableopacity}
                            onPress={() => this.props.navigation.navigate('tab')}>
                            <Text style={styles.textopacity}>CHANGE PASSWORD</Text>
                        </TouchableOpacity>
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
    informationcontainer: {
        marginLeft: 20,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginBottom: 10,
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