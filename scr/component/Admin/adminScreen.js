import React from 'react';
import { StyleSheet, Text, View,ScrollView, Image, FlatList, Modal, TextInput, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import IcIcon from 'react-native-vector-icons/MaterialIcons'

export default class adminScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%'), }}>
                    <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        <IcIcon style={{ marginLeft: -10, marginTop: -5, }} name={'keyboard-arrow-left'} size={40} color="#000"
                            onPress={() => this.props.navigation.navigate('category')} />
                    </View>
                </View>
                <ScrollView>
                <View style={styles.main}>
                    <View style={styles.mainView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('shop')} style={styles.shop}>
                            <Text style={styles.number}>1258</Text>
                            <Text style={styles.name}>Shop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('user')} style={styles.shop}>
                            <Text style={styles.number}>1258</Text>
                            <Text style={styles.name}>User</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('comment')} style={styles.shop}>
                            <Text style={styles.number}>1258</Text>
                            <Text style={styles.name}>Comments</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('publish')} style={styles.shop}>
                            <Text style={styles.number}>1258</Text>
                            <Text style={styles.name}>House Publish</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('product')} style={[styles.productView, shadow]}>
                        <View style={[styles.image, shadow]}>
                            <Image source={require('./../../image/money.png')} style={styles.listImage} resizeMode='stretch' />
                        </View>
                        <View style={styles.productName}>
                            <Text>Products</Text>
                            <Text>1258</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('composers')} style={[styles.productView, shadow]}>
                        <View style={[styles.image1, shadow]}>
                            <Image source={require('./../../image/lock.png')} style={styles.lock} resizeMode='stretch' />
                        </View>
                        <View style={styles.productName}>
                            <Text>Composers</Text>
                            <Text>1258</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.chart}>
                        <Text>Monthly Services</Text>
                        <Text>Purchases</Text>
                        <Image source={require('./../../image/ghrp.png')} style={styles.ghrp} resizeMode='stretch' />

                    </View>
                </View>
                
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
    chart:{
        backgroundColor: '#F6A243',
        // width: hp('20%'),
        height: hp('30%'),
        marginBottom: hp('3%'),
        borderRadius: 10,
        padding: 10

    },
    main: {
        marginHorizontal: wp('10%'),
    },
    productName: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: wp('18%'),
    },
    image: {
        backgroundColor: '#268BB6',
        width: 80,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image1: {
        backgroundColor: '#CF0000',
        width: 80,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp('3%'),
    },
    shop: {
        backgroundColor: Color.geryLight,
        width: wp('37%'),
        height: hp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    productView: {
        backgroundColor: Color.geryLight,
        width: wp('80%'),
        height: hp('15%'),
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: hp('3%'),

    },
    listImage: {
        width: 30,
        height: 30,
        borderRadius: 5
    },
    lock: {
        width: 30,
        height: 30,
        borderRadius: 5
    },
    ghrp: {
        width: 220,
        height: 100,
    },
    moneyView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});