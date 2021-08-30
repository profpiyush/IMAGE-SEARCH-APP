import React from 'react'
import "../style.css"

const Image = ({ urls }) => {
    return (
        <li className="image">
            <img src={urls.small} alt="abc" />
        </li>
    );
}

export default Image
