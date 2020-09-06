import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity, Alert, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import Geolocation from "@react-native-community/geolocation"
// import Geolocation from 'react-native-geolocation-service';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { connect } from 'react-redux';
// import { location, addFood} from '../redux/action/actionSetData'

class map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            lan: 0,
            error: null,
            initialPosition: {},
            enabled: true,
            description: '',
            showContinue: false
        };
    }
    // componentDidMount() {
    //     // this.location()
    //     // this.loc()
    //     // if (hasLocationPermission) {
    //         Geolocation.getCurrentPosition(
    //             (position) => {
    //               console.log("poi",position);
    //             },
    //             (error) => {
    //               // See error code charts below.
    //               console.log(error.code, error.message);
    //             },
    //             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    //         );
    //     //   }
    // }

    // loc() {
    //     Geolocation.getCurrentPosition(
    //         position => {
    //             const initialPosition = JSON.stringify(position);
    //             console.log("poc", initialPosition);
    //             let region = {
    //                 latitude: position.coords.latitude,
    //                 longitude: position.coords.longitude,
    //                 latitudeDelta: 0.0922,
    //                 longitudeDelta: 0.0421,
    //             }
    //             this.setState({ initialPosition: region });
    //             console.log("lat " + position.coords.latitude + " longi " + position.coords.longitude)
    //             console.log("initialPosition")
    //             console.log("init", this.state.initialPosition)
    //         },
    //         error => console.log("Error " + JSON.stringify(error)),
    //         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    //     );
    //     this.watchID = Geolocation.watchPosition(position => {
    //         const lastPosition = JSON.stringify(position);
    //         this.setState({ lastPosition });
    //     });
    // }

    // async location() {
    //     // await Geolocation.getCurrentPosition(info => {
    //     //     console.log("info", info);
    //     //     console.log("loction", info.coords.latitude, info.coords.longitude)
    //     // });
    //     await Geolocation.getCurrentPosition(
    //         position => {
    //             console.log(position);
    //             this.setState({
    //                 latitude: position.coords.latitude,
    //                 longitude: position.coords.longitude,
    //             });
    //             console.log("lat " + position.coords.latitude + " longi " + position.coords.longitude)
    //             console.log("lata jadja", this.state.latitude, this.state.longitude);
    //         },
    //         error => console.log(error.message),
    //         { enableHighAccuracy: true, timeout: 40000, maximumAge: 0 }
    //     );
    // }
    render() {
        const { longitude, latitude , enabled, description} = this.state
        return (

            <View>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ height: hp('50%'), }}
                    region={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                    <MapView.Marker
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        title={'My Marker'}
                        description={'My Marker description'}
                    />
                </MapView>
                {this.state.showContinue && <TouchableOpacity onPress={() => {this.props.navigation.navigate('date_time')}}
                style={styles.continue}>
                    <Text style={styles.text}>Continue</Text>
                </TouchableOpacity>}
            </View>

        );
    }
}

export default map
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});