import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Gallerypage from "./pages/Gallerypage/Gallerypage";
import Contactuspage from "./pages/Contactuspage/Contactuspage";
import Locationpage from "./pages/Locationpage/Locationpage";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Projectpage from "./pages/Projectpage/Projectpage";
import KProductpage from "./pages/KProductpage/KProductpage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallerypage />} />
          <Route path="/contact" element={<Contactuspage />} />
          <Route path="/location" element={<Locationpage />} />
          <Route path="/about-us" element={<Aboutpage />} />
 <Route path="/product" element={<KProductpage />} />
          <Route path="/project" element={<Projectpage />} />
          {/* <Route path="/history" element={<Historyofdistrict />} /> */}
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
