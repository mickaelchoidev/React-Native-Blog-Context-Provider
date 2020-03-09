import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {

  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.label}>Title :</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter the title'
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Content :</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter the content'
          value={content}
          onChangeText={(text) => setContent(text)}
        />
      </View>
      <View style={styles.button}>
        <Button
          title='Save Blog Post'
          onPress={() => onSubmit(title, content)}
        />
      </View>
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  background: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: 'black',
    flex: 1,
  },
  container: {
    backgroundColor: '#d7d7d7',
    overflow: 'hidden',
    borderRadius: 5,
    marginBottom: 25
  },
  label: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 10
  },
  input: {
    backgroundColor: 'white',
    fontSize: 20,
    padding: 10
  },
  button: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 30,
    alignSelf: 'center',
    width: 180
  }
})

export default BlogPostForm

