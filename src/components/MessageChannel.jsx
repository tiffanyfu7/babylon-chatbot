export const MessageChannel = ({ message, role }) => {
    if (role === "user") {
        return (
            <div class="message" style={{ backgroundColor: "#cff4cd"}} >
                <h4 style={{ marginBottom: "-15px" }} >You</h4>
                <p>{message}</p>
            </div>
        )
    }
    else if(role === "assistant") {
        return (
            <div class="message" style={{ backgroundColor: "white"}}
            >
                <h4 style={{ marginBottom: "-15px" }}>WaterBoy</h4>
                <p>{message}</p>
                { message !== "Fetching a Response..." &&
                    <button id="copy-button"
                        onClick={() => navigator.clipboard.writeText(message)}
                    >
                        Copy
                    </button >
                }
            </div>
        )
    }
    else return <></>
}