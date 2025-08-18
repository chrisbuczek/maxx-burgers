import type { IUser } from "../src/types/User.js";

type UsersData = Pick<IUser, "name" | "email" | "passwordHash" | "roles">[];

const Users: UsersData = [
  { name: "TestAdmin", email: "testadmin@email.com", passwordHash: "12345", roles: ["user", "admin"] },
  { name: "TestUser", email: "testuser@email.com", passwordHash: "12345", roles: ["user"] },
];

export default Users;
