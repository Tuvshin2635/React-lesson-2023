import { provider, Context, createContext, useState, useEffect } from "react";

const RestaurantContext = createContext(null);

const RestaurantContextProvider = ({ children }) => {
  const ALL_RESTAURANT_URL = "http://localhost:8080/restaurant/restaurants";
  const [restaurant, setRestaurant] = useState([]);
  async function fetchRestaurants(url) {
    const FETCHED_DATA = await fetch(ALL_RESTAURANT_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRestaurant(FETCHED_JSON.data);
  }

  useEffect(() => {
    fetchRestaurants(ALL_RESTAURANT_URL);
  }, []);

  return (
    <RestaurantContext.Provider value={null}>
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantContextProvider };
