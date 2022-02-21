import React, { useState } from "react";
import DesignWork from "./design.component";
import DevWork from "./dev.component";

const Work = () => {
    const [tab, setTab] = useState(1);

    return (
        <div className="container mx-auto flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 mb-5">
                <a
                    className={`${
                        tab === 1 ? "text-orange-600 font-black" : ""
                    } text-5xl cursor-pointer pr-1 mr-5`}
                    onClick={() => setTab(1)}
                >
                    Dev Work
                </a>
                <a
                    className={`${
                        tab === 2 ? "text-orange-600 font-black" : ""
                    } text-5xl cursor-pointer pr-1 mr-5`}
                    onClick={() => setTab(2)}
                >
                    Design Work
                </a>
            </div>
            {tab === 1 && <DevWork />}
            {tab === 2 && <DesignWork />}
        </div>
    );
};

export default Work;
