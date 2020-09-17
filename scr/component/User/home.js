import React from 'react';
import { StyleSheet, Text, View, Image,Dimensions, ScrollView, FlatList, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import EnIcon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Color from './../../constant/color';
import TabIcon from 'react-native-vector-icons/FontAwesome'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { image: require('./../../image/images1.png') },
                { image: require('./../../image/images1.png') },
                { image: require('./../../image/images1.png') },
                { image: require('./../../image/images1.png') }
            ],
            imagesTop: [
                { imageTo: require('./../../image/images2.png') },
                { image: require('./../../image/download.png') },
                { image: require('./../../image/download.png') },
                { image: require('./../../image/download.png') },
                { image: require('./../../image/download.png') }
            ],
            imagesMost: [
                { image: require('./../../image/images2.png') },
                { image: require('./../../image/images2.png') },
                { image: require('./../../image/images2.png') },
                { image: require('./../../image/images2.png') },
                { image: require('./../../image/images2.png') },
                { image: require('./../../image/images2.png') },
                { image: require('./../../image/images2.png') },
                { image: require('./../../image/images2.png') },
                { image: require('./../../image/images2.png') },
            ],
           name: this.props.navigation.getParam('NAME'),
           image: this.props.navigation.getParam('IMAGE'),
        };
        console.log( "NAME", this.state.name);
    }
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <TabIcon
                name={'home'}
                type='font-awesome'
                size={25}
                style={{ color: tintColor }}
                containerStyle={{ width: 10 }}
            />
        )
    }

    renderRow = ({ item }) => {
        return (
            <View>
                {/* <Image source={item.image1} style={{ width: 50, height: 50, marginRight: 10, borderRadius: 5 }} resizeMode='stretch' /> */}
                <Image source={item.image} style={{ width: 100, height: 100, marginRight: 10, borderRadius: 5 }} resizeMode='stretch' />
            </View>
        )
    }
    renderRowImage = ({ item }) => {
        return (
            <View>
                <View style={{}}>
                    <Image source={item.image} style={{ width: 100, height: 100, borderRadius: 5 }} resizeMode='stretch' />
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%'),  alignItems: 'flex-end',}}>
                    <View style={{ flexDirection: 'row', marginTop: hp('2%'), }}>
                        <AntIcon style={{}} name={'hearto'} size={24} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        <Image source={require('./../../image/cart.png')} style={{ width: 20, marginHorizontal: wp('4%'), }} />
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.mainView}>
                        <View style={styles.titleView}>
                            <Text style={styles.title}>Clarinet</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('search') }}>
                                <Text style={styles.seeMore}>SEE MORE</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.images}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <View style={styles.titleView}>
                            <Text style={styles.title}>Guitar</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('search') }}>
                                <Text style={styles.seeMore}>SEE MORE</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.images}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => console.log("index",index.toString())}
                        />
                        <View style={styles.titleView}>
                            <Text style={styles.title}>Top Rated</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('search') }}>
                                <Text style={styles.seeMore}>SEE MORE</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 200 }}>
                            <ScrollView >
                                <Image source={require('./../../image/images2.png')} style={styles.imageTop} resizeMode='stretch' />
                                <View style={styles.imageView}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Image source={require('./../../image/images2.png')} style={styles.demo} resizeMode='stretch' />
                                        <Image source={require('./../../image/images2.png')} style={styles.demo} resizeMode='stretch' />
                                    </View>
                                    <View style={{flexDirection: 'row',}}>
                                        <Image source={require('./../../image/images2.png')} style={styles.demo} resizeMode='stretch' />
                                        <Image source={require('./../../image/images2.png')} style={styles.demo} resizeMode='stretch' />
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.titleView}>
                            <Text style={styles.title}>New Products</Text>
                            <Text style={styles.seeMore}>SEE MORE</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.images}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <View style={styles.titleView}>
                            <Text style={styles.title}>Most Selling Products</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('search') }}>
                                <Text style={styles.seeMore}>SEE MORE</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.imagesMost}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <View style={styles.titleView}>
                            <Text style={styles.title}>Most Selling Products</Text>
                            <Text style={styles.seeMore}>SEE MORE</Text>
                        </View>
                        <FlatList
                            numColumns={2}
                            // contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", height: 300 }}
                            data={this.state.imagesMost} renderItem={({ item }) =>
                                <Image source={item.image} style={styles.imageFirst} resizeMode='stretch' />
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
    title: {
        fontSize: 18,
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
    mainView: {
        marginHorizontal: wp('5%'),
    },
    imageFirst: { width: 145, height: 100, marginRight: 10, marginBottom: 10, borderRadius: 5 },
    demo: {width: windowWidth - 200, height: 100, marginRight: 10, marginBottom: 10, borderRadius: 5 },
    // imageSecond: { width: 138, height: 100, marginRight: 10, marginRight: 10, borderRadius: 5 },
    imageTop: { width: '100%', height: 150,marginBottom: 10, marginRight: 10, borderRadius: 5 },
    // imageView: { flexDirection: 'row', flexWrap: 'nowrap', marginTop: 10, }
});