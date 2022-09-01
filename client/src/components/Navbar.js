import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import image from '../images/navbar.png'
import './style-sheets/navBar.css'

export default function Navbar(){
    
    return(
        <nav className='container_navbar'>
            <div className='image'>
                <img src={image} alt='nav'></img>
            </div>

            <ul className='list'>
                <li><Link to='/home'><div className='button_navbar'>Home</div></Link></li>
                <li><Link to='/dog'><div className='button_navbar'>Create</div></Link></li>
            </ul>
            <div className='search_bar'>
            <SearchBar/>
            </div>

            


        </nav>
    )
}