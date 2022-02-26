import React, { useState } from "react";
import Company from "./company";

const work_places = [
    { company: "Plato Alpha", job_title: "Software Engineer" },
    { company: "Think Simple", job_title: "Automation Systems Programmer" },
];

const Experience = () => {
    const [tab, setTab] = useState(1);

    return (
        <>
            <h2 className="text-5xl font-medium text-orange-600 mb-8">
                Experience
            </h2>

            <div className="grid grid-cols-2 justify-between">
                <ul>
                    <li
                        className="cursor-pointer text-xl font-medium text-orange-600 mb-2"
                        onClick={() => setTab(1)}
                    >
                        Plato Alpha Design
                    </li>
                    <li
                        className="cursor-pointer text-xl font-medium text-orange-600 mb-2"
                        onClick={() => setTab(2)}
                    >
                        Think Simple
                    </li>
                </ul>

                {tab === 1 && <Company company={work_places[0].company} />}
                {tab === 2 && <Company company={"Think Simple"} />}
            </div>
        </>
    );
};

export default Experience;
