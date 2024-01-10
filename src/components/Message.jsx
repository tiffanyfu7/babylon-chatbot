import { useState } from "react"
import BabylonLogo2 from "../images/BabylonLogo2.png"
import UserIcon from "../images/UserIcon.png"
import { useSpeechSynthesis } from 'react-speech-kit';

export const Message = ({ message, role }) => {
    //if message is sent from user, align to right of page (not working)
    const [copy, setCopy] = new useState('Copy');
    const { speak } = useSpeechSynthesis();

    if (role === "user") {
        return (
            <>
            <div
                className="message"
                // style={{ textAlign: "right", marginRight: "0px" }}
                style={{ backgroundColor: "#79AE93"}}
            >
            <img className="userLogo" src={UserIcon} alt="User Logo"/>
            <div className="messageHeader">
                <h4 style={{ marginBottom: "-15px" }} >
                    You
                    </h4>
             </div>       
                <p>{message}</p>
            </div>
            </>
        )
    }

    else if(role === "assistant" && message === "loading") {
        return (
            <div
                className="message"
                style={{ backgroundColor: "white"}}
            >
            <img className="assistantLogo" src={BabylonLogo2} alt="Babylon Logo"/>
                <div className="messageHeader">
                <h4 style={{ marginBottom: "-15px" }}>WaterBoy</h4>
                </div>
                {/* if waiting for assistant response (message==="loading"), display animation, otherwise display message*/}
                <div className="stage">
                    <p></p>
                    <div className="dot-pulse"></div>
                </div>
            </div>
        );
    }

    else if(role === "assistant") {
        return (
            <div
                className="message"
                style={{ backgroundColor: "white"}}
            >
                <img className="assistantLogo" src={BabylonLogo2} alt="Babylon Logo"/>
                    <div className="messageHeader">
                    <h4 style={{ marginBottom: "-15px" }}>WaterBoy</h4>
                    </div>
                    <p>{message}</p>
                    <>
                        <button className="accessibility-button"
                            onClick={() => { navigator.clipboard.writeText(message); setCopy('Copied') }}
                        >
                            {copy}
                        </button >
                        <button
                            className="accessibility-button"
                            onClick={() => speak({ text: message })}
                            >Speak
                        </button>
                    </>
            </div>
        )
    }
    else return <></>
}