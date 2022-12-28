import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedInIcon.svg';
import './Header.css';

function Header() {
    return (
        <nav>
            <div>
                <div>
                    <a href="src/components/header/Header"><LinkedInIcon/></a>
                </div>
            </div>
        </nav>
    )
}

export default Header;