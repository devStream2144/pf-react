import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routers";
import AppLayout from "../layouts/AppLayout";

const LayoutRoutes = () => {
  return (
    <>
      <Routes>
        {routes.map(({ path, Component }, index) => (
          <Route element={<AppLayout />}>
            <Route path={path} element={Component} />
          </Route>
        ))}
      </Routes>
    </>
  );
};

export default LayoutRoutes;
