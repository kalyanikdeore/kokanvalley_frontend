import React from "react";
// import GalleryImage from "./GalleryImage";
import KProduct from "./KProduct";
import Aboutproduct from "./Aboutproduct";
import Productfaq from "./Productfaq";
import ProductTestimonial from "./ProductTestimonial";
import ProductWhyChoose from "./ProductWhyChoose"
function Home() {
  return (
    <div>
        <Aboutproduct/>
      <KProduct />
      <ProductWhyChoose/>
      <ProductTestimonial />
      <Productfaq/>
    </div>
  );
}

export default Home;
