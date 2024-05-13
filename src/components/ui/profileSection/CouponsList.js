import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { SearchBar } from 'react-native-elements';

const CouponsList = () => {



    const [search, setSearch] = useState('');

    const updateSearch = (search) => {
        setSearch(search);
    };


    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, color: 'black', }}>Coupons /Offers</Text>
            </View>

            <SearchBar
                placeholder="Search Offer here"
                onChangeText={(text) => updateSearch(text)}
                value={search}
                // placeholderTextColor={''}
                containerStyle={{ backgroundColor: '#E8E8E8', marginHorizontal: 20, marginVertical: 10, borderRadius: 15, borderColor: '#E8E8E8', borderWidth: 1 }}
                inputContainerStyle={{ backgroundColor: '#E8E8E8', height: 40, }}
            />


            <View>
                <Text>
                    Get Extra $5 Off
                </Text>
                <Text>
                    Last date to avail  is 20 Feb, 2020 at 11:45 PM
                </Text>

            </View>
            <Text style={{
                borderColor: 'black', padding: 10, borderWidth: 1, width: 100, borderRadius: 50,
                borderStyle: 'dashed',
            }}>
                PAYZP234

            </Text>


        </View>
    )
}

export default CouponsList

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

})