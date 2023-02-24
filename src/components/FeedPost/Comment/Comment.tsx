import { View, Text, StyleSheet } from "react-native";
import React from "react";
import fonts from "../../../theme/fonts";
import colors from "../../../theme/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "../styles";
import { IComment } from "../../Types/models";

interface ICommentProps {
  comment: IComment;
}

const Comment = ({ comment }: ICommentProps) => {
  return (
    <View style={styles.comments}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{" "}
        {comment.comment}
      </Text>
      <AntDesign
        name={"hearto"}
        size={16}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
};

export default Comment;
