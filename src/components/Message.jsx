import { useState } from "react"
import BabylonLogo2 from "../images/BabylonLogo2.png"
import UserIcon from "../images/UserIcon.png"

export const Message = ({ message, role }) => {
    //if message is sent from user, align to right of page (not working)
    const [copy, setCopy] = new useState('Copy');

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
    else if(role === "assistant") {
        return (
            <div class="message" style={{ backgroundColor: "white"}}
            >
            <img className="assistantLogo" src={BabylonLogo2} alt="Babylon Logo"/>
                <div className="messageHeader">
                <h4 style={{ marginBottom: "-15px" }}>WaterBoy</h4>
                </div>
                <p>{message}</p>
                { message !== "Fetching a Response..." &&
                    <button id="copy-button"
                        onClick={() => { navigator.clipboard.writeText(message); setCopy('Copied') }}
                    >
                        {copy}
                    </button >
                }
            </div>
        )
    }
    else return <></>
}