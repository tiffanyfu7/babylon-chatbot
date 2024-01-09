export const MessageChannel = ({message, userOrNot}) => {
    
    return (
        <div className={userOrNot ? "WaterBoy-Box" : "User-Box"}>
            <h1>{message}</h1>
        </div>
    )
}