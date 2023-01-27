import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons"

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ccc" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "grey" },
        drawerContentStyle:{backgroundColor:"gray"},
        drawerInactiveTintColor:"white",
        drawerActiveTintColor:"yellow",
        drawerActiveBackgroundColor:"black"
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title:"All Categories",
        drawerIcon:({color, size}) =>  <Ionicons name="list" color={color} size={size} />
      }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        title:"Favorites",
        drawerIcon:({color, size}) =>  <Ionicons name="star" color={color} size={size} />
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#ccc" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "grey" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
