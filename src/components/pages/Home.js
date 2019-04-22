import React, { Component } from 'react';
import VideoHome from '../media/VideoHome';
import '../../style/home.css';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row center">
                    <div id="homeId" className="col s12">
                        <div className="colorDiv"></div>
                        <VideoHome/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home;