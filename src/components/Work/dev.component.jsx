import React from "react";

const DevWork = () => {
    const project = [{ title: "DHC19 COVID19 Testing Platform",  description: "Developed APIs"}];

    const style = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 350px)",
    };
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2 md:row-gap-8 md:gap-y-12 md:gap-9 mt-12`}
        ></div>
    );
};

export default DevWork;
