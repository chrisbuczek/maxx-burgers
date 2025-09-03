import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

const API = axios.create({
  baseURL,
});

export const getCategories = () =>
  API.get("/categories").then((res) => res.data);

export const getCategoriesById = (id: string) => {
  API.get(`/categories/${id}`).then(({ data }) => data);
};
