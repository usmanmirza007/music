import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, StyleSheet, Image, KeyboardAvoidingView, Text, Button, TouchableOpacity } from 'react-native';
//import { Dropdown } from 'react-native-material-dropdown';
import Color from '../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Hearto from 'react-native-vector-icons/AntDesign';
import Cart from 'react-native-vector-icons/Zocial';
import Left from 'react-native-vector-icons/AntDesign';
import MapView from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';

export default class nearestStores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            context: null,
            latitude: '37.78825',
            longitude: '-122.4324',
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            location: ''
        }
    }

    componentDidMount() {
        // this.getCurrentLocation()
    }

    getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (location) => {
                fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
                    location.coords.latitude + ',' + location.coords.longitude +
                    '&key=' + 'AIzaSyALsdA3DkzaodMRlAewkm82gLyxuuQtkOs')
                    .then((response) => response.json())
                    .then((responseJson) => {
                        alert(JSON.stringify(error))

                        this.setState({
                            formatted_address: responseJson.results[0].formatted_address,
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            location: location,
                        });
                    })
                    .catch((error) => {
                        // // console.error(error);
                        //   alert(error)
                    })
            },
            (error) => {
                // See error code charts below.
                // console.log(error.code, error.message);
            },
            { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
        );
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
                <View style={styles.headingcontainer}>
                    <Text style={{ color: '#3AB54A', fontSize: 15, }}>Nearest Stores</Text>
                </View>
                <View style={{ marginHorizontal: '5%', marginTop: hp('2%'), }}>
                    <Image source={require('./../../image/map.png')} style={styles.imageFirst} resizeMode='stretch' />
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: hp('2%'),}}>
                        <Text>Store Name</Text>
                        <Text>+92 265 258 2658</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: hp('2%'),}}>
                        <Text>Store Name</Text>
                        <Text>+92 265 258 2658</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: hp('2%'),}}>
                        <Text>Store Name</Text>
                        <Text>+92 265 258 2658</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: hp('2%'),}}>
                        <Text>Store Name</Text>
                        <Text>+92 265 258 2658</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: hp('2%'),}}>
                        <Text>Store Name</Text>
                        <Text>+92 265 258 2658</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: hp('2%'),}}>
                        <Text>Store Name</Text>
                        <Text>+92 265 258 2658</Text>
                    </View>
                </View>
            </View>
        );

    }
}
const styles = StyleSheet.create({

    // textWrapper: {
    //     height: hp('70%'), // 70% of height device screen
    //     width: wp('80%'),  // 80% of width device screen
    // },
    maincontainer: {
        flex: 1,
        backgroundColor: Color.white,
    },
    vectoricon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,

    },
    headingcontainer: {
        marginLeft: 20,
        marginRight: 10,
        marginTop: 10
    },

    touchoableopacity: {
        marginRight: '65%'
    },
    imageFirst: {
        width: wp('90%'), height: 200,
        //  marginRight: 10, 
        marginBottom: 10,
        borderRadius: 5
    },



})