import React from "react";
function Footer(){
    const currentyear = new Date().getFullYear();
    return(<footer>
        <p>copyright Ⓒ {currentyear} | copyright Ⓒ Shubham kumar | ISO 1990-{currentyear}</p>
    </footer>)
};
export default Footer;