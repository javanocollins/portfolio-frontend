import React from "react";
import Typewriter from "typewriter-effect";

// Component imports
import Button from "../../components/Button/button.component";
import Tool from "../../components/Tool/tool.component";

// Style imports
import "./index.style.css";

// Packages imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faLaravel } from "@fortawesome/free-brands-svg-icons";
import { toolIcons } from "../../utils";
import {
    faCheckSquare,
    faCoffee,
    faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import Work from "../../components/Work/work.component";
import Contact from "../../components/Contact/contact.component";
import About from "../../components/About/about.componen";
library.add(fab, faDatabase);

const HomePage = () => {
    return (
        <div>
            <header className="HomePage-header flex flex-col px-10 items-start justify-center container mx-auto">
                <h1 className="text-7xl font-medium mb-1 flex-wrap">
                    I am Javano Collins.
                    <Typewriter
                        className="Typewriter"
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
                <div className="Tools px-12 bg-black h-56 flex items-center justify-around">
                    {toolIcons.map((icon, idx) => {
                        return (
                            <Tool
                                key={idx}
                                icon={icon.icon}
                                title={icon.title}
                            />
                        );
                    })}
                </div>

                <div className="work-section mx-auto flex flex-col justify-center lg:grid-cols-2 items-center py-20">
                    <Work />
                </div>
                <div className="info-section mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-start py-20 px-10">
                    <Contact />
                    <About />
                </div>
            </main>
        </div>
    );
};

export default HomePage;
