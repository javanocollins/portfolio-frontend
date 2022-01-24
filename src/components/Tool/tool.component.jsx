import React from 'react';

// Package imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Tool = ({icon, title}) => {
    return (
        <div className="text-center">
            <FontAwesomeIcon
                icon={icon}
                title={title}
                className="text-white text-8xl mb-4"
            />
            <p className="text-white mt-5">{title}</p>
        </div>
    );
}

export default Tool
