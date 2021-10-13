
import React, {Component} from 'react'
import {navlist} from '../helpers/Data'
import './Navbar.css'


class Navbar extends Component
{
    items()
    {
        const b = navlist.map(item => 
        {
            return (
                <li className = 'nav-item me-2' key = {Math.random()}>
                    <a className = 'nav-link' href = {`#${item.toLowerCase()}`}>{item}</a>
                </li>)
        })
       return b
    }
    
    render()
    {
        return (
            <nav className = 'navbar navbar-expand-md navbar-dark fixed-top py-2'>
                <div className = 'container'>
                    <a className = 'navbar-brand' href = '#hero'>HkG</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggler">Ξ</button>
                    <div className = 'collapse navbar-collapse' id = 'toggler'>
                        <ul className = 'navbar-nav ms-auto'>
                            {this.items()}
                        </ul>
                    </div>
                </div>
            </nav>
     )      
    }
}

export default Navbar
