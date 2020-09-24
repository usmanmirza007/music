import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import EnIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import IcIcon from 'react-native-vector-icons/Ionicons'
import FeaIcon from 'react-native-vector-icons/Feather'
import Color from './../../constant/color';
export default class search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chooseDate: '',
            imagesMost: [
                { key: 1, image: require('./../../image/images2.png'), name: 'Product name', price: '$365.12' },
                { key: 3, image: require('./../../image/download.png'), name: 'Product name', price: '$365.12' },
                { key: 2, image: require('./../../image/download.png'), name: 'Product name', price: '$365.12256' },
                { key: 4, image: require('./../../image/download.png'), name: 'Product name', price: '$365.12' },
                { key: 5, image: require('./../../image/download.png'), name: 'Product name', price: '$365.12' },
                { key: 6, image: require('./../../image/download.png'), name: 'Product name', price: '$365.12' },
                { key: 7, image: require('./../../image/download.png'), name: 'Product name', price: '$365.12' },
                { key: 8, image: require('./../../image/download.png'), name: 'Product name', price: '$365.12' },
            ]

        };
    }

    render() {
        // this is here render
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%'),alignItems: 'flex-end', marginRight: '5%', }}>
                    <View style={{ flexDirection: 'row', marginTop: hp('2%'), }}>
                        <IcIcon style={{ marginRight: wp('4%'), }} name={'md-options-outline'} size={24} color="#000"
                            //  onPress={()=>{this.props.navigation.openDrawer()}} 
                             />
                        <AntIcon style={{}} name={'hearto'} size={24} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        <Image source={require('./../../image/cart.png')} style={{ width: 20, marginLeft: wp('4%'), }} />
                    </View>
                </View>
                <View style={styles.mainView}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Search Results"
                            placeholderTextColor={Color.greyPrimray}
                            value={this.state.chooseDate}
                            onChangeText={chooseDate => this.setState({ chooseDate })} />
                        <View style={{justifyContent: 'center'}}>
                        <FeaIcon style={{marginRight: 20, }} name={'search'} size={24} color={Color.greyPrimray}
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        </View>
                    </View>
                    <FlatList
                        numColumns={2}
                        // contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", height: 300 }}
                        keyExtractor={(item, index) => item.key+""}
                        data={this.state.imagesMost} 
                        renderItem={({ item }) =>
                            <View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('productDetail') }}>
                                    <Image source={item.image} style={styles.imageFirst} resizeMode='stretch' />
                                </TouchableOpacity>
                                <View style={{ marginBottom: hp('3%'), flexDirection: 'row', justifyContent: 'space-between', width: 135 }}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>
                            </View>

                        }
                    />
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
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor: Color.greyAccent,
        marginBottom: hp('3%'),
    },
    input: {
        paddingLeft: 10,
        color: '#000',
        height: 35,
        fontWeight: '500',
    },
    mainView: {
        marginHorizontal: wp('5%'),
        marginBottom: hp('18%'),
    },
    imageFirst: {
        width: 138,
        height: 100,
        marginRight: 10,
        marginBottom: 2,
        borderRadius: 5
    },
    name: {
        fontSize: 10,
    },
    price: {
        fontSize: 10,
        color: Color.orange,
        //  marginLeft: wp('13%'),

    }

});