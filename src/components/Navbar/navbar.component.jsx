import React from "react";

import logo from "../../images/logo.png";

const Navbar = () => {
    return (
        <nav className="container flex items-center pt-7 gap-8">
            <img src={logo} alt="logo" className="w-16"/>

            <ul className="flex gap-8 uppercase text-lg">
                <li>Home</li>
                <li>Dev Work</li>
                <li>Design Work</li>
            </ul>
        </nav>
    );
};

export default Navbar;
