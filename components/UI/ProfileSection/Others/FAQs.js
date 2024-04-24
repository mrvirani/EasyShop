import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FAQs = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.header}>

                <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, color: 'black', }}>FAQs</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.questions}>1. How do I create an account on EasyShop?</Text>
                <Text style={styles.answer}>To create an account, download the app and click on 'Sign Up'. Follow the instructions to register using your email address or phone number.</Text>

                <Text style={styles.questions}>2. What payment methods are accepted on EasyShop?</Text>
                <Text style={styles.answer}>We accept a variety of payment methods including credit cards, debit cards, PayPal, and mobile payments such as Apple Pay and Google Wallet.</Text>

                <Text style={styles.questions}>3. Is shopping on EasyShop secure?</Text>
                <Text style={styles.answer}>Yes, shopping on EasyShop is secure. We use industry-standard encryption to protect your personal and payment information.</Text>

                <Text style={styles.questions}>4. Can I return or exchange items purchased on EasyShop?</Text>
                <Text style={styles.answer}>Yes, we have a 30-day return policy. Items can be returned or exchanged if they are in their original condition. Some exclusions apply, so please check our return policy for more details.</Text>

                <Text style={styles.questions}>5. How can I track my order?</Text>
                <Text style={styles.answer}>Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or app.</Text>

                <Text style={styles.questions}>6. How do I apply a promo code to my order?</Text>
                <Text style={styles.answer}>You can enter your promo code at checkout. The discount will be applied to your total order amount if the promo code is valid.</Text>

            </View>





        </View>

        
    )
}

export default FAQs

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginHorizontal: 16
    },


    header: {
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },

    container: {
        margin: 10,
    },
    questions: {
        color: 'black',
        fontSize: 17,
        textAlign: 'justify'
    },

    answer: {
        color: '#515151',
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'justify'

    }
})