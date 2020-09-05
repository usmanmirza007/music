import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, TouchableOpacity, Picker, ImageBackground, View, Image } from 'react-native';
// import { width, height, totalSize } from 'react-native-dimension';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
// import { Icon } from 'react-native-elements'
// import { AntDesign, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';

export default class SideMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: ''
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>
        <ImageBackground source={require('./../image/images.png')} style={{ width: '100%', height: '55%' }} resizeMode='stretch'>
          <View style={{ flexDirection: 'column', height: 30, }}>
            <View style={{ marginLeft: '10%', marginTop: '15%' }}>
              <Image source={require('./../image/images.png')} style={{ width: 20, height: 20, }}></Image>
              <Text style={{ fontSize: 13, marginTop: 20, color: '#000', fontWeight: 'bold' }}>Russel Crowe</Text>
            </View>
          </View>
        </ImageBackground>
        <ScrollView style={{ backgroundColor: '#fff', marginTop: '-50%' }}>
          {/* <View style={{ marginLeft: 15, marginTop: 10 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }} style={{ marginLeft: 5, flexDirection: 'row', marginVertical: height(2), }}>
              <AntDesign
                name='home'
                type='font-awesome'
                color='#26ae61'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, }}>
                <Text style={{ color: 'black', fontSize: 13 }}>HOME</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('myProfile') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <AntDesign
                name='user'
                type='font-awesome'
                color='#26ae61'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13 }}>My Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 18 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ads') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <Entypo
                name='news'
                type='font-awesome'
                color='#26ae61'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13 }}>Ads</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 18 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('#') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <FontAwesome
                name='newspaper-o'
                type='font-awesome'
                color='#26ae61'
                size={22}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ borderWidth: 1, borderColor: '#fff', width: 230, marginTop: -5, marginLeft: 10 }}>
              <Picker style={{ height: 30, padding: 0, color: '#000' }}
                selectedValue={this.state.type}
                mode = {'dropdown'}
                onValueChange={(itemValue) =>
                  this.setState({ type: itemValue })}>
                <Picker.Item label="category1" value="category1" />
                <Picker.Item label="category2" value="category2" />
                <Picker.Item label="category3" value="category3" />
                <Picker.Item label="category4" value="category4" />
              </Picker>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('adsMember') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <FontAwesome
                name='users'
                type='font-awesome'
                color='#26ae61'
                size={20}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13 }}>Ads Member</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('#') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <FontAwesome
                name='user-circle-o'
                type='font-awesome'
                color='#26ae61'
                size={20}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13 }}>Member Detail</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('about') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <AntDesign
                name='infocirlce'
                type='font-awesome'
                color='#26ae61'
                size={20}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13 }}>About Classity</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('contact_Us') }} style={{ marginBottom: 50, flexDirection: 'row', marginVertical: height(2), }}>
              <Entypo
                name='mail'
                type='font-awesome'
                color='#26ae61'
                size={20}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13 }}>Contact</Text>
              </View>
            </TouchableOpacity>
            <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 2, marginBottom: 20, marginLeft: -20 }}></View>
          </View> */}
        </ScrollView>

      </View>
    );
  }
}


