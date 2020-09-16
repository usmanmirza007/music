import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class facebookLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fName: '',
            lName: '',
            email: '',
            pictureURL: null,
            pictureURLByID: null
        }
    }

    initUser = (token) => {
        fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,picture.type(large),friends&access_token=' + token)
            .then((response) => {
                response.json().then((json) => {
                    const ID = json.picture
                    console.log("ID " + ID);
                    const EM = json.email
                    const FN = json.first_name
                    const LN = json.last_name
                    console.log("First Name " + FN, LN);
                    this.setState({
                        fName: FN,
                        lName: LN,
                        email: EM
                    })
                })
            })
            .catch(() => {
                console.log('ERROR GETTING DATA FROM FACEBOOK')
            })
    }
    render() {
        const { pictureURL, pictureURLByID, fName, lName, email } = this.state
        return (
            <View style={{ alignItems: 'center' }}>
                <LoginButton
                    publishPermissions={['publish_actions']}
                    readPermissions={['public_profile']}
                    onLoginFinished={
                        (error, result) => {
                            console.log("login", result.id);
                            this.setState({
                                pictureURLByID: `https://graph.facebook.com/${result.id}/picture.type(large)`,

                            })
                            console.log("image", pictureURL, pictureURLByID);
                            if (error) {
                                console.log("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        console.log("DATA", data.accessToken.toString())
                                        const { accessToken } = data
                                        this.initUser(accessToken)
                                        this.setState({
                                            pictureURL: result.picture.data.url,
                                        })
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => console.log("logout.")} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 0, }}>{fName}</Text>
                    <Text style={{ marginLeft: 5, }}>{lName}</Text>
                </View>
                <Text style={{ marginLeft: 0, }}>{email}</Text>
                {pictureURL && (
                    <Image style={styles.image} source={{ uri: pictureURL }} />
                )}
                {pictureURLByID && (
                    <Image style={styles.image} source={{ uri: pictureURLByID }} />
                )}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
});