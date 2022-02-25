import React from "react";

import { socialIcons } from "../../utils";
import Socials from "../Socials/socials.component";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="mx-auto flex flex-col items-center justify-center px-20 py-24 bg-gray-900">
            <Socials />
            <p className="text-xl text-white">
                Javano Collins &copy; {currentYear}
            </p>
        </div>
    );
};

export default Footer;
