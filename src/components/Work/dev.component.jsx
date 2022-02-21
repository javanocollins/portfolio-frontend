import React from 'react'

import logo1 from "../..//images/logos/logo-1.png";
import logo2 from "../..//images/logos/logo-2.png";
import logo3 from "../..//images/logos/logo-3.png";
import logo4 from "../..//images/logos/logo-4.png";
import logo5 from "../..//images/logos/logo-5.jpg";
import logo6 from "../..//images/logos/logo-6.png";
import logo7 from "../..//images/logos/logo-7.png";
import logo8 from "../..//images/logos/logo-8.png";
import logo9 from "../..//images/logos/logo-9.png";

const DevWork = () => {
    const logos = [
      logo2,
      logo9,
      logo6,
      logo3,
      logo5,
      logo8,
      logo4,
      logo7,
      logo1,
    ];

    const style = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 350px)",
    };
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 md:row-gap-8 md:gap-y-12 md:gap-9 mt-12`}>
            {logos.map((img, idx) => (
                <img className="md:w-96" src={img} />
            ))}
        </div>
    );
};

export default DevWork