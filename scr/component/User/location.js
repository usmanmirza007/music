import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import EnIcon from 'react-native-vector-icons/MaterialIcons'
import Color from './../../constant/color'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import TabIcon from 'react-native-vector-icons/MaterialIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'

export default class location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            images: [
                { image: require('./../../image/images1.png') },
                { image: require('./../../image/images1.png') },
                { image: require('./../../image/images1.png') },
                { image: require('./../../image/images1.png') }
            ],
        };
    }
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <TabIcon
                name={'my-location'}
                type='font-awesome'
                size={25}
                style={{ color: tintColor }}
                containerStyle={{ width: 10 }}
            />
        )
    }
    renderRow = ({ item }) => {
        return (
            <TouchableOpacity style={{ marginBottom: hp('5%'), }} onPress={() => { this.props.navigation.navigate('productDetail') }}>
                <Image source={item.image} style={{ width: 100, height: 100, marginRight: 10, borderRadius: 5 }} resizeMode='stretch' />
            </TouchableOpacity>
        )
    }
    render() {
        const { longitude, latitude } = this.state
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%'), }}>
                    <View style={{ flexDirection: 'row', marginLeft: wp('75%'), marginTop: hp('2%'), }}>
                        <AntIcon style={{}} name={'hearto'} size={24} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        <Image source={require('./../../image/cart.png')} style={{ width: 20, marginLeft: wp('4%'), }} />
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.main}>

                        <View style={styles.titleView}>
                            <Text style={styles.title}>Publishing House Name</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('publishHouse') }}>
                                <Text style={styles.seeMore}>SEE MORE</Text>
                            </TouchableOpacity>
                        </View>
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ height: hp('30%'), borderRadius: 5, }}
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}>
                            <MapView.Marker
                                coordinate={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                title={'My Marker'}
                                description={'My Marker description'}
                            />
                        </MapView>
                        <Text style={styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        <View style={styles.titleView}>
                            <Text style={styles.title}>Products</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.images}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <View style={styles.titleView}>
                            <Text style={styles.title}>Publishing House Name</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('publishHouse') }}>
                                <Text style={styles.seeMore}>SEE MORE</Text>
                            </TouchableOpacity>
                        </View>
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ height: hp('30%'), borderRadius: 5, }}
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}>
                            <MapView.Marker
                                coordinate={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                title={'My Marker'}
                                description={'My Marker description'}
                            />
                        </MapView>
                        <Text style={styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        <View style={styles.titleView}>
                            <Text style={styles.title}>Products</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.images}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
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
});