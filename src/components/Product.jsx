import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import React, { useState } from "react";

function Product({ item }) {
  const [hoverEffect, setHoverEffect] = useState(" opacity-0");
  const handleOver = () => {
    setHoverEffect(" opacity-1 bg-[rgba(0,0,0,0,2)]");
  };
  const handleOverExit = () => {
    setHoverEffect(" opacity-0");
  };
  // style untuk icon
  const styleIcon = "h-[40px] w-[40px] rounded-full bg-white items-center justify-center m-2 p-2 cursor-pointer hover:bg-[#0dc44a] hover:text-white hover:scale[1.1] ease-i duration-100 cursor-pointer";
  return (
    <div className="flex flex-col items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative" onMouseEnter={handleOver} onMouseLeave={handleOverExit}>
      <img src={item.src} alt="gambar_produk" />
      <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100` + hoverEffect}>
        {/*icons*/}
        <div className={styleIcon}>
          <ShoppingCartOutlined />
        </div>
        <div className={styleIcon}>
          <FavoriteBorderOutlined />
        </div>
        <div className={styleIcon}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}

export default Product;
