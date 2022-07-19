import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ParaSec from './Components/ParaSec';
import Slider from './Components/Slider';
import TBoxes from './Components/TBoxes';

function app() {
    return (
        <div>
                    <Header/>
                    <div style={{clear:'both'}}></div>
                    <Slider/>
                    <ParaSec/>
                    <TBoxes/>
                    <div style={{clear:'both'}}></div>
                    <Footer/>
        </div>
    );
}

export default app;