import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { ApiSlides } from "../API/SliderApi";
import "./Slider.css";

function Slider() {
  // useState hooks
  const [slides] = useState(ApiSlides);
  const [slideAktif, setSlideAktif] = useState(0);
  // Style
  const panahStyle = "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";
  const slideStyle = "wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-[1px] overflow-hidden relative";
  // next click
  const nextClick = () => {
    if (slideAktif === slides.length - 1) {
      setSlideAktif(0);
    } else {
      setSlideAktif(slideAktif + 1);
    }
  };
  // prev click
  const prevClick = () => {
    if (slideAktif === 0) {
      setSlideAktif(slides.length - 1);
    } else {
      setSlideAktif(slideAktif - 1);
    }
  };
  return (
    <div className="ortuDiv h-[540px] bg-white flex justify-between mt-4">
      {/*panah kiri */}
      <div className={panahStyle}>
        <ArrowLeftRounded style={{ fontSize: "50px" }} onClick={prevClick} />
      </div>
      {/* slide */}
      {slides.map((slide, i) => {
        if (i === slideAktif) {
          return (
            <div className={slideStyle + slide.background}>
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="gambar flex flex-1 justify-center items-center h-[100%]">
                  <img className="h-[100%] object-cover" src={slide.src} alt="slide_gambar" />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-center -ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* panah kanan */}
      <div className={panahStyle}>
        <ArrowRightRounded style={{ fontSize: "50px" }} onClick={nextClick} />
      </div>
    </div>
  );
}

export default Slider;
