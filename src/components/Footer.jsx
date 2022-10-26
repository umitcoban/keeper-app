import React from "react";
import "../index.css";


const currentYear = new Date().getFullYear();

function Footer() {
    return <footer className="footer"> <p>Umit Yasin Coban {currentYear}</p></footer>
};

export default Footer;