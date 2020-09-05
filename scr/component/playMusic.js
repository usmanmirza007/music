import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Modal, TextInput, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../constant/color';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
import LineArrowRight from 'react-native-vector-icons/AntDesign'
import LineArrowLeft from 'react-native-vector-icons/AntDesign'
import Backward from 'react-native-vector-icons/AntDesign'
import Play from 'react-native-vector-icons/AntDesign'
import Farward from 'react-native-vector-icons/AntDesign'

export default class playMusic extends React.Component {
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
                            onPress={() => this.props.navigation.navigate('folderName')} />
                    </View>
                </View>
                <View style={styles.main}>
                    <Text style={styles.audio}>Audio Name</Text>
                    <Image source={require('./../image/download.png')} style={styles.circle} />
                    <Text style={styles.author}>Author</Text>
                    <Image source={require('./../image/line.png')} style={styles.line} resizeMode='stretch' />
                    <View style={styles.mainButton}>
                        <LineArrowLeft style={{ }} name={'stepbackward'} size={20} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        <Backward style={{ }} name={'banckward'} size={20} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        <View style={styles.playButton}>
                            <Play style={{  }} name={'caretright'} size={40} color={Color.white}
                                onPress={
                                    () => this.props.navigation.navigate('#')} />
                        </View>
                        <Farward style={{  }} name={'forward'} size={20} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        <LineArrowRight style={{ }} name={'stepforward'} size={20} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                    </View>
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
    audio: {
        color: Color.green,
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center'
    },
    author: {
        color: Color.black,
        marginVertical: hp('5%'),
        fontSize: 15,
        alignSelf: 'center'
    },
    playButton: {
        backgroundColor: '#626363',
        height: 60,
        width: 60,
        borderRadius: 60,
        borderColor: Color.green,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle:{ width: 150, height: 150, borderRadius: 150, alignSelf: 'center', marginTop: hp('5%'), },
    line:{ width: '90%', alignSelf: 'center', marginBottom: hp('3%'), },
    mainButton:{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginHorizontal: wp('10%'), }
});