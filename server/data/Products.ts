// import type { IProduct } from "../src/types/Products.js";
// type ProductData = Pick<IProduct, "name" | "categories" | "price" | "image">[];

type ProductData = {
  name: string;
  categories: string[];
  price: number;
  image: string;
}[];

const Products: ProductData = [
  {
    name: "BIG Classic Chicken w Zestawie",
    categories: ["menu", "chicken"] as string[],
    price: 40.7,
    image:
      "https://maxburgers-images.futureordering.com/images/product/20412/3326D23A8916BB94214E08578B4A294ED/652x606.png",
  },
  {
    name: "BIG Classic Chicken w Zestawie",
    categories: ["menu", "chicken"],
    price: 40.7,
    image:
      "https://maxburgers-images.futureordering.com/images/product/20412/3326D23A8916BB94214E08578B4A294ED/652x606.png",
  },
];

export default Products;
