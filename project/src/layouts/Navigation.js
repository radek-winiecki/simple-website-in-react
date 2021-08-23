import React from "react";
import {NavLink} from "react-router-dom";

const list = [
    {name: "start", path: "/"},
    {name: "produkty", path: "/products"},
    {name: "kontakt", path: "/contact"},
    {name: "panel admina", path: "/admin"},
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}>
                {item.name}
            </NavLink>
        </li>
    ))

    return (
        <nav>
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;