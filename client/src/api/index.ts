import axios from "axios";

export interface Product {
  _id: string;
  name: string;
  slug: string;
  categories: string[];
  price: number;
  image: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductRequest {
  name: string;
  categories?: string[];
  price: number;
  image?: string;
  isActive?: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: any[];
  count?: number;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  isActive: boolean;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  roles: string[];
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

// Configure Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Auto-attach auth tokens
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      // Redirect to login (you can use your router here)
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// ==================== PRODUCTS API ====================

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await api.get<ApiResponse<Product[]>>("/api/v1/products");
  return response.data.data || [];
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await api.get<ApiResponse<Product>>(
    `/api/v1/products/${id}`
  );
  if (!response.data.data) {
    throw new Error("Product not found");
  }
  return response.data.data;
};

export const createProduct = async (
  productData: CreateProductRequest
): Promise<Product> => {
  const response = await api.post<ApiResponse<Product>>(
    "/api/v1/products/create",
    productData
  );
  if (!response.data.data) {
    throw new Error("Failed to create product");
  }
  return response.data.data;
};

export const updateProduct = async (
  id: string,
  productData: Partial<CreateProductRequest>
): Promise<Product> => {
  const response = await api.put<ApiResponse<Product>>(
    `/api/v1/products/update/${id}`,
    productData
  );
  if (!response.data.data) {
    throw new Error("Failed to update product");
  }
  return response.data.data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await api.delete(`/api/v1/products/${id}`);
};

// ==================== CATEGORIES API ====================

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await api.get<ApiResponse<Category[]>>("/api/v1/categories");
  return response.data.data || [];
};

export const getCategoryById = async (id: string): Promise<Category> => {
  const response = await api.get<ApiResponse<Category>>(
    `/api/v1/categories/${id}`
  );
  if (!response.data.data) {
    throw new Error("Category not found");
  }
  return response.data.data;
};

// ==================== AUTH API ====================

export const loginUser = async (
  credentials: LoginRequest
): Promise<{ user: User; token: string }> => {
  const response = await api.post<ApiResponse<{ user: User; token: string }>>(
    "/api/v1/auth/login",
    credentials
  );
  if (!response.data.data) {
    throw new Error("Login failed");
  }

  // Store token automatically
  localStorage.setItem("authToken", response.data.data.token);

  return response.data.data;
};

export const registerUser = async (
  userData: RegisterRequest
): Promise<{ user: User; token: string }> => {
  const response = await api.post<ApiResponse<{ user: User; token: string }>>(
    "/api/v1/auth/register",
    userData
  );
  if (!response.data.data) {
    throw new Error("Registration failed");
  }

  // Store token automatically
  localStorage.setItem("authToken", response.data.data.token);

  return response.data.data;
};

export const logoutUser = async (): Promise<void> => {
  await api.post("/api/v1/auth/logout");
  localStorage.removeItem("authToken");
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await api.get<ApiResponse<User>>("/api/v1/auth/me");
  if (!response.data.data) {
    throw new Error("Failed to get current user");
  }
  return response.data.data;
};

// ==================== ERROR HANDLING HELPER ====================

export const handleApiError = (error: any): string => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  if (error.message) {
    return error.message;
  }
  return "An unexpected error occurred";
};
