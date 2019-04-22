import React, { Component } from 'react';
import callbellsVideo from '../video/callbellsVideo.mp4';

class VideoHome extends Component {
    render() {
        return (
            <video id="video" className='videoTag' autoPlay loop muted>
                <source src={callbellsVideo} type='video/mp4' />
            </video>
        )
    }
}

export default VideoHome;
