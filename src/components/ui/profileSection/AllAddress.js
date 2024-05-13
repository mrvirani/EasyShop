import { Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomeButton from '../atoms/CustomeButton'
import { useDispatch, useSelector } from 'react-redux'
import * as showLocationAction from '../../../utiles/localStorage/store/actions/Auth'

const AllAddress = (props) => {

    const [home, setHome] = useState('')
    const [office, setOffice] = useState('')
    const [other, setOthers] = useState('')
    const [refreshing, setRefreshing] = useState(false);

    const dispatch = useDispatch();
    const addressData = useSelector(state => state.auth.addressData)

    // const latestAddresses = {}

    // const latestAddressDetails = Object.values(latestAddresses);

    // addressData?.data?.addressDetails.forEach(addressDetail => {
    //     if (!latestAddresses[addressDetail.type] || addressDetail.lastUpdated > latestAddresses[addressDetail.type].lastUpdated) {
    //         latestAddresses[addressDetail.type] = addressDetail;
    //     }
    // });





    // console.log('addressData', addressData.data?.addressDetails)

    useEffect(() => {
        // Dispatch action to fetch user data when page loads
        getUsersAdddressDetails()
    }, []);

    const getUsersAdddressDetails = () => {
        setRefreshing(true);
        dispatch(showLocationAction.getAddressDetails()).then((res) => {
            console.log("getAddressDetails", res)
        })
            .catch(error => console.log('Error fetching in getAddressDetails:', error))
            .finally(() => setRefreshing(false));

        setRefreshing(false);
    }

    const onRefresh = () => {
        setRefreshing(true);
        getUsersAdddressDetails()
    };

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Address</Text>
            </View>

            {/* 
            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }> */}

            <View style={styles.container}>

                <View>
<View style={{flexDirection:'row', flex:1}}>
                    <Text style={styles.titleText}>Shipping Address</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Address')}>
                    <Text style={styles.titleText}>Add</Text>
                    </TouchableOpacity>
</View>



                    {addressData?.data?.addressDetails.map((addressDetail, index) => (
                            <View style={styles.row} key={index}>
                                <View style={styles.imageContainer}>
                                    {addressDetail.type === 'Home' && (
                                        <Image source={require('../../../assets/images/home_11769778.png')} style={styles.titleImage} />
                                    )}
                                    {addressDetail.type === 'Office' && (
                                        <Image source={require('../../../assets/images/office.jpg')} style={[styles.titleImage, styles.officeImage]} />
                                    )}
                                    {addressDetail.type === 'Other' && (
                                        <Image source={require('../../../assets/images/others.jpg')} style={[styles.titleImage, styles.otherImages]} />
                                    )}
                                </View>
                                <View style={styles.AddressTitleContainer}>
                                    <Text style={styles.titleAddress}>{addressDetail.type}</Text>

                                    {addressDetail.type === 'Home' && (
                                        <Text>{addressDetail.address} - Home specific field</Text>
                                    )}
                                    {addressDetail.type === 'Office' && (
                                        <Text>{addressDetail.address} - Office specific field</Text>
                                    )}
                                    {addressDetail.type === 'Other' && (
                                        <Text>{addressDetail.address} - Other specific field</Text>
                                    )}
                                </View>
                                <Image source={{ uri: 'https://i.pinimg.com/236x/67/ff/5d/67ff5daf5498edb23cd9a321dcd58912.jpg' }} style={styles.mapImages} />
                            </View>
                        ))}

                    {/* <View> */}

                        {/* {
                            latestAddressDetails.map((addressDetail, index) => (
                                <View style={styles.row} key={index}>
                                    <View style={styles.imageContainer}>
                                        {addressDetail.type === 'Home' && (
                                            <Image source={require('../../../assets/images/home_11769778.png')} style={styles.titleImage} />
                                        )}
                                        {addressDetail.type === 'Office' && (
                                            <Image source={require('../../../assets/images/office.jpg')} style={[styles.titleImage, styles.officeImage]} />
                                        )}
                                        {addressDetail.type === 'Other' && (
                                            <Image source={require('../../../assets/images/others.jpg')} style={[styles.titleImage, styles.otherImages]} />
                                        )}
                                    </View>
                                    <View style={styles.AddressTitleContainer}>
                                        <Text style={styles.titleAddress}>{addressDetail.type}</Text>
                                        <Text>{addressDetail.address} - {addressDetail.type} specific field</Text>
                                    </View>
                                    <Image source={{ uri: 'https://i.pinimg.com/236x/67/ff/5d/67ff5daf5498edb23cd9a321dcd58912.jpg' }} style={styles.mapImages} />
                                </View>
                            ))} */}
                    {/* </View> */}
                </View>


            </View>

            <View style={styles.addAddressBtnContainer}>
                <CustomeButton style={styles.addAddresBtn} onPress={() => props.navigation.navigate('Address')}>Add Address</CustomeButton>
            </View>
        </View>

            // </ScrollView>



        // </View >
    )
}

export default AllAddress

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        marginHorizontal: 20,
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
        // height: '100%',
        flex: 1
        // flex:1
        // marginHorizontal: 16
    },

    titleText: {
        color: 'black',
        fontSize: 18,
        marginHorizontal: 20,
        marginVertical: 10,
        top: 8
    },


    title: {
        color: 'black',
        marginTop: 10,
    },

    titleImage: {
        width: 25,
        height: 25,
        alignSelf: 'center',

    },

    officeImage: {
        width: 45,
        height: 45
    },

    otherImages: {
        width: 55,
        height: 55
    },

    mapImages: {
        width: 55,
        height: 55,
        padding: 10,
        borderRadius: 50,
        alignSelf: 'center',
        right: 10
    },

    row: {
        marginHorizontal: 20,
        marginVertical: 15,
        height: 50,
        flexDirection: 'row',
    },

    imageContainer: {
        // backgroundColor: 'red',
        padding: 15,
        width: 45,
        height: 45,
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 1,
        overflow: 'hidden'


    },

    AddressTitleContainer: {
        flex: 1,
        marginHorizontal: 15

    },

    titleAddress: {
        fontSize: 18,
        color: 'black'
    },

    addAddressBtnContainer: {
        // padding:15,
        alignSelf: 'center',

    },

    addAddresBtn: {
        padding: 15
    }



})