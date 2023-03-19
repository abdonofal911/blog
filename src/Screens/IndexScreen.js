import react, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogContext from "../Context/BlogContext";
const IndexScreen = () => {
  const value = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Text>We Have {value} posts</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default IndexScreen;
