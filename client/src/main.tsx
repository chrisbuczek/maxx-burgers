import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./tailwind.css";
import "./i18n";
import MainPage from "./pages/page.tsx";
import RestaurantsPage from "./pages/restaurants/page.tsx";
import LoginPage from "./pages/login/page.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
