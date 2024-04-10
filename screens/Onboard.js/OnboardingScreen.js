import { Button, Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'

// import { SLIDES } from './data/dummydata'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CUSTOMER_SLIDES, SLIDES } from './data/dummydata'
import CustomeButton from '../../components/CustomeButton'

const { width, height } = Dimensions.get('window')

export const COLORS = { primary: '#282534', white: 'fff' }

import { useRole } from '../../components/UI/atoms/RoleSelector.js';



const Slide = ({ item }) => {
    return <View style={{ width, alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
        <Image source={item.images} style={{ height: '75%', width, resizeMode: 'contain' }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
}


const OnboardingScreen = ({ props, navigation }) => {

    const { role, setRole } = useRole();
    

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
                    <View key={index} style={[styles.indicator, currentSlideIndex === index && { backgroundColor: '#FB5193', }]}>

                    </View>
                ))}


            </View>

            <View style={{ marginBottom: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <CustomeButton onPress={handleLastButtonClick} style={{ marginTop: 40, padding: 15 }}>{currentSlideIndex === SLIDES.length - 1 ? "Let's Explore" : "Next"}</CustomeButton>


            </View>

        </View>


    }

    const udatedCurrentSlideIndex = e => {
        const contentoffsetX = e.nativeEvent.contentOffset.x // width off device in

        // console.log(contentoffsetX)

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
        navigation.navigate('Home')
    }


    const handleLastButtonClick = () => {
        if (currentSlideIndex === SLIDES.length - 1) {
           
            navigation.navigate('Login');
        } else {
          
           GotoNextScreen()
        }
    }



    return (
        <View style={{ flex: 1 }}>

            <StatusBar backgroundColor='white' />
            <FlatList
                ref={ref}
                onMomentumScrollEnd={udatedCurrentSlideIndex}  // 1 var scroll thase tyre
                data={role === 1? SLIDES : CUSTOMER_SLIDES}
                pagingEnabled={true}  // full page slide thase
                contentContainerStyle={{ height: height * 0.75 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Slide item={item}
                />} />

            <Footer />



        </View>
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
        height: 160,
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        overflow: 'hidden'
    },

    indicator: {
        // height: 2.5,
        // width: 10,
        marginTop: 50,
        backgroundColor: '#e0dede',
        marginHorizontal: 3,
        borderRadius: 2,
        width: 20,
        height: 5
    }

})