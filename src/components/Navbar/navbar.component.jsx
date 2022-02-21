import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

const Navbar = () => {
    return (
        <nav className="container mx-auto flex px-10 items-center pt-7 gap-8">
            <Link to="/">
                <img src={logo} alt="logo" className="w-16" />
            </Link>

            {/* <ul className="flex gap-8 uppercase text-lg">
                <Link to="/dev-work">Dev Work</Link>
                <Link to="/design-work">Design Work</Link>
            </ul> */}
        </nav>
    );
};

export default Navbar;
