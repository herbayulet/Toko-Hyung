import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";

function Navbar() {
  const style = "text-[14px] cursor-pointer ml-[25px]";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
        {/* div yang kiri */}
        <div className="left flex flex-1 items-center">
          <div className="bahasa cursor-pointer text-[16px] ">EN</div>
          <div className="searchInput flex border-[2px] border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#0dc44a] transition-all">
            <input className="outline-none" type="text " />
            <Search style={{ fontSixe: "16px" }} />
          </div>
        </div>
        {/*logo*/}
        <div className="center flex-1 text-center">
          <div className="logo font-bold text-lg">Toko Hyung</div>
        </div>
        {/*kanan div*/}
        <div className="right flex flex-1 items-center justify-end">
          <div className={style}>Daftar</div>
          <div className={style}>Login</div>
          <div className={style}>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
