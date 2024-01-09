export const MessageChannel = ({message, role}) => {
    if (role === "user") {
        return (
            <div style={{textAlign: "right", whiteSpace: "pre-line"}}>
                <h3>You</h3>
                <p>{message}</p>
            </div>
        )
    }
    else if(role === "assistant") {
        return (
            <div style={{textAlign: "left", whiteSpace: "pre-line"}}>
                <h3>WaterBoy</h3>
                <p>{message}</p>
            </div>
        )
    }
    else return <></>
}