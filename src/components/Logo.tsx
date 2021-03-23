import React from "react";
import logo from "./logo.png";

const Logo: React.FC = () => {
    const handleClick = () => {
        window.location.replace("/");
    };

    return (
        <div onClick={handleClick} className="logo-container">
            <span className="logo-text">bishan.ml</span>
            <img className="logo-icon" src={logo} alt="" />
        </div>
    );
};

export default Logo;
