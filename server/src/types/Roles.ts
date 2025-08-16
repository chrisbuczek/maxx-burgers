export const Roles = {
  USER: "user",
  ADMIN: "admin",
} as const;

export type RolesEnum = (typeof Roles)[keyof typeof Roles];

// (typeof Roles) -> { readonly USER: "user", readonly ADMIN: "admin" }
// keyof typeof Roles -> "USER" | "ADMIN"
// (typeof Roles)[USER] -> "user"
// (typeof Roles)[keyof typeof Roles] -> "user" | "admin"
