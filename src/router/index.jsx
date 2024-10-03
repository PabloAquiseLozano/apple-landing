import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";
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
      <Route path="*" element={<h1>ERROR 404 - PAGE NOT FOUND</h1>} />
    </Routes>
  );
};
