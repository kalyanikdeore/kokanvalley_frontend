import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/history" element={<Historyofdistrict />} /> */}
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
