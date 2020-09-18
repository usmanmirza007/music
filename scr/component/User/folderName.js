import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Modal, TextInput, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
import Option from 'react-native-vector-icons/SimpleLineIcons'
import Music from 'react-native-vector-icons/Ionicons'

export default class folderName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [
                { key: 1, folder: 'Audio', date: 'Date Created', option: 'options-vertical', music: 'musical-notes-outline' },
                { key: 2, folder: 'PDF', date: 'Date Created', option: 'options-vertical', music: 'ios-document-text-outline' },
                { key: 3, folder: 'Audio', date: 'Date Created', option: 'options-vertical', music: 'musical-notes-outline' },
                { key: 4, folder: 'PDF', date: 'Date Created', option: 'options-vertical', music: 'ios-document-text-outline' },
                { key: 5, folder: 'Audio', date: 'Date Created', option: 'options-vertical', music: 'musical-notes-outline' },
                { key: 6, folder: 'PDF', date: 'Date Created', option: 'options-vertical', music: 'ios-document-text-outline' },
                { key: 7, folder: 'Audio', date: 'Date Created', option: 'options-vertical', music: 'musical-notes-outline' },
                { key: 8, folder: 'PDF', date: 'Date Created', option: 'options-vertical', music: 'ios-document-text-outline' },
            ]
        };
    }
    renderRow = ({ item }) => {
        return (
            <View style={styles.mainViewFolder}>
                <View style={{ flexDirection: 'row' }}>
                    <Music style={{ marginTop: wp('1%'), }} name={item.music} size={24} color={Color.greyPrimray}
                        onPress={
                            () => this.props.navigation.navigate('#')} />
                    <View style={styles.folderView}>
                    <TouchableOpacity onPress={() => { item.folder === 'Audio'? this.props.navigation.navigate('playMusic'): this.props.navigation.navigate('pdf') }} style={styles.folder}><Text>{item.folder}</Text></TouchableOpacity>
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
                    <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        <IcIcon style={{ marginLeft: -10, marginTop: -5, }} name={'keyboard-arrow-left'} size={40} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('category')} />
                    </View>
                </View>
                <View style={styles.main}>
                    <Text style={styles.cooked}>Folder Name</Text>
                    <FlatList
                        // numColumns={2}
                        // contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", height: 300 }}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.item}
                        renderItem={this.renderRow}
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
        color: Color.primray,
        fontWeight: '700',
        fontSize: 15,
        marginBottom: hp('1%'),
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