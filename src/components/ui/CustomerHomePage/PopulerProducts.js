import { Button, FlatList, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Metrics from '../../../assets/Metrics/Metrics';


const PopulerProducts = ({ route, navigation }) => {
    const ITEMS_PER_PAGE = 10;

    const { POPULERPRODUCTS } = route.params;

    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        setCurrentData(POPULERPRODUCTS.slice(startIndex, endIndex));
    }, [POPULERPRODUCTS, currentPage]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const [Liked, setLiked] = useState(false)
    const handleLike = (index) => {
        return (
            setLiked(!Liked)
        )
    }

    const totalPages = Math.ceil(POPULERPRODUCTS.length / ITEMS_PER_PAGE);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const renderPopulerProducts = (itemData) => {
        return (
            <TouchableOpacity style={styles.populerProductContainer} onPress={() => navigation.navigate('PopulerProductsDetailsScreen', { ProductsDeatils: POPULERPRODUCTS[itemData.index] })}>
                <ImageBackground source={{ uri: itemData.item.image }} style={styles.imageBackground}>

                    <View style={styles.overlay}>
                        <View style={{ width: Metrics.CountScale(50), height: Metrics.CountScale(25), marginHorizontal: Metrics.CountScale(10), borderRadius: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', flexDirection: 'row', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
                            <MaterialIcons name='star' color={'white'} size={14} />
                            <Text style={styles.rating}>{itemData.item.rating}</Text>
                        </View>
                        <Pressable style={styles.iconContainer} onPress={() => handleLike(itemData.index)}>
                            <FontAwesome name={Liked ? 'heart' : 'heart-o'} color='white' size={15} style={styles.icon} onPress={() => setLiked(!Liked)} />
                        </Pressable>
                    </View>

                    <View style={styles.details}>
                        <Text style={styles.Text}>{itemData.item.title}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View >
                                <Text style={styles.Text}>{itemData.item.price}</Text>
                                <Text style={styles.Text}>{itemData.item.offer} off</Text>
                            </View>
                            <View style={{ width: Metrics.CountScale(32), height: Metrics.CountScale(30), backgroundColor: "#aca6b2", opacity: 0.6, borderRadius: 6, justifyContent: 'center', alignItems: 'center', }}>
                                <FontAwesome name='heart-o' color='white' size={15} style={styles.icon} />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, }}>

            <View style={styles.header}>
                <MaterialIcons name='keyboard-backspace' color='black' size={25} style={{ left: 10, lineHeight: 60 }} onPress={() => navigation.goBack()} />
                <Text style={styles.headerTitle}>Populer Products</Text>
            </View>

            <View style={{ flex: 1, width: Metrics.CountScale(350), height: Metrics.CountScale(230), marginHorizontal: 16, alignSelf: 'center', }}>
                <FlatList
                    data={currentData}
                    numColumns={2}
                    renderItem={renderPopulerProducts}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                />

                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
                <Button title="Prev" disabled={currentPage === 1} onPress={handlePrevPage} />
                <Button title="Next" disabled={currentPage * ITEMS_PER_PAGE >= POPULERPRODUCTS.length}   />
            </View> */}
                <View style={styles.paginationContainer}>
                    <TouchableOpacity disabled={currentPage === 1} onPress={handlePrevPage} style={[styles.pageButton, { height: 45 }]}><Text>Prev</Text></TouchableOpacity>
                    {pageNumbers.map((page) => (

                        <TouchableOpacity
                            key={page}
                            style={[styles.pageButton, currentPage === page && styles.activePageButton]}
                            onPress={() => handlePageChange(page)}
                        >
                            <Text style={currentPage === page ? styles.activePageText : styles.pageText}>{page}</Text>
                        </TouchableOpacity>

                    ))}
                    <TouchableOpacity disabled={currentPage * ITEMS_PER_PAGE >= POPULERPRODUCTS.length} style={[styles.pageButton, { height: 45 }]} onPress={handleNextPage}><Text>Next</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PopulerProducts

const styles = StyleSheet.create({

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

    populerProductContainer: {
        flex: 1,
        // width: Metrics.CountScale(10),
        height: Metrics.CountScale(190),
        marginHorizontal: 5,
        marginVertical: 10,
        justifyContent: 'space-between',
        // overflow:'hidden',

    },

    imageBackground: {
        flex: 1,
        width: Metrics.CountScale(165),
        height: Metrics.CountScale(190),
        borderRadius: 10,
        overflow: 'hidden'
    },

    rating: {
        marginHorizontal: 5,
        color: 'white'
    },
    overlay: {
        flex: 1,
        height: Metrics.CountScale(30), marginTop: Metrics.CountScale(10), flexDirection: 'row', justifyContent: 'space-between'
    },

    iconContainer: {
        width: Metrics.CountScale(30),
        height: Metrics.CountScale(30), backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center', marginRight: 5, borderRadius: 40
    },

    icon: {
        // marginRight: 10
    },

    details: {
        justifyContent: 'center',
        marginHorizontal: Metrics.CountScale(10),
        marginBottom: Metrics.CountScale(10),
        // backgroundColor: 'white',
        borderRadius: 10,
        padding: 7,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // color:'white'
    },

    Text: {
        color: 'white'
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    pageButton: {
        width: Metrics.CountScale(50),
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,
        marginHorizontal: 5,
        borderWidth: 0.7,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 5
    },
    activePageButton: {
        backgroundColor: '#fc2779',
        borderWidth: 0.7,
    },
    pageText: {
        color: 'black',
        fontSize: 20
    },
    activePageText: {
        color: 'white',
        fontSize: 20
    },

})