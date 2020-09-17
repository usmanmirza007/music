import React, { Component } from 'react';
import { View, StatusBar,StyleSheet,Dimensions, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class mainScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                    <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#3AB54A', borderRadius: 5, height: 50, bottom: 10, width: '90%',}}
                        onPress={() => this.props.navigation.navigate('welcome')}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15,  }}>USER VIEW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center',  backgroundColor: '#A1A1A1', borderRadius: 5, height: 50,  width: '90%', }}
                        onPress={() => this.props.navigation.navigate('adminScreen')}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15,  }}>ADMIN VIEW</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

