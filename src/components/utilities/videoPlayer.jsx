"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)
    const handleVidePlayer = () =>{
        setIsOpen((prevState) => !prevState)
    }
    // console.log(isOpen)


    const option = {
        width: "300",
        height: "250"
    }
    const Video = () =>{
        return(
            <div className="fixed bottom-5 right-5">
                <button onClick={handleVidePlayer} className="text-color-primary float-right border border-color-primary rounded-full w-5 h-5 mb-1 items-center justify-center flex font-bold bg-color-secondary">X</button>
                <YouTube videoId={youtubeId}
                onReady={(event) => event.target.pauseVideo()}
                opts={option}
                onError={() => alert("Sorry video not available")}
                className=""
                />
            </div>
        )
    }
    const ButtonOpenTrailer = () =>{
        return (
            <button className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl rounded-md" onClick={handleVidePlayer}>Tonton Trailer</button>
        )
    }
    return isOpen ? <Video/> : <ButtonOpenTrailer/>
}
export default VideoPlayer