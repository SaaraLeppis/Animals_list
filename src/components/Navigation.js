import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/animals">Animals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;