import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Modal, TextInput, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import Folder from 'react-native-vector-icons/FontAwesome'
import Option from 'react-native-vector-icons/SimpleLineIcons'
import IcIcon from 'react-native-vector-icons/MaterialIcons'

export default class shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMe: false,
            item: [
                { key: 1, folder: 'Folder Name', date: 'Date Created', option: 'options-vertical', folderIcon: 'user' },
                { key: 2, folder: 'Folder Name', date: 'Date Created', option: 'options-vertical', folderIcon: 'user' },
                { key: 3, folder: 'Folder Name', date: 'Date Created', option: 'options-vertical', folderIcon: 'user' },
                { key: 4, folder: 'Folder Name', date: 'Date Created', option: 'options-vertical', folderIcon: 'user' },
                { key: 5, folder: 'Folder Name', date: 'Date Created', option: 'options-vertical', folderIcon: 'user' },
                { key: 6, folder: 'Folder Name', date: 'Date Created', option: 'options-vertical', folderIcon: 'user' },
                { key: 7, folder: 'Folder Name', date: 'Date Created', option: 'options-vertical', folderIcon: 'user' },
                { key: 8, folder: 'Folder Name', date: 'Date Created', option: 'options-vertical', folderIcon: 'user' },
            ]
        };
    }
    renderRow = ({ item }) => {
        return (
            <View style={styles.mainViewFolder}>
                <View style={{ flexDirection: 'row' }}>
                    <Folder style={{ marginTop: wp('1%'), }} name={item.folderIcon} size={24} color={Color.greyPrimray}
                        onPress={
                            () => this.props.navigation.navigate('#')} />
                    <View style={styles.folderView}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('#') }} style={styles.folder}><Text>{item.folder}</Text></TouchableOpacity>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => { }}
                    style={styles.buttonText}>
                    <Option style={{ marginLeft: wp('0%'), }} name={item.option} size={24} color="#000" />
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%'), }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        <View style={{ flexDirection: 'row' }}>
                            <IcIcon style={{ marginLeft: -10, }} name={'keyboard-arrow-left'} size={40} color="#000"
                                onPress={
                                    () => this.props.navigation.navigate('adminScreen')} />
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('addShop') }} style={styles.buyView}>
                            <Text style={styles.buy}>ADD NEW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.main}>
                    <Text style={styles.cooked}>Shops</Text>
                    <FlatList
                        // numColumns={2}
                        // contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", height: 300 }}
                        keyExtractor={(item, index) => item.key + ""}
                        data={this.state.item}
                        renderItem={this.renderRow} />
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
        borderRadius: 5,
        backgroundColor: Color.greyAccent,
        marginBottom: hp('3%'),
    },
    input: {
        alignSelf: 'center',
        paddingLeft: 10,
        color: '#000',
        height: 35,
        width: 250,
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

    },
    buyView: {
        backgroundColor: Color.green,
        height: 35,
        width: wp('30%'),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buy: {
        color: Color.white,

    },
    main: {
        marginHorizontal: wp('5%'),
    },
    cooked: {
        color: Color.black,
        fontWeight: '700',
        fontSize: 15,
        marginBottom: hp('2%'),
    },
    folderView: {
        marginLeft: wp('5%'),
    },
    folder: {
        fontSize: 13
    },
    date: {
        fontSize: 10
    },
    mainViewFolder: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: hp('2%'), },
    border: {
        borderBottomColor: Color.greyPrimray,
        borderBottomWidth: 2,
        // marginVertical: hp('2%'),
        width: wp('30%')
    },
});