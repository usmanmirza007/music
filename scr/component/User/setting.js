import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import EnIcon from 'react-native-vector-icons/Ionicons'
import Color from './../../constant/color';
import TabIcon from 'react-native-vector-icons/Ionicons'
import Hearto from 'react-native-vector-icons/AntDesign';
import Cart from 'react-native-vector-icons/Zocial';

export default class setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <TabIcon
                name={'settings-sharp'}
                type='font-awesome'
                size={25}
                style={{ color: tintColor }}
                containerStyle={{ width: 10 }}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%'), justifyContent: 'center' }}>
                    <View style={{ marginLeft: wp('0%') }}>
                        <View style={styles.vectoricon}>
                            <Hearto style={{ marginRight: 20 }} name="hearto" size={20} color="#000" />
                            <Cart style={{ marginRight: 20 }} name="cart" size={20} color="#000" />
                        </View>
                    </View>
                </View>
                <View style={styles.headingcontainer}>
                    <Text style={{ color: '#3AB54A', fontSize: 25, }}>Settings</Text>
                </View>
                <View style={styles.informationconatiner}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('accountinformation')}>
                        <Text style={{ color: 'grey', marginTop: 20, marginLeft: 20, fontSize: 15, }}>Account Information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('neareststores')}>
                        <Text style={{ color: 'grey', marginTop: 20, marginLeft: 20, fontSize: 15, }}>Nearest Stores</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('forgotpassword')}>
                        <Text style={{ color: 'grey', marginTop: 20, marginLeft: 20, fontSize: 15, }}>Publishing House</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('forgotpassword')}>
                        <Text style={{ color: 'grey', marginTop: 20, marginLeft: 20, fontSize: 15, }}>Terms & Condition</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'grey', marginTop: 20, marginLeft: 20, fontSize: 15, }}>About Page</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('forgotpassword')}>
                        <Text style={{ color: 'grey', marginTop: 20, marginLeft: 20, fontSize: 15, }}>Page Author</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('login')}>
                        <Text style={{ color: 'grey', marginTop: 20, marginLeft: 20, fontSize: 15, }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    vectoricon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    headingcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 10,
        marginTop: 10
    },
    touchoableopacity: {
        marginLeft: 20,
        height: 20,
        marginTop: 20
    },
    touchoableopacity1: {
        color: '#55D4FF', fontSize: 55, fontWeight: 'bold',
        marginLeft: 20,
    },
});