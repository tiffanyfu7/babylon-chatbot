import { lightGreen } from "@mui/material/colors"

export const MessageChannel = ({ message, role }) => {
    //if message is sent from user, align to right of page (not working)
    if (role === "user") {
        return (
            <div
                class="message"
                // style={{ textAlign: "right", marginRight: "0px" }}
                style={{ backgroundColor: "#cff4cd"}}
            >
                <h4 style={{ marginBottom: "-15px" }} >You</h4>
                <p>{message}</p>
            </div>
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
                <h4 style={{ marginBottom: "-15px" }}>WaterBoy</h4>
                <p>{message}</p>
            </div>
        )
    }
    else return <></>
}