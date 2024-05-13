import { StyleSheet, Text, View, Button, KeyboardAvoidingView, FlatList, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Dimensions } from 'react-native'
// import Carousel from 'react-native-reanimated-carousel';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Image } from 'react-native'
import { SafeAreaView } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native'
import Metrics from '../../assets/Metrics/Metrics'
import Font from '../../assets/fonts'
import { POPULERPRODUCTS } from '../../dummyDataSet/populerProduct'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height

export default function Home(props) {

  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)
  const [Liked, setLiked] = useState(false)

  const imageSourceViewArray = [
    {
      images: "https://i.pinimg.com/564x/25/cb/3b/25cb3bfc1d033a5cb20fe4f2f7d299e0.jpg"
    },
    {
      images: "https://i.pinimg.com/564x/bd/d0/94/bdd09439260b11313694e9301a11574b.jpg",
    },
    {
      images: "https://i.pinimg.com/originals/79/71/eb/7971eb33c684e90c1aab3312f382471d.jpg",
    },
    {
      images: "https://i.pinimg.com/564x/d0/78/70/d078705c172a131d88c67bd19986172d.jpg",
    },
    {
      images: "https://i.pinimg.com/564x/bb/93/81/bb9381033ddf761710bf8bc8835a243b.jpg",
    },
    {
      images: "https://i.pinimg.com/564x/49/14/07/491407f741f2469c110d29c7b49bd237.jpg"
    }
  ]


  const renderItem = (itemdata) => {

    // return (
    //   console.log(itemdata.item.images)
    // )
    return (
      <View style={styles.imageSlide}>
        <Image source={{ uri: itemdata.item.images }} style={styles.fullWidthImage} />
      </View>
    )
  }

  const handleLike = (index) => {
    return (
      setLiked(!Liked)
    )
  }

  const renderPopulerProducts = (itemData) => {
    return (

      <TouchableOpacity style={styles.populerProductContainer} onPress={() => props.navigation.navigate('PopulerProducts', { POPULERPRODUCTS })}>
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
  const SHOPBYCATEGORIES = [
    {
      categories: "Fashion",
      image: require('../../assets/images/Home/Fashion.png'),
      backgroundColor: '#CECCF1',
      textColor: '#6560B9',
      navigation: 'Fashion'
    },
    {
      categories: "Beauty Makeup",
      image: require('../../assets/images/Home/BeautyMakeup.png'),
      backgroundColor: '#D1F2DD',
      textColor: '#55CC80',
      navigation: 'Beauty Makeup'
    },
    {
      categories: "Furniture",
      image: require('../../assets/images/Home/Furniture.png'),
      backgroundColor: '#FBE3D9',
      textColor: '#E27447',
      navigation: 'Furniture'
    },
    {
      categories: "Electrinics",
      image: require('../../assets/images/Home/Electrinics.png'),
      backgroundColor: '#F1F4C9',
      textColor: '#BFCB25',
      navigation: 'Electrinics'
    },
    {
      categories: "Accesories",
      image: require('../../assets/images/Home/Accesories.png'),
      backgroundColor: '#9ADCFF',
      textColor: '#0881C2',
      navigation: 'Accesories'
    },
    {
      categories: "Healthcare",
      image: require('../../assets/images/Home/Healthcare.png'),
      backgroundColor: '#EFA6DC',
      textColor: '#D451B1',
      navigation: 'Healthcare'
    },
  ]

  const renderCategories = (itemData) => {
    return (
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: Metrics.CountScale(164), height: Metrics.CountScale(60), margin: 5, paddingHorizontal: 15, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: itemData.item.backgroundColor, borderRadius: 8, elevation: 2 }}>
        <Text style={{ flex: 1, color: itemData.item.textColor }}>{itemData.item.categories}</Text>
        <Image source={itemData.item.image} style={{ width: Metrics.CountScale(40), height: Metrics.CountScale(40) }} />
      </TouchableOpacity>
    )
  }

  const PRODUCTSFORYOU = [
    {
      image: 'https://i.pinimg.com/564x/bb/93/81/bb9381033ddf761710bf8bc8835a243b.jpg',
      title: 'Custom Embroidered Polo T Shirts',
      price: '48',
      offer: '25%'
    },
    {
      image: 'https://i.pinimg.com/564x/25/cb/3b/25cb3bfc1d033a5cb20fe4f2f7d299e0.jpg',
      title: 'Custom Embroidered Polo T Shirts',
      price: '48',
      offer: '25%'
    },
    {
      image: 'https://i.pinimg.com/originals/79/71/eb/7971eb33c684e90c1aab3312f382471d.jpg',
      title: 'Custom Embroidered Polo T Shirts',
      price: '48',
      offer: '25%'
    },
    {
      image: 'https://i.pinimg.com/564x/bb/93/81/bb9381033ddf761710bf8bc8835a243b.jpg',
      title: 'Custom Embroidered Polo T Shirts',
      price: '48',
      offer: '25%'
    }
  ]

  const renderProductsForYou = (itemData) => {
    return (
      <TouchableOpacity style={{ flex: 1, height: Metrics.CountScale(240), }} onPress={() => props.navigation.navigate('ProductsForYou', { PRODUCTSFORYOU })}>
        <ImageBackground source={{ uri: itemData.item.image }} style={{ width: Metrics.CountScale(140), height: Metrics.CountScale(160), borderRadius: 16, marginRight: 8, justifyContent: 'space-between', overflow: 'hidden' }}>
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
    )
  }


  const BRANDYOUWILLLOVE = [
    {
      image: "https://i.pinimg.com/564x/bb/93/81/bb9381033ddf761710bf8bc8835a243b.jpg",
      title: "Up to 10% off",
    },
    {
      image: "https://i.pinimg.com/564x/bb/93/81/bb9381033ddf761710bf8bc8835a243b.jpg",
      title: "Up to 15% off",
    },
    {
      image: "https://i.pinimg.com/564x/bb/93/81/bb9381033ddf761710bf8bc8835a243b.jpg",
      title: "Up to 20% off",
    },
    {
      image: "https://i.pinimg.com/564x/bb/93/81/bb9381033ddf761710bf8bc8835a243b.jpg",
      title: "Up to 22% off",
    }
  ]

  const renderBrandYouWillLove = (itemData) => {
    return (
      <TouchableOpacity style={{ width: Metrics.CountScale(160), margin: 5, marginRight: 8 }} onPress={() => props.navigation.navigate('BrandYouWillLiked', { BRANDYOUWILLLOVE })}>
        <Image source={{ uri: itemData.item.image }} style={{ width: Metrics.CountScale(165), height: Metrics.CountScale(170) }} />
        <Text style={{ textAlign: 'center', color: 'black', padding: 10, fontSize: 16 }}>{itemData.item.title}</Text>
      </TouchableOpacity>
    )
  }


  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  //handle Populer products paginations

  const handlePopulerViewAllPrducts = () => {
    return (
      props.navigation.navigate('PopulerProducts', { POPULERPRODUCTS })
    )
  }

  const handleProductForYou = () => {
    return (
      props.navigation.navigate('ProductsForYou', { PRODUCTSFORYOU })
    )
  }

  const handleBrandYouWillLoveProducts = () => {
    return (
      props.navigation.navigate('BrandYouWillLiked', { BRANDYOUWILLLOVE })
    )
  }


  return (
    // <SafeAreaView style={{flex:1}}>


    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.header}>
          <View style={{ flex: 1, marginLeft: 20, lineHeight: 60, alignSelf: 'center', top: 10 }}>
            <Text style={{ color: '#A8A8A8', lineHeight: 25, }}>Location</Text>
            <View style={{ flexDirection: 'row', flex: 1, }}>
              <Text>New York,USA</Text>
              <SimpleLineIcons name='arrow-down' color='black' size={12} style={{ lineHeight: 20, left: 10 }} />
            </View>
          </View>

          <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', right: 8, fontSize: 20, color: 'black' }}>Easy Shop</Text>

          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', }}>
            <FontAwesome name='heart-o' color='black' size={22} style={{ marginRight: 22, lineHeight: 60, }} onPress={() => { }} />
            <MaterialIcons name='logout' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }} onPress={() => { }} />
          </View>


        </View>
        <View style={{ flex: 1 }}>

          <KeyboardAvoidingView>

            <View style={{ flexDirection: "row", flex: 1, marginHorizontal: 20, justifyContent: 'space-around' }}>

              <SearchBar
                placeholder="Search Offer here"
                onChangeText={(text) => updateSearch(text)}
                value={search}
                // placeholderTextColor={''}
                containerStyle={{ flex: 1, backgroundColor: '#E8E8E8', marginVertical: 10, borderRadius: 15, borderColor: '#E8E8E8', borderWidth: 1 }}
                inputContainerStyle={{ backgroundColor: '#E8E8E8', height: 30, }}
              />

              <View style={{ width: 50, marginLeft: 10, backgroundColor: '#E8E8E8', marginVertical: 10, borderRadius: 15, borderColor: '#E8E8E8', borderWidth: 1, height: 50, justifyContent: 'center', }}>
                <MaterialIcons name='filter-alt' color='black' size={28} style={{ left: 10, alignItems: 'center', }} />
              </View>

            </View>



            {/* <Carousel
              data={imageSourceViewArray}
              renderItem={renderItem} 
              ref={isCarousel}
              sliderWidth={width}
              itemWidth={width}
              layout={"left"}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              activeSlideAlignment={'center'}
              loop={true}
              autoplay={true} // Enables auto play
              autoplayDelay={500} // Delay before starting the autoplay
              autoplayInterval={2000} // Delay between each slide
              useScrollView={true}
              onSnapToItem={(index) => setIndex(index)} // Updates the active index
            /> 

            <View style={{ marginTop: -20 }}>
              <Pagination
                dotsLength={imageSourceViewArray.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                  width: 20,
                  height: 8,
                  borderRadius: 5,
                  // top: -25, 
                  marginHorizontal: 0,
                  // backgroundColor: '#fc2779'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
              // dotColor={dotColor}
              />

            </View>  */}


            <View style={{ width: Metrics.CountScale(350), height: Metrics.CountScale(230), marginHorizontal: 16, alignSelf: 'center', }}>
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={{ flex: 1, color: "black", fontSize: 17 }}>Popular Products</Text>
                <TouchableOpacity onPress={handlePopulerViewAllPrducts}>
                  <Text style={{ color: '#fc2779', marginHorizontal: 5, fontSize: 15 }}>View all</Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={POPULERPRODUCTS.slice(0, 2)}
                numColumns={2}
                renderItem={renderPopulerProducts}
              // style={{marginHorizontal:20}}
              />

            </View>

            <View style={{ width: Metrics.CountScale(350), height: Metrics.CountScale(245), marginHorizontal: 16, alignSelf: 'center', marginVertical: 10 }}>
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={{ flex: 1, color: "black", fontSize: 17 }}>Shop by Category</Text>
                <TouchableOpacity>
                  <Text style={{ color: '#fc2779', marginHorizontal: 5, fontSize: 15 }}>View all</Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={SHOPBYCATEGORIES}
                numColumns={2}
                renderItem={renderCategories}
              // style={{marginHorizontal:20}}
              />

            </View>

            <View style={{ width: Metrics.CountScale(350), height: Metrics.CountScale(270), marginHorizontal: 16, alignSelf: 'center', backgroundColor: "white", }}>
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={{ flex: 1, color: "black", fontWeight: 'bold', fontSize: 17 }}>Products for you</Text>
                <TouchableOpacity onPress={handleProductForYou}>
                  <Text style={{ color: '#fc2779', marginHorizontal: 5, fontSize: 15 }}>View all</Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={PRODUCTSFORYOU}
                horizontal={true}
                renderItem={renderProductsForYou}
                showsHorizontalScrollIndicator={false}
              />

            </View>

            <View style={{ width: Metrics.CountScale(350), height: Metrics.CountScale(450), marginHorizontal: 16, alignSelf: 'center', backgroundColor: "white", marginBottom: 20, marginVertical: 15 }}>
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={{ flex: 1, color: "black", fontWeight: 'bold', fontSize: 17 }}>Brands You Will Love</Text>
                <TouchableOpacity onPress={handleBrandYouWillLoveProducts}>
                  <Text style={{ color: '#fc2779', marginHorizontal: 5, fontSize: 15 }}>View all</Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={BRANDYOUWILLLOVE}
                numColumns='2'
                renderItem={renderBrandYouWillLove}
              />

            </View>



          </KeyboardAvoidingView>
        </View>

        <View style={{ flex: 1 }}>
        </View>

      </ScrollView>

    </View >

  )
}

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

  imageSlide: {
    width: width,
  },

  fullWidthImage: {
    height: width * 0.5,
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
  }


})