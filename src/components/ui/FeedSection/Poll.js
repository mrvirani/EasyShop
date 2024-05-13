import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RNPoll, { IChoice } from "react-native-poll";
import RNAnimated from "react-native-animated-component";

const Poll = () => {

    const choices = [
        { id: 1, choice: "Nike", votes: 12 },
        { id: 2, choice: "Adidas", votes: 1 },
        { id: 3, choice: "Puma", votes: 3 },
        { id: 4, choice: "Reebok", votes: 5 },
        { id: 5, choice: "Under Armour", votes: 9 },
      ];

    return (
        <View style={styles.pollContainer}>

            <View>
                <Text>Hi Guys, I need Your help for purchasing iphone 13 pro max phone.</Text>

            <Text>
            <RNPoll
                appearFrom="right"
                animationDuration={750}
                totalVotes={30}
                choices={choices}
                PollContainer={RNAnimated}
                PollItemContainer={RNAnimated}
                onChoicePress={(selectedChoice) =>
                    console.log("SelectedChoice: ", selectedChoice)
                }
            />

            </Text>
            </View>
        </View>
    )
}

export default Poll

const styles = StyleSheet.create({
    pollContainer:{
        marginHorizontal:16,
        borderColor:'black',
        // borderWidth:1,
         marginVertical:10,
        padding:10,
        elevation:5
    }
})