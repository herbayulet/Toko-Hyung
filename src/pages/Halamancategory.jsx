import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Pengumuman from "../components/Pengumuman";
import Products from "../components/Products";

const Halamancategory = () => {
  return (
    <div>
      <Pengumuman />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px] font-semibold">Pakaian Laki</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex">
            <p>Filter by</p>
            <select className="ml-3 border-2 border-silver">
              <option select disabled>
                Size
              </option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <select className="ml-3 border-2 border-silver">
              <option select disabled>
                Warna
              </option>
              <option>Merah</option>
              <option>Biru</option>
              <option>Kuning</option>
            </select>
          </div>
          <div className="flex">
            <p>Sort by</p>
            <select className="ml-3 border-2 border-silver">
              <option>Terbaru (first)</option>
              <option>Lama (first)</option>
              <option>Harga (terendah)</option>
              <option>Harga (tertinggi)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Halamancategory;
