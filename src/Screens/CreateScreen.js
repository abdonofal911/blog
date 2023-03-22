import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../Context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

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
      <Button
        title="Add New Blog Post"
        onPress={() => {
          addBlogPost(title, content , ()=>navigation.navigate("Index") );
          
        }}
      />
    </View>
  );
};

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

export default CreateScreen;
