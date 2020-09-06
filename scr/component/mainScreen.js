import React, { Component } from 'react';
import { View, StatusBar,StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from './../constant/color';


export default class mainScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                    <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#3AB54A', borderRadius: 5, height: 50, bottom: 10, width: '90%', }}
                        onPress={() => this.props.navigation.navigate('selectCategory')}>
                        <View style={{ height: 20, width: 90, }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15,  }}>USER VIEW</Text>
                        </View>
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

