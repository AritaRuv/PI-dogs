import React from "react";
import { Link } from 'react-router-dom';
import { cleanDetails } from '../actions';
import {useDispatch, useSelector } from 'react-redux';//hooks
import image from '../images/navbar.png'
import SearchBarId from "./SearchBarId";
import './style-sheets/navBar.css'

export default function NavbarId(){
    
    const dispatch = useDispatch()
    const details = useSelector(state=> state.details) 

    const cleanD = (e) => {
        if(details.length){
            dispatch(cleanDetails())
        } 
    }
    return(

        <nav className='container_navbar'>
            <div className='image'>
                <img src={image} alt='nav'></img>
            </div>

            <ul className='list'>
                <li onClick={(e) => cleanD(e)}><Link to='/home'><div className='button_navbar'>Home</div></Link></li>
                <li><Link to='/dog'><div className='button_navbar'>Create</div></Link></li>
            </ul>
            <div className='search_bar'>
            <SearchBarId/>
            </div>
        </nav>

    )
}