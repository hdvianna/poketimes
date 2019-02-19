import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darker-3">
            <div className="container">
                <a className="brand-logo">
                    Poke'Times
                </a>
                <ul className="right">

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>

                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);

