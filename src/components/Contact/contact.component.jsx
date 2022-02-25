import React from "react";
import Socials from "../Socials/socials.component";

const Contact = () => {
    return (
        <div>
            <>
                <h2 className="text-5xl font-medium text-white mb-8">
                    Contact
                </h2>
                <p className="text-2xl">
                    I'm much easier to reach on{" "}
                    <a
                        className="text-white"
                        href="https://www.instagram.com/javanocollins/"
                    >
                        Instagram
                    </a>{" "}
                    and{" "}
                    <a
                        className="text-white"
                        href="https://www.linkedin.com/in/javano-collins/"
                    >
                        LinkedIn
                    </a>{" "}
                </p>
                <div>
                    <a
                        className="text-2xl"
                        href="mailto: javanocollins@gmail.com"
                    >
                        Email: javanocollins@gmail.com
                    </a>
                </div>
            </>
        </div>
    );
};

export default Contact;
