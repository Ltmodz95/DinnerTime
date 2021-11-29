import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
export default function Header() {
    return (
        <header>
            <div className="logo">
                DT
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                </ul>
            </nav>
        </header>
    )
}
