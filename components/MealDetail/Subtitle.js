import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    subTitle: {
        color: "lightgray",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      subTitleContainer: {
        borderBottomColor: "lightgray",
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
      },
})