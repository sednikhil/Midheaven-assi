import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
//import './Navbar.css'; // Add your CSS for styling
import '../pages/Navbar.css';

const Navbar = ({ onFilterClick }) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <button className="navbar-filter-button" onClick={onFilterClick}>
                    <i className="fas fa-filter"></i> Filter
                </button>
            </div>
            <div className="navbar-right">
                <Link to="/create" className="navbar-add-button">
                    Add New Astrologer
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
