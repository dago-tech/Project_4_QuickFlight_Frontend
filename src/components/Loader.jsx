import React from "react";
import "../styles/loader.css";

const Loader = () => {
    /*Renders some containers with css styles to make a loading animation */
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;
