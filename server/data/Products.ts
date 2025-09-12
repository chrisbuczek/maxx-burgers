// Define product data type for seeding (using strings for category names)
type ProductSeedData = {
  name: string;
  categories: string[];
  price: number;
  image: string;
}[];

const Products: ProductSeedData = [
  {
    name: "BIG Classic Chicken w Zestawie",
    categories: ["menu", "chicken"], // Just strings - will be converted in seeder
    price: 40.7,
    image:
      "https://maxburgers-images.futureordering.com/images/product/20412/3326D23A8916BB94214E08578B4A294ED/652x606.png",
  },
  {
    name: "BIG Classic Wołowy w Zestawie",
    categories: ["menu", "beef"],
    price: 40.7,
    image:
      "https://maxburgers-images.futureordering.com/images/product/20412/3326D23A8916BB94214E08578B4A294ED/652x606.png",
  },
];

export default Products;
