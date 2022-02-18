import React from "react";
import Typewriter from "typewriter-effect";

// Component imports
import Button from "../../components/Button/button.component";
import Tool from "../../components/Tool/tool.component";

// Style imports
import "./Homepage.style.css";

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
library.add(fab, faDatabase);

const HomePage = () => {
    return (
        <div>
            <header className="HomePage-header flex flex-col items-start justify-center container mx-auto">
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

                <Work />
                <Contact />
            </main>
        </div>
    );
};

export default HomePage;
