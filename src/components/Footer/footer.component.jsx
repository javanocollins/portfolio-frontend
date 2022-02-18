import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const currentYear = new Date().getFullYear()

    console.log(currentYear);
    const icons = [
        { icon: faGithub, link: "https://github.com/JavanoCollins" },
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/javano-collins/",
        },
        { icon: faInstagram, link: "https://www.instagram.com/javanocollins/" },
    ];
    return (
        <div className="mx-auto flex flex-col items-center justify-center px-20 py-24 bg-gray-900">
            <div className="text-white text-4xl mb-4">
                {icons.map((icon, idx) => (
                    <a
                        key={idx}
                        className="px-2 mx-1"
                        href={icon.link}
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={icon.icon} />
                    </a>
                ))}
            </div>
            <p className="text-xl text-white">
                Javano Collins &copy; {currentYear}
            </p>
        </div>
    );
};

export default Footer;
