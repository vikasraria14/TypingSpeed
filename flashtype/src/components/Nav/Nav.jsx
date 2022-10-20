import React from 'react'
import logo from './../../assets/logo.png';
import './Nav.css';

const Nav = () => {
    return(
        <div className='nav-container'>
            <div className='nav-left'>
                <img className='flash-logo' src={logo} alt='logo' />
                <p className='flash-logo-text'>Flashtype</p>
            </div>
            <div className='nav-right'>
                <a
                    target="_blank"
                    className='nav-linkedin-link'
                    // href='https://github.com/NitinPasoriah'
                    href='https://www.linkedin.com/in/nitin-pasoriah/'
                    rel=''
                >
                    LinkedIn
                </a>
            </div>
        </div>
     );
}

export default Nav