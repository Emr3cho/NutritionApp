import React from 'react'
import './Layout.css'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Index</Link></li>
                <li><Link to='/add'>Add</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Layout