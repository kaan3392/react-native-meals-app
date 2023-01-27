import { Text, View, StyleSheet } from "react-native";

export default function List({ data }) {
  return data.map((item) => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "lightgray",
  },
  itemText: {
    color: "black",
    textAlign: "center",
  },
});
