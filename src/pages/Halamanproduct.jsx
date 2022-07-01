import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Pengumuman from "../components/Pengumuman";

const Halamanproduct = () => {
  return (
    <div>
      <Pengumuman />
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-1 items-center justify-center"></div>
      </div>
      <div className="flex-1"></div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Halamanproduct;
