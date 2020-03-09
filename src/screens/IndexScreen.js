import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext-createDataContext'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {

  const { state, deleteBlogPost, getBlogPosts } = useContext(Context)

  useEffect(() => {
    getBlogPosts()

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts()
    })

    return () => {
      listener.remove()
    }
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Entypo name='trash' style={styles.iconTrash} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View >
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () =>
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <AntDesign name='plus' size={25} />
      </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  buttonBackground: {
    paddingVertical: 14,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 2,
    width: 100
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 17,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: 'black',
    backgroundColor: '#d7d7d7'
  },
  title: {
    fontSize: 18
  },
  iconTrash: {
    fontSize: 24
  },

})

export default IndexScreen

