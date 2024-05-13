import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View, PermissionsAndroid, Alert, Modal, Button, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'

import MapView, { Marker } from 'react-native-maps';
// import Geocoder from 'react-native-geocoding';
import { SelectList } from 'react-native-dropdown-select-list';

import CustomeButton from '../atoms/CustomeButton';

import GetLocation from 'react-native-get-location'


import * as saveAddressAction from '../../../utiles/localStorage/store/actions/Auth'
import { useDispatch } from 'react-redux';

// import Geocoder from 'react-native-geocoder';






const Address = () => {

    const dispatch = useDispatch();


    const onRefresh = () => {
        // setRefreshing(true);
    };

    const [refreshing, setRefreshing] = useState(false);
    const [type, setType] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pinCode, setPincode] = useState('');

    const [selcted, setSelected] = useState("")
    const [locationPermissionDenied, setLocationPermissionDenied] = useState(false);
    const [markerCoordinate, setMarkerCoordinate] = useState({
        latitude: 20.5937,
        longitude: 78.9629,
    });

    const [modalVisible, setModalVisible] = useState(false);

    // Geocoder.init("https://api.geoapify.com/v1/geocode/reverse?lat=52.478117501285965&lon=13.47717282413089&type=postcode&apiKey=AIzaSyAleLUO1PcueKmiAECfTHFXfrDj7ILF7EU"); 

    const ADDRESSTYPE = [
        { key: 'Home', value: '🏠 Home' },
        { key: 'Office', value: '🏢 Office' },
        { key: 'Others', value: '🏪 Others' },
        // { key: '4', value: 'School', disabled: true },
        // { key: '5', value: 'College' },

    ]

    const CITY = [
        { key: 'Surat', value: 'Surat' },
        { key: 'Ahmdabad', value: 'Ahmdabad' },
        { key: 'Rajkot', value: 'Rajkot' },
    ]

    const STATE = [
        { key: 'Gujarat', value: 'Gujarat' },
        { key: 'Panjab', value: 'Panjab' },
        { key: 'Maharastra', value: 'Maharastra' },
    ]

    const COUNTRY = [
        { key: 'India', value: 'India' },
        { key: 'Canada', value: 'Canada' },
        { key: 'Russia', value: 'Russia' },
    ]

    const [mapRegion, setMapRegion] = useState({
        latitude: 20.5937,
        longitude: 78.9629,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    const confirmLocation = () => {
        setMapRegion({
            ...mapRegion,
            latitude: markerCoordinate.latitude,
            longitude: markerCoordinate.longitude,
        });
        setModalVisible(false);
    };

    const userLocation = async () => {

        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission',
                    message: 'This app needs access to your location.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                GetLocation.getCurrentPosition({
                    enableHighAccuracy: true,
                    timeout: 60000,
                })
                    .then(location => {
                        console.log("location is :::", location);

                        console.log(location.latitude)
                        console.log(location.longitude)

                        var geocoderlatAndlog = {
                            lat: location.latitude,
                            lng: location.longitude
                        }


                        // Set the mapRegion state using the obtained location
                        setMapRegion(prevRegion => ({
                            ...prevRegion,
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }));


                        //4
                        // console.log(geocoderlatAndlog)


                        // Geocoder.geocodePosition(geocoderlatAndlog)
                        // .then(res => {
                        //     // Check if the result is not null
                        //     if (res && res.length > 0) {
                        //         const formattedAddress = res[0].formattedAddress;
                        //         const feature = res[0].feature || null;
                        //         const streetNumber = res[0].streetNumber || null;
                        //         const streetName = res[0].streetName || null;
                        //         const postalCode = res[0].postalCode || null;
                        //         const locality = res[0].locality || null;
                        //         const country = res[0].country;
                        //         const countryCode = res[0].countryCode;
                        //         const adminArea = res[0].adminArea || null;
                        //         const subAdminArea = res[0].subAdminArea || null;
                        //         const subLocality = res[0].subLocality || null;

                        //         const geocodedData = {
                        //             position: {
                        //                 lat: location.latitude,
                        //                 lng: location.longitude
                        //             },
                        //             formattedAddress,
                        //             feature,
                        //             streetNumber,
                        //             streetName,
                        //             postalCode,
                        //             locality,
                        //             country,
                        //             countryCode,
                        //             adminArea,
                        //             subAdminArea,
                        //             subLocality
                        //         };

                        //         console.log("Geocoding result:", geocodedData);
                        //     } else {
                        //         console.log("No address found");
                        //     }
                        // })
                        // .catch(err => console.log("Geocoding error:", err));


                        //1
                        // try{
                        //     fetch('https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${latitude}%2C${longitude}%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=AIzaSyAleLUO1PcueKmiAECfTHFXfrDj7ILF7EU').then(response => response.json())
                        //     .then(result => {
                        //       if (result.features.length) {
                        //         console.log("=====>",result.features[0].properties.formatted[0]);
                        //       } else {
                        //         console.log("No address found");
                        //       }
                        //     });

                        // }catch(err)
                        // {
                        //     Alert.alert("You have an issue in geocodding api fetching...")
                        // }

                        //2

                        // Geocoder.from(location.latitude, location.longitude)


                        // .then(json => {

                        //     console.log(json);


                        //     var addressComponent = json.results[0].address_components[0];

                        //     console.log(addressComponent);

                        // })
                        // .catch(error => console.warn(error));



                        // getAddress(latitude, longitude)

                        //3.

                        // Geocoder.init("https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=AIzaSyAleLUO1PcueKmiAECfTHFXfrDj7ILF7EU"); // use a valid API key


                        // With more options


                        // Geocoder.init(“xxxxxxxxxxxxxxxxxxx”, {language : “en”}); // set the language


                        //And use also this code for Geocoding and reverse Geocoding:

                        // Geocoder.from(location.latitude, location.longitude)

                        //     .then(json => {

                        //         var addressComponent = json.results[0].address_components[0];

                        //         console.log(addressComponent);

                        //     })

                        //     .catch(error =>

                        //         console.warn(error)

                        //     );


                    })
                    .catch(error => {
                        console.warn('Error getting location: ', error.message);
                        console.log(error.message)

                        if (error.message === 'Location not available') {
                            // Location not available, handle accordingly
                            Alert.alert(
                                'Location Permission',
                                'Please grant location permission to use this featureee.',
                                [
                                    {
                                        text: 'OK',
                                        onPress: () => {
                                            // Request location permission again
                                            return
                                        },
                                    },
                                ],
                            );

                        }
                    });
            } else {
                console.log('Location permission denied');
                // Handle denied permission
                setLocationPermissionDenied(true);

            }
        } catch (err) {
            console.warn('Error requesting location permission: ', err);
            // Handle errors
        }
    };

    useEffect(() => {
        userLocation()
    }, [])

    const handleMarkerDrag = (e) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        setMarkerCoordinate({ latitude, longitude });
    };

    const handleLongPress = (event) => {
        console.log(event)
        setMarkerCoordinate(event.nativeEvent.coordinate);
        setModalVisible(true);
    };

    // const getAddress = async (lat, lag) => {
    //     Geocoder.fallbackToGoogle("https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=41.8842%2C-87.6388%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=mBN-cdOLveHULlFk0QXVX3aIfPyqQuKl41V6hUbqKMA")
    //     try {

    //     } catch (err) { Alert.alert("response not found") }
    //     let res = await Geocoder.geocodePosition({ lat, lag })
    //     let add = res[0].formattedAddress

    //     console.log(add)
    // }

    const saveAddressHandler = () => {

        dispatch(saveAddressAction.saveAddress(type, address, city, state, country, pinCode)).then((res) => {
            console.log("resdata of save location", res)
        })
        .catch(error => console.log('Error fetching saveAddressAction:', error))
            .finally(() => setRefreshing(false));
    }




    return (
        <View style={styles.screen}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Account details</Text>
            </View>


            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            } >
                <View style={styles.container}>

                    <Text style={styles.title}> Shipping Address</Text>

                    <View style={styles.mapContainer}>
                        <MapView style={styles.map}
                            region={mapRegion}
                            onLongPress={handleLongPress}
                            // onPress={getAddress}
                            loadingEnabled={true}>

                            <Marker coordinate={mapRegion} title='Marker' draggable onDragEnd={handleMarkerDrag} />
                        </MapView>
                        <Text>{markerCoordinate.latitude + " and " + markerCoordinate.longitude}</Text>
                    </View>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}

                        // style={{ backgroundColor: 'red', padding: 100 }}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>

                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <MapView style={styles.modelMap}
                                    region={mapRegion}
                                    zoomEnabled={true}
                                    scrollEnabled={true}
                                    loadingEnabled={true}
                                    onPress={(e) => setMarkerCoordinate(e.nativeEvent.coordinate)}>

                                    <Marker coordinate={markerCoordinate} title='Marker' draggable onDragEnd={handleMarkerDrag} />

                                </MapView>

                                <View style={styles.buttonContainer}>

                                    <CustomeButton onPress={confirmLocation} style={styles.btn}>Confirm Location</CustomeButton>
                                    <CustomeButton onPress={() => setModalVisible(false)} style={styles.btn}>Cancel</CustomeButton>

                                </View>
                            </View>
                        </View>
                    </Modal>

                    <Text style={styles.title}>Address Type</Text>

                    <SelectList
                        setSelected={(val) => setType(val)}
                        onSelect={() => Alert.alert(type)}
                        data={ADDRESSTYPE}
                        save="type"
                        placeholder='Home'
                        boxStyles={{ borderRadius: 50, marginBottom: 10 }}
                    />

                    {/* <TextInput
                        onChangeText={(text) => setType(text)}
                        value={type}    
                        placeholder='Home'
                        style={styles.textFild} /> */}

                    <Text style={styles.title}>Address</Text>
                    <TextInput
                        onChangeText={(text) => setAddress(text)}
                        value={address}
                        placeholder='Address'
                        style={styles.textFild} />

                    <Text style={styles.title}>City</Text>
                    <SelectList
                        setSelected={(val) => setCity(val)}
                        onSelect={() => Alert.alert(city)}
                        data={CITY}
                        save="city"
                        placeholder='Surat'
                        boxStyles={{ borderRadius: 50, marginBottom: 10 }}
                    />

                    {/* <TextInput
                        onChangeText={(text) => setCity(text)}
                        value={city}
                        placeholder='Surat'
                        style={styles.textFild} /> */}


                    <Text style={styles.title}>State</Text>
                    <SelectList
                        setSelected={(val) => setState(val)}
                        onSelect={() => Alert.alert(state)}
                        data={STATE}
                        placeholder='Gujarat'
                        save="state"
                        boxStyles={{ borderRadius: 50, marginBottom: 10 }}
                    />


                    {/* <TextInput
                        onChangeText={(text) => setState(text)}
                        value={state}
                        placeholder='Gujarat'
                        style={styles.textFild} /> */}

                    <Text style={styles.title}>Country</Text>
                    <SelectList
                        setSelected={(val) => setCountry(val)}
                        onSelect={() => Alert.alert(country)}
                        data={COUNTRY}
                        placeholder='India'
                        save="country"
                        boxStyles={{ borderRadius: 50, marginBottom: 10 }}
                    />

                    {/* <TextInput
                        onChangeText={(text) => setCountry(text)}
                        value={country}
                        placeholder='Address'
                        style={styles.textFild} /> */}

                    <Text style={styles.title}>Zip Code</Text>
                    <TextInput
                        onChangeText={(text) => setPincode(text)}
                        value={pinCode}
                        placeholder='395010'
                        style={styles.textFild} />

                    <View>
                        <CustomeButton style={styles.submitBtn} onPress={saveAddressHandler}>Submit</CustomeButton>
                    </View>


                </View>

            </ScrollView>

        </View>
    )
}

