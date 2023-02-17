import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import FeedPost from "./src/components/FeedPost";

const post = {
  id: "1",
  createdAt: "19 December 2021",
  image: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos porro consequatur alias vel sapiente delectus doloribus eum dolores a ducimus quos magni, molestias eaque iusto nemo ut similique assumenda accusantium odio temporibus recusandae tenetur ullam! Quos accusantium optio aperiam.",
  user: {
    image:
      "https://pbs.twimg.com/profile_images/1057881358826119168/J8Lp3eXh_400x400.jpg",
    username: "sanketsabale",
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: "1",
      comment: "Hello there",
      user: {
        username: "vadimisnotjustdev",
      },
    },
    {
      id: "2",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, delectus.",
      user: {
        username: "letsgoforcode",
      },
    },
  ],
};

const App = () => {
  return (
    <View style={styles.app}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FeedPost post={post} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
