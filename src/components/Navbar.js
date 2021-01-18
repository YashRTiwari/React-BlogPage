import React from 'react'
import './Navbar.css'

function Navbar(props) {
    return (
        <nav className="navbar">
            <h1>Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar

