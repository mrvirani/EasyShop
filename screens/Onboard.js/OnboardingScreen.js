import { Button, Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'

// import { SLIDES } from './data/dummydata'
import { SafeAreaView } from 'react-native-safe-area-context'

import { SLIDES } from './data/dummydata'

const { width, height } = Dimensions.get('window')

export const COLORS = { primary: '#282534', white: 'fff' }






const Slide = ({ item }) => {
    return <View style={{ alignItems: 'center', justifyContent: 'center', }}>
        <Image source={item.images} style={{ height: '75%', width, resizeMode: 'contain' }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
}


const OnboardingScreen = ({ navigation }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const ref = useRef(null)

    const Footer = () => {   // indicator
        return <View style={{
            height: height * 0.25,
            justifyContent: 'space-between',
            paddingHorizontal: 20
        }}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20
            }}>

                {SLIDES.map((_, index) => (
                    <View key={index} style={[styles.indicator, currentSlideIndex === index && { backgroundColor: '#FB5193', width: 25, height: 2 }]}>

                    </View>
                ))}


            </View>

            <View style={{ marginBottom: 20 }}>

                <Button title="Next" onPress={GotoNextScreen} />

            </View>

        </View>


    }

    const udatedCurrentSlideIndex = e => {
        const contentoffsetX = e.nativeEvent.contentOffset.x // width off device in

        console.log(contentoffsetX)

        const currentIndex = Math.round(contentoffsetX / width)
        setCurrentSlideIndex(currentIndex)
        console.log(currentSlideIndex)
    }

    const GotoNextScreen = () => {
        const nextSlideIndex = currentSlideIndex + 1

        if (nextSlideIndex != SLIDES.length) {
            const offSet = nextSlideIndex * width
            ref?.current?.scrollToOffset({ offset: offSet });
            // console.log(nextSlideIndex)
            setCurrentSlideIndex(nextSlideIndex)
        }
    }

    const skip = () => {
        props.navigation.navigate('Login')
    }



    return (
        <SafeAreaView style={{ flex: 1 }}>

            <StatusBar backgroundColor='white' />
            <FlatList
                ref={ref}
                onMomentumScrollEnd={udatedCurrentSlideIndex}  // 1 var scroll thase tyre
                data={SLIDES}
                pagingEnabled  // full page slide thase
                contentContainerStyle={{ height: height * 0.75 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Slide item={item} />} />

            <Footer />





        </SafeAreaView>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        color: 'black'
    },

    subtitle: {
        // width:'55%',
        maxWidth: '70%',
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        overflow: 'hidden'
    },

    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: 'gray',
        marginHorizontal: 3,
        borderRadius: 2
    }

})