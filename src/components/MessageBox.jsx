import React from 'react'

function MessageBox({ message, isUser }) {
    if (isUser === "user") {
        return (
            <div style={{textAlign: "right"}}>
                <h3>You</h3>
                <p>{message}</p>
            </div>
        )
    }
    else {
        return (
            <div style={{textAlign: "left"}}>
                <h3>WaterBoy</h3>
                <p>{message}</p>
            </div>
        )
    }
}

export default MessageBox
