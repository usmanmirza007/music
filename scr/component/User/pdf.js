import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Modal, TextInput, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import IcIcon from 'react-native-vector-icons/MaterialIcons'

export default class pdf extends React.Component {
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
                            onPress={
                                () => this.props.navigation.navigate('category')} />
                    </View>
                </View>
                <View style={styles.main}>
                   <Text style={{alignSelf: 'center', color: Color.green, fontSize: 15, fontWeight: '700'}} >PDF</Text>
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
});