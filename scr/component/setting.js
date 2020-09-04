import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import EnIcon from 'react-native-vector-icons/Ionicons'
import Color from './../constant/color';
import TabIcon from 'react-native-vector-icons/Ionicons'

export default class setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <TabIcon
                name={'settings-sharp'}
                type='font-awesome'
                size={25}
                style={{ color: tintColor }}
                containerStyle={{ width: 10 }}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%'), justifyContent: 'center' }}>
                    <View style={{ marginLeft: wp('0%') }}>
                        {/* <EnIcon style={styles.IconStyle} name={'keyboard-arrow-left'} size={35} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('#')} /> */}
                    </View>
                    <Text>setting</Text>
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