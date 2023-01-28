import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealId, setFavoriteMealId] = useState([]);

  function addFavorites(id) {
    setFavoriteMealId((prev) => [...prev, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealId((prev) => prev.filter((item) => item !== id));
  }

  const value = {
    ids: favoriteMealId,
    addFavorites,
    removeFavorite,
  };
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
