import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import PostHeader from '../../components/ui/atoms/PostHeader'
import PostBottom from '../../components/ui/atoms/PostBottom'
import PostContent from '../../components/ui/atoms/PostContent'

export default function Feed(props) {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feed</Text>
        <Ionicons name='chatbox-ellipses-outline' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }} onPress={() => { }} />
      </View>


      <View style={styles.container}>

        <View>
          <PostHeader />
          <PostContent />
          <PostBottom />
        </View>


      </View>

      <View style={styles.addPostContainer}>
        <MaterialIcons name='create' color='white' size={25} style={styles.icons} onPress={() => props.navigation.navigate('CreatePost')} />
      </View>

    </View>
  )
}

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

  headerTitle: {
    flex: 1,
    lineHeight: 60,
    textAlign: 'center',
    fontSize: 20,
    left: 20,
    color: 'black'
  },

  container: {
    flex:1,
    marginHorizontal: 16,
  },

  addPostContainer: {
    position: 'sticky',
    width: 60,
    height: 60,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#FB5193',
    bottom: 0,
    right: 32,
    marginBottom: 40,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    elevation: 2,

},

icons: {
    alignSelf: 'center',
    alignContent: 'center'
}

})