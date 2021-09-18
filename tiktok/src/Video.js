import React from 'react'
import { useRef,useState} from 'react';
import "./Video.css"

function Video() {
    const [playing,setPlaying]=useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(false);
        }


    }

    return (
        <div className="video">
            <video 
            onClick={handleVideoPress}
            classnam="video_player" 
            loop 
            ref={videoRef}
            src="http://techslides.com/demos/sample-videos/small.ogv" >
            </video>
        </div>
    );
}

export default Video
