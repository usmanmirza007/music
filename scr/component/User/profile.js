import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground,Alert, Modal, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity, DevSettings } from 'react-native';
import Color from './../../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import TabIcon from 'react-native-vector-icons/FontAwesome'

export default class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fname: '',
            lname: '',
            auth: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MTk3ZGIzYi00OTJhLTQ4YWYtYWQ1My02ZDk5ZDEzNmVhMTciLCJqdGkiOiJjN2MwNDliOWViOTVhNTg4NGMxYmM2ZGI0MjdlYzBjNjFhNWYzMmQ0ZmU1MjAzNGQwNDFmMzZjZDBlNDVjMzEwN2M4OWFjMzU4YWNkMTFmNCIsImlhdCI6MTYwMDg3NDY0MCwibmJmIjoxNjAwODc0NjQwLCJleHAiOjE2MzI0MTA2NDAsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.FY6Y8ewnbbq-cZ_4NIaaIX0xTRoHThPI9QgLqP1-VBEVsNWzqQ49xJvHQ_G9rAcUSICsJbdeap_KZS11HGMaJ9PYvlwGHkzn1CwG17aOZUj9846Ghrm5LQhWK4vl2P8t835urru2LXlJMraZKLx4hrsG1fTm86f_cqj8WuQPpVzWKaAoY34SxCRm0kOjf6gDH4VVRGobQqXTSgzZBCsYxqDp0kxoAGDYxpL5hYYCyEV3n67LGMU_tXIFz5rhqpV0oucHOrhEvzp1B45J3-ryrT6JhqztCrvRQmLYxXMWu3bSMkyi8wwLwyAn4OdTftHMyv1hPXTE_X3Ylr9xqTIsHGrL8XUtnfWK4CZzfkP5-67c26CFAv1GhAz9-77IIrQOysSx_rsx2vfAUvjkNC8qSQWHUs-B0Ge-olLPMjsNWHCsYwtvlGEZ7_nKhYFVAb_fTOLY7LuKFmmq5d-w7gMmE6FBOkf5RQd8JrlXUM0ZVOM0eBN7PKgOELS2ZQgGat003fyk50-PpjraF4a4LFcgvbQhMZehFds3B7ahBFdsz3iQke8jazVkO0Rp5EnRjRIJQZKxAhq3aPz731_W30mM9UrQ4IpOxeqWI0_SD4NMv5WLRLtvPV0nEi0Ni-JyEWZbdhDOob_zzHUq-ucgUXCE_dk9Kl6sUYQPQAzLLYSuSYo'
        };
    }

    componentDidMount(){
        this.profile()
          
        
    }
    // profile = async () =>{
    //     await fetch('http://eufonia.thesmartfreelancer.com/api/user')
    //     .then((response) => response.json())
    //     .then((responseJsonPosts) => {
    //         console.log(responseJsonPosts)
    //         // console.log(responseJsonPosts.code)
    //         this.setState({
    //             responseDataPosts: responseJsonPosts
    //         })
    //     })
    //     .catch((error) => {
    //         Alert.alert(error)
    //     })
    // }
    async profile(){
        const {auth} = this.state
        await fetch('http://eufonia.thesmartfreelancer.com/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                Authorization: auth,
            
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log('res',responseJson);
                // this.setState({
                //     fname: responseJson.first_name
                // })
                // if (responseJson === 200) {
                   
                // } 
                // else {
                //     alert('SOMETHING WENT WRONG !');
                //     return;
                // }
            })
            .catch((error) => {
                alert(error);
            });
    }
   
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <TabIcon
                name={'user'}
                type='font-awesome'
                size={25}
                style={{ color: tintColor }}
                containerStyle={{ width: 10 }}
            />
        )
    }
    render() {
        return (

            <View style={styles.signinContainer}>
                <View style={{ marginLeft: '1%', }}>
                    <IcIcon style={{}} name={'keyboard-arrow-left'} size={40} color="#000"
                        onPress={() => this.props.navigation.goBack()} />
                </View>
                <ScrollView>
                    <View style={styles.headingcontainer}>
                        <Text style={{ color: '#3AB54A', marginLeft: '5%', fontSize: 15, }}>Profile</Text>
                    </View>
                    <View style={styles.informationcontainer}>
                        <Text >First Name</Text>
                        <Text >John Doe</Text>
                    </View>
                    <View style={styles.informationcontainer}>
                        <Text>Last Name</Text>
                        <Text>john </Text>
                    </View>
                    <View style={styles.informationcontainer}>
                        <Text>Email Address</Text>
                        <Text>John Doe@mail.com</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    signinContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    informationcontainer: {
        marginLeft: 20,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginBottom: 10,

    },

})