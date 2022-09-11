import { Facebook, GitHub, Instagram, LocationOnOutlined, LocalPhoneOutlined, EmailOutlined, Twitter } from "@mui/icons-material";
import React from "react";

const Footer = () => {
    const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white";
    return (
        <div className="flex items-center justify-around p-2">
            <div className="flex flex-col flex-wrap flex-1 p-2">
                <h1 className="text-[25px] ">TOKO HYUNGBAE</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem soluta quis porro eveniet. Nulla modi, quas unde eaque vel, quaerat repellendus dignissimos
                    iure itaque architecto pariatur quia a eveniet veniam?
                </p>
                <div className="flex items-center self-start justify-center mt-3">
                    <div className={socialStyle + ` bg-blue-700`}>
                        <a target="_blank" rel="noreferrer" href="https://facebook.com/herbayuuw">
                            <Facebook />
                        </a>
                    </div>
                    <div className={socialStyle + ` bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}>
                        <a target="_blank" rel="noreferrer" href="https://instagram.com/herbayuuw">
                            <Instagram />
                        </a>
                    </div>
                    <div className={socialStyle + ` bg-sky-400`}>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/sayaherbayu">
                            <Twitter />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col flex-1 p-2">
                <div className="flex m-3">
                    <LocationOnOutlined className="text-[#8a4af3]" />
                    <p className="pl-3">State of Bejifornia</p>
                </div>
                <div className="flex m-3">
                    <LocalPhoneOutlined className="text-[#521da8]" />
                    <p className="pl-3">+62 Kepo Taik</p>
                </div>
                <div className="flex m-3">
                    <EmailOutlined className="text-[#8a4af3]" />
                    <p className="pl-3">sayaherbayu@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
