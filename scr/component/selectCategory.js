import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EnIcon from 'react-native-vector-icons/MaterialIcons'
import Color from './../constant/color';

export default class selectCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
            check1: false,
            check2: false,
            check3: false,
            cont: false,
            item: [
                { name: 'Category Name', image: require('./../image/mic.png') },
                { name: 'Category Name', image: require('./../image/mic2.png') },
                { name: 'Category Name', image: require('./../image/mic3.png') },
                { name: 'Category Name', image: require('./../image/mic4.png') },
            ]
        };
    }

    count(){
    
        const check = !this.state.check
        const show = !this.state.cont
        this.setState({
            check: check,
            cont: show
        })
    }
    count1(){
        const check = !this.state.check1
        this.setState({
            check1: check,
        })
    }
    count2(){
        const check = !this.state.check2
        this.setState({
            check2: check,
        })
    }
    count3(){
        const check = !this.state.check3
        this.setState({
            check3: check,
        })
    }
    render() {
        const { item, check, check1, check2, check3, cont } = this.state
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%'), justifyContent: 'center' }}>
                    <View style={{ marginLeft: wp('0%') }}>
                        <EnIcon style={styles.IconStyle} name={'keyboard-arrow-left'} size={35} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('searchRide')} />
                    </View>
                </View>
                <View style={styles.mainView}>
                    <Text style={styles.cooked}>Select your preferred {'\n'}category</Text>
                    <Text style={styles.atleast}>Select atleast 2 categories</Text>
                    {/* {
                        item.map((item, index) => {
                            return (
                                <TouchableOpacity style={[styles.mainViewCategory, { backgroundColor: check ? Color.primray: '#fff' }]}
                                    onPress={() => { this.setState({}) }}>
                                        <Text style={styles.categoryName}>{item.name}</Text>
                                        <Image source={item.image} style={styles.check} />
                                </TouchableOpacity>
                            )
                        })
                    } */}
                    <TouchableOpacity style={[styles.mainViewCategory, { backgroundColor: check ? Color.primray : '#fff',
                     borderColor: check ? Color.primray: Color.greyPrimray, }]}
                        onPress={() => {this.count()}}>
                        <Text style={styles.categoryName}>category Name</Text>
                        <Image source={require('./../image/mic.png')} style={styles.check} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.mainViewCategory, { backgroundColor: check1 ? Color.primray : '#fff',
                    borderColor: check1 ? Color.primray: Color.greyPrimray, }]}
                        onPress={() => {this.count1() }}>
                        <Text style={styles.categoryName}>category Name</Text>
                        <Image source={require('./../image/mic2.png')} style={styles.check} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.mainViewCategory, { backgroundColor: check2 ? Color.primray : '#fff',
                    borderColor: check2 ? Color.primray: Color.greyPrimray, }]}
                        onPress={() => {this.count2() }}>
                        <Text style={styles.categoryName}>category Name</Text>
                        <Image source={require('./../image/mic3.png')} style={styles.check} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.mainViewCategory, { backgroundColor: check3 ? Color.primray : '#fff' ,
                    borderColor: check3 ? Color.primray: Color.greyPrimray, }]}
                        onPress={() => {this.count3() }}>
                        <Text style={styles.categoryName}>category Name</Text>
                        <Image source={require('./../image/mic4.png')} style={styles.check} />
                    </TouchableOpacity>
                   {cont &&  <TouchableOpacity style={[styles.buttonOffer]}
                        onPress={() => { this.props.navigation.navigate('tab') }}>
                        <Text style={styles.buttonTextOffer}>CONTINUE</Text>
                    </TouchableOpacity>}
                </View>
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
    buttonOffer: {
        backgroundColor: Color.primray,
        borderRadius: 10,
        height: hp('10%'),
        marginTop: hp('5%'),
        justifyContent: 'center',
        
    },
    buttonTextOffer: {
        color: '#000',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    cooked: {
        color: Color.primray,
        fontWeight: '700',
        fontSize: 20,
        marginBottom: hp('1%'),
    },
    mainView: {
        marginHorizontal: wp('5%'),
    },
    mainViewCategory: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 2,
        height: hp('10%'),
        borderRadius: 20,
        marginBottom: hp('2%'),
    },
    atleast: {
        color: Color.greyPrimray,
        fontSize: 10,
        marginBottom: hp('8%'),

    },
    categoryName: {
        color: Color.test,
        alignSelf: 'center',
        marginLeft: wp('5%'),
    },
    check: {
        marginRight: wp('10%'),
        width: 30,
        height: 30
    }
});