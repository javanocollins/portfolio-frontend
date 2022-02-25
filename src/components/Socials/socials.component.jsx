import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
    {
        icon: faGithub,
        link: "https://github.com/JavanoCollins",
    },
    {
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/javano-collins/",
    },
    {
        icon: faInstagram,
        link: "https://www.instagram.com/javanocollins/",
    },
];

const Socials = () => {
  return (
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
  );
}

export default Socials