import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EnIcon from 'react-native-vector-icons/MaterialIcons'
import Color from './../constant/color';

export default class selectCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%'), justifyContent: 'center' }}>
                    <View style={{ marginLeft: wp('0%') }}>
                        <EnIcon style={styles.IconStyle} name={'keyboard-arrow-left'} size={35} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                    </View>
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
});