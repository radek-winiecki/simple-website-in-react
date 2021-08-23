import React from "react";
import "../styles/Header.css";
import {Route, Switch} from "react-router-dom";

import img1 from '../images/header1.jpg'
import img2 from '../images/header2.jpg'
import img3 from '../images/header3.jpg'
import img4 from '../images/header4.jpg'

const Header = () => {

    // const images = [img1, img2, img3, img4];
    // const index = Math.floor(Math.random() *4);
    //
    // const img = images[index];

    return (
        <>
            <Switch>
                <Route path="/products" render={() => (
                    <img src={img1} alt="city"/>
                )} />
                <Route path="/contact" render={() => (
                    <img src={img2} alt="city"/>
                )} />
                <Route path="/admin" render={() => (
                    <img src={img3} alt="city"/>
                )} />
                <Route path="/" exact render={() => (
                    <img src={img4} alt="city"/>
                )} />
                <Route render={() => (
                    <img src={img4} alt="city"/>
                )} />
            </Switch>

            {/*<img src={img} alt="city"/>*/}
        </>
    );
}

export default Header;