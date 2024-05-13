import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import Metrics from '../../../assets/Metrics/Metrics';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BrandYouWillLiked = ({ route, navigation }) => {

    const { BRANDYOUWILLLOVE } = route.params;
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    const renderBrandYouWillLove = (itemData) => {
        return (
            <TouchableOpacity style={{ width: Metrics.CountScale(160), margin: 5, marginRight: 8 }} onPress={() => navigation.navigate('PopulerProductsDetailsScreen', { ProductsDeatils: BRANDYOUWILLLOVE[itemData.index] })}>
                <Image source={{ uri: itemData.item.image }} style={{ width: Metrics.CountScale(165), height: Metrics.CountScale(170) }} />
                <Text style={{ textAlign: 'center', color: 'black', padding: 10, fontSize: 16 }}>{itemData.item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (

        <View style={styles.screen}>

            <View style={styles.header}>
            <MaterialIcons name='keyboard-backspace' color='black' size={25} style={{ left: 10, lineHeight: 60 }} onPress={() => navigation.goBack()} />
                <Text style={styles.headerTitle}>Brand You Will Love</Text>
            </View>


            <SearchBar
                placeholder="Search Offer here"
                onChangeText={(text) => updateSearch(text)}
                value={search}
                // placeholderTextColor={''}
                containerStyle={{width:'90%',alignSelf:'center', backgroundColor: '#E8E8E8', marginVertical: 10, borderRadius: 15, borderColor: '#E8E8E8', borderWidth: 1 }}
                inputContainerStyle={{ backgroundColor: '#E8E8E8', height: 30,  }}
            />
            <View style={{ width: Metrics.CountScale(350), height: Metrics.CountScale(450), marginHorizontal: 16, alignSelf: 'center', backgroundColor: "white", marginBottom: 20, marginVertical: 15 }}>

                <FlatList
                    data={BRANDYOUWILLLOVE}
                    numColumns='2'
                    renderItem={renderBrandYouWillLove}
                />

            </View>
        </View>
    )
}

export default BrandYouWillLiked

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
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
})