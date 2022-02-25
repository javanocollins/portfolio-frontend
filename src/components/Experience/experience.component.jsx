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

            <div className="flex">
                <ul>
                    <li className="cursor-pointer" onClick={() => setTab(1)}>
                        Plato Alpha Design
                    </li>
                    <li className="cursor-pointer" onClick={() => setTab(2)}>
                        Think Simple
                    </li>
                </ul>

                {tab === 1 && (
                    <Company company={"Plato Alpha"} job_title={job_title} />
                )}
                {tab === 2 && (
                    <Company company={"Think Simple"} job_title={job_title} />
                )}
            </div>
        </>
    );
};

export default Experience;