export default Address

const styles = StyleSheet.create({

    screen: {
        flex: 1,
    },

    header: {
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },

    headerTitle: {
        flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, color: 'black'
    },

    container: {

        marginHorizontal: 20,
        marginVertical: 10

    },

    title: {
        color: 'black',
        marginVertical: 5,
        fontSize: 17,
        marginHorizontal: 3
    },

    mapContainer: {
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 10,
        marginVertical: 5,
        marginBottom: 20
    },

    map: {
        height: 300,

    },

    dropDownlist: {
        marginTop: 20,
        marginBottom: 15
    },

    textFild: {
        height: 45,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 20,
        marginBottom: 10
    },

    // dropDownlist:{
    //     borderRadius: 50,
    // }

    submitBtn: {
        padding: 15,
        alignSelf: 'center'
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },


    modalView: {
        flex: 1,
        margin: 20,
        width: Dimensions.get('window').width - 50,
        height: Dimensions.get('window').height - 50,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'hidden'
    },

    modelMap: {
        flex: 1,
        alignSelf: 'center',
        borderRadius: 50,
        width: Dimensions.get('window').width - 50,
        // height: Dimensions.get('window').height* 0.8,
        overflow: 'hidden',
        top: -37,


    },

    modalText: {
        // marginBottom: 15,
        textAlign: 'center'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Arrange buttons horizontally with space around
        // marginTop: 20,

    },

    btn: {
        width: Dimensions.get('window').width * 0.30,
        padding: 12,


    }



})