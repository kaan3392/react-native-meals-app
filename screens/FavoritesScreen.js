import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favoritesContext";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

export default function FavoritesScreen() {
  const { ids } = useContext(FavoritesContext);

  const favoritesMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no fovorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoritesMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
