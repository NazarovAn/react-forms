import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component{
  render() {
    return (
        <ul className="NavList">
            <li>
                <Link exact to="/">HOME</Link>
            </li>
            <li>
                <Link to="/registration">Registration</Link>
            </li>
            <li>
                <Link to="/authorization">Authorization</Link>
            </li>
        </ul>
    );
}
}
