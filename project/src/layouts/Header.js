import React from "react";
import "../styles/Header.css";

import img1 from '../images/header1.jpg'
import img2 from '../images/header2.jpg'
import img3 from '../images/header3.jpg'
import img4 from '../images/header4.jpg'
import img5 from '../images/header5.jpg'


const Header = () => {
    return (
        <img src={img1} alt="city"/>
    );
}

export default Header;