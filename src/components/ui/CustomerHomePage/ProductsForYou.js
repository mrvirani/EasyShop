import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import Metrics from '../../../assets/Metrics/Metrics';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ProductsForYou = ({ route, navigation }) => {

    const { PRODUCTSFORYOU } = route.params;
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    const renderProductsForYou = (itemData) => {
        return (
            <View style={{alignContent:'center', flex:1, marginHorizontal:12    }}>
                
          <TouchableOpacity style={{ flex:1,justifyContent:'space-between'}}>
            <ImageBackground source={{ uri: itemData.item.image }} style={{ width: Metrics.CountScale(160), height: Metrics.CountScale(160), borderRadius: 16,justifyContent: 'space-between', overflow: 'hidden' }}>
              <View style={[styles.iconContainer, { alignSelf: 'flex-end', margin: 10 }]}>
                <FontAwesome name='heart-o' color='white' size={15} />
              </View>
            </ImageBackground>
    
            <View style={{ width: Metrics.CountScale(140), marginVertical: 10 }}>
    
              <Text numberOfLines={2} style={{ color: 'black', fontSize: 15, textAlign: 'left', gap: 10 }}> {itemData.item.title}</Text>
              <Text style={{ marginVertical: 3, fontSize: 15 }}>$ {itemData.item.price}</Text>
              <Text style={{ color: '#B73200' }}>{itemData.item.offer} off</Text>
            </View>
    
          </TouchableOpacity>
            </View>
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

            <View style={{ width: Metrics.CountScale(370),  alignSelf: 'center', marginVertical: 10 , }}>

                <FlatList
                    data={PRODUCTSFORYOU}
                    numColumns='2'
                    renderItem={renderProductsForYou}
                />

            </View>
        </View>
    )
}

export default ProductsForYou

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