import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation(){
    return (
        <ul className="NavList">
            <li className="NavList__item">
                <Link to="/registration" className="NavList__link">Registration</Link>
            </li>
            <li className="NavList__item">
                <Link to="/authorization" className="NavList__link">Authorization</Link>
            </li>
            <li className="NavList__item">
                <Link to="/game" className="NavList__link">Game Start</Link>
            </li>
        </ul>
        );
}
