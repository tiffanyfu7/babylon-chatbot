import React, { useEffect } from "react";
import "./preloader.css";
import { preloaderAnimation } from "./animations/index.jsx";
import BabylonLogo3 from "../images/BabylonLogo3.png";

export const PreLoader = () => {
  useEffect(() => {
    preloaderAnimation();
  }, []);

  return (
    <div className="preloader">

     
      <div className="textContainer">
      <img
        className="BabyLogo3"
        src={BabylonLogo3}
        alt="Babylon Micro-Farms Logo"
      />
        BABYLON
        <p className="subtitle">Harvest Anywhere</p>
      </div>
    </div>
  );
};