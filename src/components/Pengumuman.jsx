import { Close } from "@mui/icons-material";
import React, { useState } from "react";

function Pengumuman() {
  const [pengumumanStyle, setPengumumanStyle] = useState("bg-[#0dc44a] font-bold text-white flex items-center justify-center");
  const handleClose = () => {
    setPengumumanStyle(pengumumanStyle + " hidden");
  };
  return (
    <div className={pengumumanStyle}>
      <h2>Diskon 30% Opening Toko</h2>
      <Close className="cursor-pointer" onClick={handleClose} />
    </div>
  );
}

export default Pengumuman;
