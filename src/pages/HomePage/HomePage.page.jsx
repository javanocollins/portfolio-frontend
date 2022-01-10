import React from "react";
import Typewriter from "typewriter-effect";

// Component imports
import Button from "../../components/Button/button.component";
import Tool from "../../components/Tool/tool.component";

// Style imports
import "./Homepage.style.css";

// Packages imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    faCheckSquare,
    faCoffee,
    faDatabase,
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faDatabase);

const HomePage = () => {
    const toolIcons = [
        {
            icon: ["fab", "react"],
            title: "React",
            activeColor: "",
        },
        {
            icon: ["fab", "vuejs"],
            title: "Vue",
            activeColor: "",
        },
        {
            icon: ["fab", "js"],
            title: "JavaScript",
            activeColor: "",
        },
        {
            icon: ["fab", "html5"],
            title: "HTML5",
            activeColor: "",
        },
        {
            icon: ["fab", "css3-alt"],
            title: "CSS3",
            activeColor: "",
        },
        {
            icon: ["fab", "python"],
            title: "Python",
            activeColor: "",
        },
        {
            icon: ["fab", "node"],
            title: "Node",
            activeColor: "",
        },
        {
            icon: ["fab", "fa-laravel"],
            title: "Laravel",
            activeColor: "",
        },
        {
            icon: faDatabase,
            title: "MySQL / MongoDB",
            activeColor: "",
        },
    ];

    return (
        <div>
            <header className="HomePage-header flex flex-col items-start justify-center container">
                <h1 className="text-7xl font-medium mb-1 flex-wrap">
                    I am Javano Collins.
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(
                                    '<span style="color: #F44006;">Software Engineer.</span>'
                                )
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString(
                                    '<span style="color: #F44006;">UI/UX Designer.</span>'
                                )
                                .pauseFor(2500)
                                .deleteAll()
                                .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>

                <p className="mb-3">I specialize in Web Development.</p>

                <Button title="View My Work" activeColor="#47E5BC" />
            </header>

            <main>
                <div className="px-12 bg-black h-56 flex items-center justify-around">
                    {toolIcons.map((icon) => {
                        return <Tool icon={icon.icon} title={icon.title} />;
                    })}
                </div>
            </main>
        </div>
    );
};

export default HomePage;
