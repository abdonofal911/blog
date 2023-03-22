import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const BlogPostForm = ({onSubmit , initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View>
      <Text style={styles.label}>Enter Title :</Text>
      <TextInput
        style={styles.Input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content :</Text>
      <TextInput
        style={styles.Input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title , content)} />
    </View>
  );
};

/*BlogPostForm.defaultProps = {
    initialValues:{
        title : '' , 
        content:''
    }
}*/

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

export default BlogPostForm;
