import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">React</Link>
                <Link to="/counter" className="nav-item nav-link">Counter</Link>
                <Link to="/form" className="nav-item nav-link">Form</Link>
                <Link to="/list" className="nav-item nav-link">List</Link>
                <Link to="/todo" className="nav-item nav-link">Todo</Link>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export default Header;
