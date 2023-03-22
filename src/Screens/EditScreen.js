import React, { useContext  , useState} from 'react'
import { StyleSheet, Text, View , TextInput } from 'react-native'
import { Context } from "../Context/BlogContext";


const EditScreen = ({navigation}) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  const [title , setTitle] = useState(blogPost.title);
  const [content , setContent] = useState(blogPost.content);

 return (
    <View>
      <Text style={styles.label}>Edit Title</Text>
      <TextInput style={styles.Input} value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
      <Text style={styles.label}>Edit Content</Text>
      <TextInput style={styles.Input} value={content} onChangeText={(newContent) => setContent(newContent)} />



    </View>
  )
}


const styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    borderColor: "black",
    fontSize: 18,
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default EditScreen
