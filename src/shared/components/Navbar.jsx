import React, { useState } from 'react';
import { Link }  from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

    return (
        <div className='navbar'>
             <Link
             onMouseLeave={onMouseLeave}
             to={'/home'}>
                <span className='nav-links'>
                    Home Page
                </span>
            </Link>
            <Link 
            onMouseEnter={onMouseEnter}
            to={'/rental-equipment'}>
                <span className='nav-links'>
                    Rental Equipment
                </span>
            </Link>
             {dropdown && <Dropdown />}
            <Link 
            onMouseLeave={onMouseLeave}
            to={'/locations-served'}>
                <span className='nav-links'>
                    Locations Served
                </span>
            </Link>
              <Link
             onMouseLeave={onMouseLeave}
             to={'/about-us'}>
                <span className='nav-links'>
                    About Us
                </span>
            </Link>
            <Link
            onMouseLeave={onMouseLeave}
            to={'/contact'}>
                <span className='nav-links'>
                    Contact Us
                </span>
            </Link>
            {/* <Link to={'/songs-list'}>
                <span className='app-link'>
                    Song List
                </span>
            </Link>
            <Link to={'/books-list'}>
                <span className='app-link'>
                    Book List
                </span>
            </Link> */}
            <Link
            onMouseLeave={onMouseLeave}
            to={'/login'}>
                <span className='SLnav-links'>
                    Customer: Signup/Login
                </span>
            </Link>
        </div>
    )
}
