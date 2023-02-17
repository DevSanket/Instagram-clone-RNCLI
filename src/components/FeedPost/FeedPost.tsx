import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import colors from "../../theme/colors";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";

const FeedPost = ({ post }) => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  return (
    <View>
      {/* Header  */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/1057881358826119168/J8Lp3eXh_400x400.jpg",
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>sanketsabale</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content  */}
      <Image
        source={{
          uri: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg",
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
          Liked By <Text style={styles.bold}>lgrinevicius</Text> and{" "}
          <Text style={styles.bold}>66 others</Text>
        </Text>

        {/* Post Description  */}
        <Text style={styles.text}>
          <Text style={styles.bold}>sanketsabale</Text> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Deleniti eos porro consequatur
          alias vel sapiente delectus doloribus eum dolores a ducimus quos
          magni, molestias eaque iusto nemo ut similique assumenda accusantium
          odio temporibus recusandae tenetur ullam! Quos accusantium optio
          aperiam.
        </Text>

        {/* Comments  */}
        <Text>View all 16 Comments</Text>
        <View style={styles.comments}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>vadimnotjustdev</Text> Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aliquid, delectus.
          </Text>
          <AntDesign
            name={"hearto"}
            size={16}
            style={styles.icon}
            color={colors.black}
          />
        </View>

        {/* Posted Date  */}
        <Text>19 December, 2021</Text>
      </View>
    </View>
  );
};

export default FeedPost;
