import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

const API = axios.create({
  baseURL,
});

//categories
export const getCategories = () => API.get("/categories");
export const getCategoriesById = (id: string) => API.get(`/categories/${id}`);

//restaurants
export const getRestaurants = () => API.get("/restaurants");
