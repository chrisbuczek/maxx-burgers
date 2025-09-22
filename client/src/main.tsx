import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./tailwind.css";
import "./i18n";
import App from "./App.tsx";
import RestaurantsPage from "./pages/restaurants/page.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route index element={<App />} />
        <Route path="restaurants" element={<RestaurantsPage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
