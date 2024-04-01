import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutRoutes from "./Layout";

const Routers = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path={`/*`} element={<LayoutRoutes />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
