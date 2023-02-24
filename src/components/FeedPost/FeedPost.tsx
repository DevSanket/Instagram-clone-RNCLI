import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import colors from "../../theme/colors";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";
import Comment from "./Comment/Comment";
import { IComment, IPost } from "../Types/models";

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({ post }: IFeedPost) => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  return (
    <View>
      {/* Header  */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content  */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />

      {/* Footer  */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={isLiked ? "heart" : "hearto"}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: "auto" }}
            color={colors.black}
          />
        </View>

        <Text style={styles.text}>
          Liked By{" "}
          <Text style={styles.bold}>{post.comments[0].user.username}</Text> and{" "}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        {/* Post Description  */}
        <Text style={styles.text}>
          <Text style={styles.bold}>{post.user.username}</Text>{" "}
          {post.description}
        </Text>

        {/* Comments  */}
        <Text>View all {post.nofComments} Comments</Text>
        {post.comments &&
          post.comments.map((comment: IComment) => (
            <Comment comment={comment} key={comment.id} />
          ))}

        {/* Posted Date  */}
        <Text>19 December, 2021</Text>
      </View>
    </View>
  );
};

export default FeedPost;
