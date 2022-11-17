import React from "react";
function Footer(){
    const currentyear = new Date().getFullYear();
    return(<footer>
        <p>copyright Ⓒ {currentyear} | copyright Ⓒ Shuubham kumar | ISO 1990-2001</p>
    </footer>)
};
export default Footer;