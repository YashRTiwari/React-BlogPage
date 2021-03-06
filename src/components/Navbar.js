import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
    return (
        <nav className="navbar">
            <h1>Dojo Blog</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/create-blog'>New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar

