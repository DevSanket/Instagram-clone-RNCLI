import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      aspectRatio: 1,
    },
    header: {
      flexDirection: "row",
      padding: 5,
      alignItems: "center",
    },
    userAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontWeight: fonts.weight.bold,
      color: colors.black,
    },
    threeDots: {
      marginLeft: "auto",
    },
    iconContainer: {
      flexDirection: "row",
      marginBottom: 5,
    },
  
    icon: {
      marginHorizontal: 5,
    },
    footer: {
      padding: 10,
    },
    text: {
      color: "black",
      lineHeight: 18,
    },
    bold: {
      fontWeight: fonts.weight.bold,
    },
    comments: {
      flexDirection: "row",
      alignItems: "center",
    },
    commentText: {
      flex: 1,
      color: colors.black,
    },
  });

  export default styles;