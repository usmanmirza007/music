import React from 'react';
import { StyleSheet, Text, View,TextInput, Image, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EnIcon from 'react-native-vector-icons/MaterialIcons'
import Color from './../../constant/color';

export default class selectCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countCheck: {
                count1: 0,
                count2: 0,
                count3: 0,
                count4: 0,
            },
            selectedCount: 0,
            item: [
                { name: 'Category Name', image: require('./../../image/mic.png') },
                { name: 'Category Name', image: require('./../../image/mic2.png') },
                { name: 'Category Name', image: require('./../../image/mic3.png') },
                { name: 'Category Name', image: require('./../../image/mic4.png') },
            ]
        };
    }

    count1() {

        if (this.state.countCheck.count1 === 0) {
            this.setState({
                countCheck: {
                    count1: 1,
                    count2: this.state.countCheck.count2,
                    count3: this.state.countCheck.count3,
                    count4: this.state.countCheck.count4,

                },
                selectedCount: this.state.selectedCount + 1

            })
        }
        else {
            this.setState({
                countCheck: {
                    count1: 0,
                    count2: this.state.countCheck.count2,
                    count3: this.state.countCheck.count3,
                    count4: this.state.countCheck.count4,
                },
                selectedCount: this.state.selectedCount - 1
            })
        }
    }
    count2() {
        if (this.state.countCheck.count2 === 0) {
        console.log("count +", this.state.countCheck.count2);

            this.setState({
                countCheck: {
                    count1: this.state.countCheck.count1,
                    count2: 1,
                    count3: this.state.countCheck.count3,
                    count4: this.state.countCheck.count4,
                },
                selectedCount: this.state.selectedCount + 1
            })
        }
        else {
        console.log("count -", this.state.countCheck.count2);

            this.setState({
                countCheck: {
                    count1: this.state.countCheck.count1,
                    count2: 0,
                    count3: this.state.countCheck.count3,
                    count4: this.state.countCheck.count4,
                },
                selectedCount: this.state.selectedCount - 1
            })
        }
    }
    count3() {
        if (this.state.countCheck.count3 === 0) {
            this.setState({
                countCheck: {
                    count1: this.state.countCheck.count1,
                    count2: this.state.countCheck.count2,
                    count3: 1,
                    count4: this.state.countCheck.count4,
                },
                selectedCount: this.state.selectedCount + 1
            })
        }
        else {
            this.setState({
                countCheck: {
                    count1: this.state.countCheck.count1,
                    count2: this.state.countCheck.count2,
                    count3: 0,
                    count4: this.state.countCheck.count4,
                },
                selectedCount: this.state.selectedCount - 1
            })
        }
    }
    count4() {
        if (this.state.countCheck.count4 === 0) {
            this.setState({
                countCheck: {
                    count1: this.state.countCheck.count1,
                    count2: this.state.countCheck.count2,
                    count3: this.state.countCheck.count3,
                    count4: 1,
                },
                selectedCount: this.state.selectedCount + 1
            })
        }
        else {
            this.setState({
                countCheck: {
                    count1: this.state.countCheck.count1,
                    count2: this.state.countCheck.count2,
                    count3: this.state.countCheck.count3,
                    count4: 0,
                },
                selectedCount: this.state.selectedCount - 1
            })
        }
    }

    render() {
        const { item, countCheck } = this.state
        console.log('*******************************************');
        console.log(this.state);
        console.log('********************************************');
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%'), justifyContent: 'center' }}>
                    <View style={{ marginLeft: wp('0%') }}>
                        <EnIcon style={styles.IconStyle} name={'keyboard-arrow-left'} size={35} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('mainScreen')} />
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
                    <TouchableOpacity style={[styles.mainViewCategory, {
                        backgroundColor: countCheck.count1 === 1 ? Color.primray : '#fff',
                        borderColor: countCheck.count1 === 1 ? Color.primray : Color.greyPrimray,
                    }]}
                        onPress={() => { this.count1() }}>
                        <Text style={styles.categoryName}>category Name</Text>
                        <Image source={require('./../../image/mic.png')} style={styles.check} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.mainViewCategory, {
                        backgroundColor: countCheck.count2 === 1 ? Color.primray : '#fff',
                        borderColor: countCheck.count2 === 1 ? Color.primray : Color.greyPrimray,
                    }]}
                        onPress={() => { this.count2() }}>
                        <Text style={styles.categoryName}>category Name</Text>
                        <Image source={require('./../../image/mic2.png')} style={styles.check} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.mainViewCategory, {
                        backgroundColor: countCheck.count3 === 1 ? Color.primray : '#fff',
                        borderColor: countCheck.count3 === 1 ? Color.primray : Color.greyPrimray,
                    }]}
                        onPress={() => { this.count3() }}>
                        <Text style={styles.categoryName}>category Name</Text>
                        <Image source={require('./../../image/mic3.png')} style={styles.check} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.mainViewCategory, {
                        backgroundColor: countCheck.count4 === 1 ? Color.primray : '#fff',
                        borderColor: countCheck.count4 === 1 ? Color.primray : Color.greyPrimray,
                    }]}
                        onPress={() => { this.count4() }}>
                        <Text style={styles.categoryName}>category Name</Text>
                        <Image source={require('./../../image/mic4.png')} style={styles.check} />
                    </TouchableOpacity>
                    {this.state.selectedCount >= 2  && <TouchableOpacity style={[styles.buttonOffer]}
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