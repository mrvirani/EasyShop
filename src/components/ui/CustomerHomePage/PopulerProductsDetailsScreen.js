import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Metrics from '../../../assets/Metrics/Metrics';
import Font from '../../../assets/fonts';
import { isEmptyArray } from 'formik';
import { POPULERPRODUCTS } from '../../../dummyDataSet/populerProduct';
import CustomeButton from '../atoms/CustomeButton';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const PopulerProductsDetailsScreen = ({ route, navigation }) => {

    const [noOfItem, setNoOfItems] = useState(1)
    const { ProductsDeatils } = route.params;
    console.log("===>", ProductsDeatils.specifications)

    const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0)


    const [Liked, setLiked] = useState(false)
    const handleLike = () => {
        return (
            setLiked(!Liked)
        )
    }

    const bottomSheetRef = useRef('');
    const snapPoints = ['50%'];

    const handleDecrement = () => {
        setNoOfItems(noOfItem - 1)
    }

    const handleIncrement = () => {
        setNoOfItems(noOfItem + 1)
        // const totalPrice = 
        // setNoOfItems()
    }

    // callbacks
    const handlePresentModalPress = () => {
        bottomSheetRef.current?.present();
        console.log("helo")
    }

    // const handleSheetChanges = useCallback((index) => {
    //   console.log('handleSheetChanges', index);
    // }, []);




    const renderSimilerProducts = (itemData) => {
        return (
            <TouchableOpacity style={styles.populerProductContainer} onPress={() => navigation.navigate('PopulerProductsDetailsScreen', { ProductsDeatils: POPULERPRODUCTS[itemData.index] })}>
                <ImageBackground source={{ uri: itemData.item.image }} style={styles.imageBackground}>

                    <View style={styles.overlay}>
                        <View style={{ width: Metrics.CountScale(50), height: Metrics.CountScale(25), marginHorizontal: Metrics.CountScale(10), borderRadius: 6, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
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
        <GestureHandlerRootView>
            <BottomSheetModalProvider>
                <SafeAreaView styles={styles.screen}>

                    <SafeAreaView>
                        <View style={styles.imageContainer} >
                            <ImageBackground source={{ uri: ProductsDeatils.image }} style={{ height: Metrics.CountScale(280), alignItems: 'center' }}  >
                                <View style={styles.header}>
                                    <MaterialIcons name='keyboard-backspace' color='white' size={25} style={[styles.headerIcon, { flex: 1 }]} onPress={() => navigation.goBack()} />
                                    <Pressable style={styles.iconContainer} onPress={() => handleLike()}>
                                        <FontAwesome name={Liked ? 'heart' : 'heart-o'} color='white' size={20} style={styles.rightIcon} onPress={() => setLiked(!Liked)} />
                                    </Pressable>
                                </View>

                                <View style={styles.colorContainer}>
                                    <Text style={{ color: 'white', fontSize: 18 }}>{ProductsDeatils.color} colors</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </SafeAreaView>


                    <ScrollView style={{ marginBottom: 300 }}>
                        <SafeAreaView>

                            <View style={styles.container}>
                                <Text style={styles.titleText}>{ProductsDeatils.title}</Text>
                                <View style={{ flexDirection: 'row', height: Metrics.CountScale(35), alignItems: 'center' }}>
                                    <View style={[styles.row, { flex: 1 }]}>
                                        <Text style={[styles.text, { fontSize: 18 }]}> ${ProductsDeatils.price}</Text>
                                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Entypo name='price-tag' color='red' size={18} style={styles.headerIcon} />
                                            <Text style={[styles.text, { flex: 1, color: 'red', marginHorizontal: 5 }]}>{ProductsDeatils.offer}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{ backgroundColor: '#FC2779', marginHorizontal: 10, padding: 10, borderRadius: 20 }}>
                                        <Text style={{ color: 'white' }}>Create Poll</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ padding: 8, flexDirection: 'row', backgroundColor: 'green', width: Metrics.CountScale(70), borderRadius: 5 }}>
                                    <AntDesign name='star' color='white' size={18} />
                                    <Text style={{ color: 'white', marginHorizontal: 10 }}>{ProductsDeatils.rating}</Text>
                                </View>

                                <View style={{ borderColor: 'black', width: '100%', borderWidth: 0.9, borderStyle: 'dashed', marginVertical: 10 }}></View>

                                <Text style={[styles.text, { color: 'black', fontWeight: 'bold' }]}>Product Description</Text>
                                <Text>{ProductsDeatils.productDescription}</Text>

                                <View style={{ borderColor: 'gray', borderWidth: 0.6, marginVertical: 10 }}></View>

                                <View>
                                    <Text style={[styles.text, { color: 'black', fontWeight: 'bold' }]}>Specifications</Text>
                                    {ProductsDeatils.specifications.map((speci, index) =>

                                    (
                                        <View style={{ margibVertical: Metrics.CountScale(10) }}>

                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ flex: 1 }}>Type</Text>
                                                <Text style={styles.text}>{speci.Type}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ flex: 1 }}>Sleeve</Text>
                                                <Text style={styles.text}>{speci.Sleeve}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ flex: 1 }}>Type</Text>
                                                <Text style={styles.text}>{speci.Fabric}</Text>
                                            </View>
                                        </View>
                                    )
                                    )}

                                    <Text style={[styles.text, { color: 'black', fontWeight: 'bold' }]}>Additional Information</Text>
                                    <Text style={styles.text}>{ProductsDeatils.AdditionalInformation}</Text>

                                    <View style={{ borderColor: 'gray', borderWidth: 0.6, marginVertical: 10 }}></View>

                                    <Text style={[styles.text, { color: 'black', fontWeight: 'bold' }]}>Select Product Size</Text>
                                    <View style={styles.sizeContainer}>
                                        {ProductsDeatils.size.map((size, index) => (
                                            <View key={index} style={styles.sizeItem}>
                                                <TouchableOpacity style={{ padding: 15, width: 50, height: 50, marginTop: 10, textAlign: 'center', borderRadius: 10, marginHorizontal: 10, borderColor: index === selectedSizeIndex ? '#fb5193' : 'black', borderWidth: 1 }} onPress={() => setSelectedSizeIndex(index)}><Text style={{ color: 'black', textAlign: 'center' }} numberOfLines={2}>{size}</Text></TouchableOpacity>
                                            </View>
                                        ))}
                                    </View>
                                    <View style={{ borderColor: 'gray', borderWidth: 0.6, marginVertical: 15 }}></View>

                                    <Text style={[styles.text, { color: 'black', fontWeight: 'bold' }]}>Additional Details</Text>
                                    <Text style={styles.text}>{ProductsDeatils.AdditionalDetails}</Text>

                                    <View style={{ borderColor: 'gray', borderWidth: 0.6, marginVertical: 10 }}></View>

                                    <Text style={[styles.text, { color: 'black', fontWeight: 'bold' }]}>Additional Details</Text>

                                    <View style={{ width: Metrics.CountScale(350), height: Metrics.CountScale(220), marginHorizontal: 16, alignSelf: 'center', marginBottom: 20, marginVertical: 15 }}>
                                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                            <Text style={{ flex: 1, color: "black", fontWeight: 'bold', fontSize: 17 }}>Similar Products</Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('PopulerProducts', { POPULERPRODUCTS })}>
                                                <Text style={{ color: '#fc2779', marginHorizontal: 5, fontSize: 15 }}>View all</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <FlatList
                                            data={POPULERPRODUCTS.slice(0, 5)}
                                            horizontal={true}
                                            renderItem={renderSimilerProducts}
                                            showsHorizontalScrollIndicator={false}
                                        />

                                    </View>

                                </View>

                            </View>

                            {/* <BottomSheetModal
                        ref={bottomSheetRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                    >
                        <BottomSheetView style={styles.contentContainer}>
                            <Text>Awesome 🎉</Text>
                        </BottomSheetView>
                    </BottomSheetModal> */}

                            <BottomSheetModal
                                ref={bottomSheetRef}
                                index={0}
                                snapPoints={snapPoints}
                                style={{ borderTopEndRadius: 100, backgroundColor: 'pink' }}
                            >
                                <View style={styles.bottomSheetModel}>
                                    <Text style={[styles.text, { marginVertical: 20, fontWeight: 'bold', borderBottomColor: 'black', borderBottomWidth: 1 }]}>Select Application Options</Text>
                                    <View style={styles.rowImageContainer}>
                                        <Image source={{ uri: ProductsDeatils.image }} style={{ width: Metrics.CountScale(80), height: Metrics.CountScale(80), borderRadius: Metrics.CountScale(10), }} />
                                        <View style={{ flexDirection: "row", flex: 1 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={[styles.text, { marginLeft: 10 }]}>{ProductsDeatils.title}</Text>
                                                <Text style={[styles.text, { marginLeft: 10 }]}> ${Number.parseFloat(noOfItem * ProductsDeatils.price).toFixed(2)}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', height: 50, marginRight: 20 }}>
                                                <TouchableOpacity style={{ width: 25, height: 25, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#CBCBCB' }} onPress={handleDecrement}>
                                                    <Text style={[styles.text, { color: 'black' }]}>-</Text>
                                                </TouchableOpacity>
                                                <Text style={[styles.text, { marginHorizontal: 12 }]}>{noOfItem}</Text>
                                                <TouchableOpacity style={{ width: 25, height: 25, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fb5193' }} onPress={handleIncrement}>
                                                    <Text style={[styles.text, { color: 'white' }]}>+</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>


                                    </View>
                                    <Text style={[styles.text, { color: 'black', fontWeight: 'bold' }]}>Select Products Size</Text>
                                    <View style={[styles.sizeContainer, { alignSelf: 'center' }]}>
                                        {ProductsDeatils.size.map((size, index) => (
                                            <View key={index} style={styles.sizeItem}>
                                                <TouchableOpacity style={{ padding: 3, width: 50, height: 35, justifyContent: 'center', textAlign: 'center', borderRadius: 5, marginHorizontal: 10, borderColor: index === selectedSizeIndex ? '#fb5193' : 'black', borderWidth: 1 }} onPress={() => setSelectedSizeIndex(index)}><Text style={{ color: 'black', textAlign: 'center' }} numberOfLines={2}>{size}</Text></TouchableOpacity>
                                            </View>
                                        ))}
                                    </View>
                                    <View style={{ borderColor: 'gray', borderWidth: 0.6, marginVertical: 10 }}></View>
                                    <Text style={[styles.text, { color: 'black', fontWeight: 'bold' }]}>Select Products Color</Text>
                                    <View style={[styles.sizeContainer, { alignSelf: 'center' }]}>
                                        {ProductsDeatils.colorName.map((name, index) => (
                                            <View key={index} style={styles.sizeItem}>
                                                <TouchableOpacity style={{ padding: 3, width: 100, height: 35, justifyContent: 'center', textAlign: 'center', borderRadius: 5, marginHorizontal: 10, borderColor: index === selectedColorIndex ? '#fb5193' : 'black', borderWidth: 1 }} onPress={() => setSelectedColorIndex(index)}><Text style={{ color: 'black', textAlign: 'center' }} numberOfLines={2}>{name}</Text></TouchableOpacity>
                                            </View>
                                        ))}
                                    </View>

                                    <View style={{ borderColor: 'gray', borderWidth: 0.6, marginVertical: 10 }}></View>

                                    <CustomeButton style={{ padding: 15, alignSelf: 'center' }} onPress={() => navigation.navigate('CheckOutOrderTab')}>Continue</CustomeButton>

                                </View>
                            </BottomSheetModal>
                            <View style={styles.stickyBottomContainer}>
                                <View style={styles.bootomRowContainer}>
                                    <Text style={[styles.text, { fontWeight: 'bold' }]}>{noOfItem} Item |</Text>
                                    <Text style={[styles.text, { flex: 1, fontWeight: 'bold' }]}> ${Number.parseFloat(noOfItem * ProductsDeatils.price).toFixed(2)}</Text>
                                    <CustomeButton style={{ padding: Metrics.CountScale(15), width: Metrics.CountScale(200), marginRight: Metrics.CountScale(10) }} onPress={handlePresentModalPress}>Add to Cart</CustomeButton>
                                </View>
                            </View>
                        </SafeAreaView>
                    </ScrollView>

                </SafeAreaView>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}

export default PopulerProductsDetailsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // backgroundColor: 'white'
    },
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 15,
        // backgroundColor:'gray'
    },
    imageContainer: {
        height: Metrics.CountScale(280),
        overflow: 'hidden',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        opacity: 10,
        backgroundColor: 'black',
    },
    header: {
        // flex:1,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerIcon: {
        marginLeft: Metrics.CountScale(15),
    },
    iconContainer: {
        width: Metrics.CountScale(40),
        height: Metrics.CountScale(40),
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        borderRadius: 40
    },
    rightIcon: {
        lineHeight: 40,
    },

    colorContainer: {
        position: 'absolute', width: Metrics.CountScale(100), height: Metrics.CountScale(40), justifyContent: 'center', alignItems: 'center', bottom: Metrics.CountScale(10), right: Metrics.CountScale(30), backgroundColor: 'rgba(0,0,0,0.5)', flexDirection: 'row', borderRadius: 20, padding: 10
    },
    titleText: {
        fontSize: 25,
        fontFamily: Font.CairoBold,
        fontWeight: 'bold',
        color: 'black'
    },

    row: {
        flexDirection: 'row',
        lineHeight: 80,
        height: 30,
    },

    text: {
        fontSize: 17,
        color: 'black',
        lineHeight: 30,
        fontFamily: Font.CairoBold
    },
    sizeContainer: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
        // marginTop: 10,
    },
    sizeItem: {
        flexDirection: 'row',
    },
    populerProductContainer: {
        flex: 1,
        // width: Metrics.CountScale(10),
        height: Metrics.CountScale(190),
        marginHorizontal: 5,
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
    stickyBottomContainer: {
        borderTopColor: 'black',
        borderTopWidth: 0.7,
        padding: 2
    },
    bootomRowContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20

    },
    bottomSheetModel: {
        paddingHorizontal: 15
    },
    rowImageContainer: {
        flexDirection: 'row'
    }
})