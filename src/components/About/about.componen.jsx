import React from "react";

const About = () => {
    return (
        <div>
            <>
                <h2 className="text-5xl font-medium text-white mb-8">
                    ABOUT ME
                </h2>
                <p className="text-2xl mb-5">
                    I'm Javano Collins, currently a Software Engineering major
                    at BTVI 🏫 . As a Software Engineer, I have fallen in love
                    with web technologies, and find a academic and career
                    interest in Machine Learning.
                </p>
                <div>
                    <p className="text-2xl">Additional things about me:</p>
                    <ul>
                        <li className="text-2xl">I am a boxer</li>
                        <li className="text-2xl">
                            I am an avid reader (subjects: finance, psychology,
                            history, stem)
                        </li>
                        <li className="text-2xl mb-5">
                            I love marine science and a self-proclaimed for environmental health. An additional
                            passion of mine lies in applying technology to
                            marine science to save the ocean.
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="text-2xl">Some of the tools I use:</p>
                    <p className="text-2xl mb-5">
                        Vue, React, Node, Sass, Python, MySQL, Photoshop,
                        Illustrator, XD, Figma, Git, GitHub, VSCode, Postman
                    </p>
                </div>
            </>
        </div>
    );
};

export default About;
