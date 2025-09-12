// Define order data type for seeding (using strings instead of ObjectIds)
type OrderSeedData = {
  user: string; // Will be converted to ObjectId in seeder
  orderItems: {
    quantity: number;
    product: string; // Product name, will be converted to ObjectId in seeder
  }[];
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}[];

const Orders: OrderSeedData = [
  {
    user: "68c48a3c38bb0151af8ca75e", // User email reference
    orderItems: [
      {
        quantity: 2,
        product: "BIG Classic Chicken w Zestawie", // Product name reference
      },
      {
        quantity: 1,
        product: "BIG Classic Chicken w Zestawie", // You can add more products later
      },
    ],
    shippingAddress: {
      address: "ul. Poznańska 13",
      city: "Kraków",
      postalCode: "30-620",
      country: "Poland",
    },
  },
  {
    user: "68c48a3c38bb0151af8ca75e",
    orderItems: [
      {
        quantity: 1,
        product: "BIG Classic Chicken w Zestawie",
      },
    ],
    shippingAddress: {
      address: "ul. Floriańska 25",
      city: "Kraków",
      postalCode: "31-021",
      country: "Poland",
    },
  },
];

export default Orders;
