import React from 'react';

const VideoDetail = ({video}) => {
    //takes time to load state.video at the App perent so meantime it's empty...
    if (!video){
        return <div>Loading... </div>;
    }
    
    //After loading and passing the video from App via prop:
    const videoID = video.id.videoId;
    const url=`http://www.youtube.com/embed/${videoID}`;
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div> {video.snippet.title} </div>
                <div> {video.snippet.description}</div>
            </div>
        </div>
    );  
};

export default VideoDetail;