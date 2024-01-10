import { lightGreen } from "@mui/material/colors"
import BabylonLogo2 from "./images/BabylonLogo2.png"
import UserIcon from "./images/UserIcon.png"


export const MessageChannel = ({ message, role }) => {
    //if message is sent from user, align to right of page (not working)

    if (role === "user") {
        return (
            <>
           
            <div
             
                className="message"
                // style={{ textAlign: "right", marginRight: "0px" }}
                style={{ backgroundColor: "#cff4cd"}}
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
    //if message is sent from assistant align left (not working)
    else if(role === "assistant") {
        return (
            <div
                class="message"
                // style={{ textAlign: "left", marginLeft: "0px" }}
                style={{ backgroundColor: "white"}}
            >
            <img className="assistantLogo" src={BabylonLogo2} alt="Babylon Logo"/>
                <div className="messageHeader">
                <h4 style={{ marginBottom: "-15px" }}>WaterBoy</h4>
                </div>
                <p>{message}</p>
            </div>
        )
    }
    else return <></>
}