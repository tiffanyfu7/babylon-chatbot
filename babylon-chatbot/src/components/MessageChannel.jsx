export const MessageChannel = ({message, userOrNot}) => {
    
    return (
        <div className={userOrNot ? "User-Box" : "WaterBoy-Box"}>
            {console.log(message)}
        </div>
    )
}