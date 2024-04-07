import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: true
        };
    }

    toggleCollapse = () => {
        this.setState(prevState => ({
            isCollapsed: !prevState.isCollapsed
        }));
    };

    render() {
        const { isCollapsed } = this.state;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">ExerTracker</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={this.toggleCollapse} 
                        aria-expanded={!isCollapsed}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Exercises</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Create Exercise Log</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user" className="nav-link">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
