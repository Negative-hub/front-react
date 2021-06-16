import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="navbar-brand">Navbar</a>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            to='/'
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)