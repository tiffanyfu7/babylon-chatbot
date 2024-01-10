import React from 'react'
import BabylonLogo from "../images/BabylonLogo.png";

export const Header = () => {
    return (
        <>
            <h1 className="chatBotHeader">
            {" "}
            <img className="babyImg" src={BabylonLogo} alt="Babylon Farms Logo" />
                WaterBoy
            </h1>

            <p className="chatBotSlogan"> Meet WaterBoy, your personal Babylon Micro-Farms ChatBot</p>
        </>
  )
}    