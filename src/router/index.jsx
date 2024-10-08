import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart, Home } from "../pages";
import { BaseLayout } from "../components/layout/BaseLayout.jsx";

export const Router = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BaseLayout>
            <Home />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/cart"
        element={
          <BaseLayout>
            <Cart />
          </BaseLayout>
        }
      />
      <Route path="*" element={<h1>ERROR 404 - PAGE NOT FOUND</h1>} />
    </Routes>
  );
};
