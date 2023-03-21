import react, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import {Context as BlogContext} from "../Context/BlogContext";
const IndexScreen = () => {
  const { state,addBlogPost ,resetBlogPosts } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost}/>

      <FlatList
        data={state}
        KeyExtractor={(blogPosts) => {
          blogPosts.title;
        }}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default IndexScreen;
