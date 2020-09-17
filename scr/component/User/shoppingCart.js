import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, ScrollView, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import AntIcon from 'react-native-vector-icons/AntDesign'
import Heart from 'react-native-vector-icons/AntDesign'
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'
import IcIcon from 'react-native-vector-icons/MaterialIcons'

export default class shoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { image: require('./../../image/images1.png') },
                { image: require('./../../image/images1.png') },
                { image: require('./../../image/images1.png') },
                { image: require('./../../image/images1.png') }
            ],

        };
    }
    renderRow = ({ item }) => {
        return (
            <View>
                {/* <Image source={item.image1} style={{ width: 50, height: 50, marginRight: 10, borderRadius: 5 }} resizeMode='stretch' /> */}
                <Image source={item.image} style={{ width: 100, height: 100, marginRight: 10, borderRadius: 5 }} resizeMode='stretch' />
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%') }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%') }}>
                        <View>
                            <IcIcon style={{ marginLeft: -10 }} name={'keyboard-arrow-left'} size={40} color="#000"
                                onPress={
                                    () => this.props.navigation.navigate('#')} />
                        </View>
                        <View style={{ marginTop: hp('2%'), }}>
                            <AntIcon style={{}} name={'hearto'} size={26} color="#000"
                            // onPress={() => this.props.navigation.openDrawer()}
                            />
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <Text style={styles.title}>Shopping Cart</Text>
                    <View style={styles.mainView}>
                        <TouchableOpacity style={[styles.mainCart]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('./../../image/download.png')} style={styles.imageSecond} resizeMode='stretch' />
                                    <View style={{ marginLeft: '5%', }}>
                                        <Text style={styles.name}>Product Name</Text>
                                        <Text style={styles.price}>$354.125</Text>
                                    </View>
                                </View>
                                <View style={{}}>
                                    <Heart style={{ marginLeft: wp('0%'), }} name={'heart'} size={20} color="red"
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Delete style={{ marginLeft: wp('0%'), marginTop: hp('5%'), }} name={'delete'} size={20} color={Color.greyPrimray}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.mainCart]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('./../../image/download.png')} style={styles.imageSecond} resizeMode='stretch' />
                                    <View style={{ marginLeft: '5%', }}>
                                        <Text style={styles.name}>Product Name</Text>
                                        <Text style={styles.price}>$354.125</Text>
                                    </View>
                                </View>
                                <View style={{}}>
                                    <Heart style={{ marginLeft: wp('0%'), }} name={'heart'} size={20} color="red"
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Delete style={{ marginLeft: wp('0%'), marginTop: hp('5%'), }} name={'delete'} size={20} color={Color.greyPrimray}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.totalView}>
                            <Text style={styles.name}>Total Amount</Text>
                            <Text style={styles.price}>$966.54</Text>
                        </View>
                        <View style={styles.border}></View>
                    </View>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('checkOut') }} style={styles.checkoutView}>
                        <Text style={styles.checkout}>Proceed to Checkout</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        );
    }

}
const shadow = {
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
        width: 0,
        height: 4
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    mainView: {
        marginHorizontal: wp('5%'),
    },
    title: {
        color: Color.green,
        marginBottom: hp('3%'),
        fontWeight: '700',
        fontSize: 15,
        marginLeft: wp('5%'),
    },
    mainCart: {
        backgroundColor: Color.geryLight,
        // height: hp('17%'),
        borderRadius: 5,
        padding: 10,
        marginBottom: hp('2%'),
    },
    imageSecond: {
        width: 70, height: 70,
        //  marginRight: 10, 
        borderRadius: 5,
    },
    heartView: {
        flexDirection: 'row',
        marginLeft: wp('5%'),
    },
    name: {
        fontSize: 13,
        fontWeight: '700',
    },
    price: {
        fontSize: 13,
        fontWeight: '700',
        color: Color.orange,
    },
    totalView: {
        alignItems: 'flex-end',
        marginTop: hp('15%'),
    },
    border: {
        borderBottomColor: Color.greyPrimray,
        borderBottomWidth: 2,
        marginVertical: hp('2%'),
    },
    checkoutView: {
        backgroundColor: Color.green,
        marginHorizontal: wp('5%'),
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('3%'),
    },
    checkout: {
        color: '#000',
        fontWeight: '700'
    }
});