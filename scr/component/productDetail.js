import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, ScrollView, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../constant/color';
import AntIcon from 'react-native-vector-icons/AntDesign'
import IcIcon from 'react-native-vector-icons/MaterialIcons'
import Music from 'react-native-vector-icons/Ionicons'
import Down from 'react-native-vector-icons/Feather'
import Star from 'react-native-vector-icons/Entypo'
import Share from 'react-native-vector-icons/Entypo'
import Send from 'react-native-vector-icons/MaterialIcons'
import { SliderBox } from "react-native-image-slider-box";

export default class productDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { image: require('./../image/images1.png') },
                { image: require('./../image/images1.png') },
                { image: require('./../image/images1.png') },
                { image: require('./../image/images1.png') }
            ],
            ImagesState: [
                require('./../image/images1.png'),
                require('./../image/images2.png'),
                require('./../image/download.png'),
                require('./../image/images.png'),
                require('./../image/unnamed.png')
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
                                    () => this.props.navigation.navigate('#')} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <AntIcon style={{}} name={'hearto'} size={24} color="#000"
                                onPress={
                                    () => this.props.navigation.navigate('#')} />
                            <Image source={require('./../image/cart.png')} style={{ width: 20, marginLeft: wp('4%'), }} />
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <SliderBox
                        // ImageComponent={FastImage}
                        images={this.state.ImagesState}
                        sliderBoxHeight={150}
                        onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
                        dotColor="#fff"
                        inactiveDotColor="#90A4AE"
                        paginationBoxVerticalPadding={20}
                        autoplay
                        circleLoop
                        resizeMethod={'resize'}
                        resizeMode={'stretch'}
                        paginationBoxStyle={{
                            position: "absolute",
                            bottom: 0,
                            padding: 0,
                            alignItems: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                            paddingVertical: 10
                        }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 0,
                            padding: 0,
                            margin: 0,
                            backgroundColor: "rgba(128, 128, 128, 0.92)"
                        }}
                        ImageComponentStyle={{ borderRadius: 15, width: '90%', marginTop: 5 }}
                        imageLoadingColor="#2196F3"
                    />
                    <View style={{ marginHorizontal: wp('5%'), }}>
                        <View style={styles.nameView}>
                            <Text style={styles.name}>Product Name</Text>
                            <Text style={styles.price}>$253.212</Text>
                        </View>
                        <Text style={styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        <View style={styles.publishView}>
                            <Text style={styles.author}>Author</Text>
                            <Text style={styles.author}>Publishing House</Text>
                        </View>
                        <View style={styles.DoeView}>
                            <Text style={styles.john}>John Doe</Text>
                            <Text style={styles.john}>John Doe</Text>
                        </View>
                        <View style={styles.musicView}>
                            <Text style={styles.play}>Play Music</Text>
                            <Music style={{ marginRight: wp('5%'), }} name={'musical-notes-outline'} size={22} color={Color.orange}
                                onPress={() => this.props.navigation.navigate('#')} />
                        </View>
                        <Text style={styles.composer}>Composers</Text>
                        <View style={styles.DoeView}>
                            <Text style={styles.john}>Transcription</Text>
                            <Text style={styles.john}>John Doe</Text>
                        </View>
                        <View style={styles.DoeView}>
                            <Text style={styles.john}>Arrangement</Text>
                            <Text style={styles.john}>John Doe</Text>
                        </View>
                        <View style={styles.DoeView}>
                            <Text style={styles.john}>Instrumention</Text>
                            <Text style={styles.john}>John Doe</Text>
                        </View>
                        <View style={styles.detailView}>
                            <Text style={styles.detail}>More Details</Text>
                            <Down style={{}} name={'chevrons-down'} size={22} color={Color.greyPrimray}
                                onPress={() => this.props.navigation.navigate('#')} />
                        </View>
                        <View style={styles.DoeView}>
                            <Text style={styles.john}>Transcription</Text>
                            <Text style={styles.john}>John Doe</Text>
                        </View>
                        <View style={styles.DoeView}>
                            <Text style={styles.john}>Arrangement</Text>
                            <Text style={styles.john}>John Doe</Text>
                        </View>
                        <View style={styles.DoeView}>
                            <Text style={styles.john}>Instrumention</Text>
                            <Text style={styles.john}>John Doe</Text>
                        </View>
                        <View style={styles.titleView}>
                            <Text style={styles.title}>Suggested Products</Text>
                            <Text style={styles.seeMore}>SEE MORE</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.images}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <Text style={{ fontSize: 13, color: Color.greyPrimray, marginTop: hp('3%'), }}>Review</Text>
                        <View style={styles.box}>
                            <View style={styles.reviewView}>
                                <Text style={styles.performance}>Performance</Text>
                                <View style={styles.review}>
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.greyPrimray}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                </View>
                            </View>
                            <View style={styles.reviewView}>
                                <Text style={styles.result}>Result</Text>
                                <View style={styles.review}>
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                </View>
                            </View>
                            <View style={styles.innerBox}>
                                <View style={styles.reviewView}>
                                    <Text style={styles.result}>John Doe</Text>
                                    <View style={styles.review}>
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                    </View>

                                </View>
                                <Text style={{ marginLeft: wp('5%'), marginTop: hp('1%'), fontSize: 12 }}>Very Good Very Skilled</Text>
                            </View>
                            <View style={styles.innerBox1}>
                                <View style={styles.reviewView}>
                                    <Text style={styles.result}>John Doe</Text>
                                    <View style={styles.review}>
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                    </View>
                                </View>
                                <Text style={{ marginLeft: wp('5%'), marginTop: hp('1%'), fontSize: 12 }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                                <Down style={{ alignSelf: 'center', marginTop: hp('3%'), }} name={'chevrons-down'} size={22} color="#000"
                                    onPress={() => this.props.navigation.navigate('#')} />
                            </View>

                        </View>
                        <View style={styles.leaveView}>
                            <Text style={styles.leave}>Leave a review</Text>
                            <View style={styles.review}>
                                <Star style={{}} name={'star'} size={22} color={Color.star}
                                    onPress={() => this.props.navigation.navigate('#')} />
                                <Star style={{}} name={'star'} size={22} color={Color.star}
                                    onPress={() => this.props.navigation.navigate('#')} />
                                <Star style={{}} name={'star'} size={22} color={Color.star}
                                    onPress={() => this.props.navigation.navigate('#')} />
                                <Star style={{}} name={'star'} size={22} color={Color.star}
                                    onPress={() => this.props.navigation.navigate('#')} />
                                <Star style={{}} name={'star'} size={22} color={Color.star}
                                    onPress={() => this.props.navigation.navigate('#')} />
                            </View>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.input}
                                placeholder="Optional"
                                placeholderTextColor={Color.greyPrimray}
                                value={this.state.chooseDate}
                                onChangeText={chooseDate => this.setState({ chooseDate })} />
                            <TouchableOpacity style={styles.send}>
                                <Send style={{}} name={'send'} size={22} color={Color.white}
                                    onPress={() => this.props.navigation.navigate('#')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.invite}>
                            <Share style={{ marginRight: 10, }} name={'share'} size={22} color={Color.greyPrimray}
                                onPress={() => this.props.navigation.navigate('#')} />
                            <Text style={styles.leave}>Send Invitation to friend</Text>
                        </View>
                        <View style={styles.buttonview}>
                            <TouchableOpacity style={styles.cart}>
                                <Image source={require('./../image/cart.png')} style={{ tintColor: '#fff', alignSelf: 'center', width: 20, }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('shoppingCart') }} style={styles.buyView}>
                                <Text style={styles.buy}>BUT NOW</Text>
                            </TouchableOpacity>
                        </View>
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
    nameView: { marginVertical: hp('2%'), flexDirection: 'row', justifyContent: 'space-between', },
    name: {
        fontSize: 15,
        fontWeight: '700',
    },
    price: {
        fontSize: 15,
        color: Color.orange,
        //  marginLeft: wp('13%'),

    },
    text: {
        fontSize: 12
    },
    author: {
        color: Color.greyPrimray,
        fontSize: 12
    },
    john: {
        color: '#000',
        fontSize: 12
    },
    publishView: {
        marginTop: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    DoeView: {
        marginVertical: hp('0%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    musicView: {
        marginVertical: hp('2%'),
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E4FFAB',
        height: hp('7%')
    },
    play: {
        color: Color.orange,
        fontSize: 13,
        marginLeft: wp('5%'),
    },
    detail: {
        color: '#000',
        fontWeight: '700',
        fontSize: 13,
    },
    composer: {
        fontSize: 12,
        color: Color.greyPrimray,
        marginBottom: wp('1%'),
    },
    detailView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp('2%'),
    },
    reviewView: {
        flexDirection: 'row',
        marginLeft: wp('5%'),
        marginTop: hp('2%'),
    },
    invite: {
        flexDirection: 'row',
        marginLeft: wp('5%'),
        marginTop: hp('2%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    leaveView: {
        flexDirection: 'row',
        marginTop: hp('3%'),
        marginBottom: hp('3%'),
        justifyContent: 'space-between'
    },
    review: {
        flexDirection: 'row',
        marginLeft: wp('5%'),
    },
    performance: {
        color: Color.greyPrimray,
        fontSize: 12
    },
    result: {
        color: Color.greyPrimray,
        fontSize: 12,
        marginRight: wp('11%'),
    },
    leave: {
        color: Color.greyPrimray,
        fontSize: 12,
    },
    innerBox: {
        backgroundColor: Color.geryLight,
        height: hp('12%'),
        width: wp('80%'),
        borderRadius: 5,
        marginLeft: wp('5%'),
        marginTop: hp('1%'),
    },
    innerBox1: {
        backgroundColor: Color.geryLight,
        height: hp('18%'),
        width: wp('80%'),
        borderRadius: 5,
        marginLeft: wp('5%'),
        marginTop: hp('1%'),
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
    box: {
        borderColor: Color.greyPrimray,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginTop: hp('2%'),
        height: hp('55%'),

    },
    input: {
        paddingLeft: 10,
        backgroundColor: Color.geryLight,
        color: '#000',
        height: 35,
        width: 220,
        fontWeight: '500',
        borderRadius: 5,
        marginRight: wp('5%'),
    },
    send: {
        backgroundColor: '#67C7E0',
        width: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        flexDirection: 'row',

    },
    buyView: {
        backgroundColor: Color.green,
        height: 35,
        width: wp('75%'),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buy: {
        color: Color.white,

    },
    buttonview: {
        flexDirection: 'row',
        marginVertical: hp('5%'),

    },
    cart: {
        backgroundColor: '#000',
        width: 40,
        borderRadius: 5,
        marginRight: 5,
        justifyContent: 'center'
    }
});