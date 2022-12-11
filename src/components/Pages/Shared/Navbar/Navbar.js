import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../../../images/logo.jpg'
import './navbar.css'
const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false)
    const handleMenuClick = ()=>{
        setMenuClick(!menuClick)
        console.log(menuClick)
    } 
    return (
        <nav className="nav-container">
            <Link to="/"><img width="60px" src={logo} alt=""/></Link>
            <div onClick={handleMenuClick} className="menu-bar">
                <i className={menuClick ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={menuClick ? 'active menu' : 'navigation menu'}>
                <li className="menu-item"><Link to="/" className="menu-link">Home</Link></li>
                <li className="menu-item"><a href="#skills" className="menu-link">About</a></li>
                <li className="menu-item"><a href="#project" className="menu-link">Project</a></li>
                <li className="menu-item"> <Link to="/blog" className="menu-link">Blog</Link> </li>
                <li className="menu-item"><a href="https://drive.google.com/file/d/1xReX9LdKY46yjihm79znHJtQQUI5aJF0/view" className="menu-link">Resume</a></li>
                <li className="menu-item menu-item-contact"><a href="#contact" className="menu-link">Contact</a></li>
                
                
            </ul>
            
        </nav>
    );
};

export default Navbar;