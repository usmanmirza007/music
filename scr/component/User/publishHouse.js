import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, ScrollView, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import AntIcon from 'react-native-vector-icons/AntDesign'
import IcIcon from 'react-native-vector-icons/MaterialIcons'

export default class publishHouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { image: require('./../../image/images1.png') },
                { image: require('./../../image/images1.png') },
                { image: require('./../../image/images1.png') },
                { image: require('./../../image/images1.png') }
            ],
            imagesMost: [
                { key: 1, image: require('./../../image/images2.png'),},
                { key: 2, image: require('./../../image/download.png'),},
                { key: 3, image: require('./../../image/download.png'),},
                { key: 4, image: require('./../../image/download.png'),},
                { key: 5, image: require('./../../image/download.png'),},
                { key: 6, image: require('./../../image/download.png'),},
                { key: 7, image: require('./../../image/download.png'),},
                { key: 8, image: require('./../../image/download.png'),},
            ]

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
                <View style={{ height: hp('9%'), }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        <View>
                            <IcIcon style={{ marginLeft: -10, marginTop: -5, }} name={'keyboard-arrow-left'} size={40} color="#000"
                                onPress={
                                    () => this.props.navigation.navigate('location')} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <AntIcon style={{}} name={'hearto'} size={24} color="#000"
                                onPress={
                                    () => this.props.navigation.navigate('#')} />
                            <Image source={require('./../../image/cart.png')} style={{ width: 20, marginLeft: wp('4%'), }} />
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.main}>
                        <View style={styles.titleView}>
                            <Text style={styles.title}>Publishing House Name</Text>
                        </View>
                        <Image source={require('./../../image/images1.png')} style={styles.imageFirst} resizeMode='stretch' />
                        <Text style={styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        <View style={styles.titleView}>
                            <Text style={styles.title}>Products</Text>
                        </View>
                        <FlatList
                        numColumns={2}
                        // contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", height: 300 }}
                        keyExtractor={(item, index) => item.key}
                        data={this.state.imagesMost} renderItem={({ item }) =>
                            <View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('productDetail') }}>
                                    <Image source={item.image} style={styles.listImage} resizeMode='stretch' />
                                </TouchableOpacity>
                            </View>

                        }
                    />
                    </View>

                </ScrollView>
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
    main: {
        marginHorizontal: wp('5%'),
    },
    title: {
        fontSize: 15,
        fontWeight: '700',

    },
    seeMore: {
        fontSize: 10,
        color: Color.greyPrimray,
        alignSelf: 'center'
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp('2%'),
    },
    text: {
        fontSize: 12,
        marginTop: hp('3%'),
    },
    imageFirst: { width: wp('90%'), height: 150, marginBottom: 5, borderRadius: 5 },
    listImage:{
        width: 138,
        height: 100,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5
    }
});