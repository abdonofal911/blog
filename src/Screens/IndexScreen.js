import react, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BlogContext from "../Context/BlogContext";
const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Text>We Have {blogPosts.length} posts</Text>
      <FlatList
        data={blogPosts}
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
