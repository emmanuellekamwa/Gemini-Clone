import React from 'react';
import './Main.css'
import { assets } from '../../assets/assets';

const Main = () => {
    return (  
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Emmanuelle.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Ask Gemini'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini can send inaccurate responses, so please verify its responses before relying on them.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Main;