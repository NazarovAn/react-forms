import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component{
  render() {
    return (
        <ul className="NavList">
            <li className="NavList__item">
                <Link exact to="/" className="NavList__link">Home</Link>
            </li>
            <li className="NavList__item">
                <Link to="/registration" className="NavList__link">Registration</Link>
            </li>
            <li className="NavList__item">
                <Link to="/authorization" className="NavList__link">Authorization</Link>
            </li>
            <li className="NavList__item">
                <Link to="/game-start" className="NavList__link">Game Start</Link>
            </li>
        </ul>
        );
    }
}
