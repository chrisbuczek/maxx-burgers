import type { IRestaurant } from "../src/types/Restaurant.js";
type RestaurantSeedData = Pick<
  IRestaurant,
  "name" | "streetName" | "streetNumber" | "postalCode" | "city" | "country" | "openingTime" | "closingTime"
>[];

const Restaurants: RestaurantSeedData = [
  {
    name: "Forum",
    streetName: "Targ Sienny",
    streetNumber: 7,
    postalCode: "80-806",
    city: "Gdańsk",
    country: "Polska",
    openingTime: "09:00",
    closingTime: "00:00",
  },
];

export default Restaurants;
