import type { ICategory } from "../src/types/Category.js";
type CategoryData = Pick<ICategory, "name" | "slug" | "image" | "isActive">[];

const categories: CategoryData = [
  {
    name: "limited deluxe",
    slug: "limited-deluxe",
    image:
      "https://maxburgers-images.futureordering.com/images/product/16397/17ECE743DCE0A76449EB61239FB4653DD/652x606.jpg",
    isActive: true,
  },
  {
    name: "menu",
    slug: "menu",
    image:
      "https://maxburgers-images.futureordering.com/images/product/16345/7E2D6CE063947A296A585CDBCF77E6FED/652x606.jpg",
    isActive: true,
  },
  {
    name: "chicken",
    slug: "chicken",
    image:
      "https://maxburgers-images.futureordering.com/images/product/16397/17ECE743DCE0A76449EB61239FB4653DD/652x606.jpg",
    isActive: true,
  },
];

export default categories;
