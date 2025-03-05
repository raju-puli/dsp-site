import React from "react";
import logo from "../../assets/logo.png";

import "./loader.css";

const Loader: React.FC = () => {
    return (
        <div className='loader-container'>
            <img src={logo} alt='' className='img-floor-shadow loading-logo bouncing' />
            <div className="spinner"></div>
        </div>
    )
};

export default Loader;