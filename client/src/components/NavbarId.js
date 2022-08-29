import React from "react";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDogs } from '../actions';
import {useDispatch } from 'react-redux';//hooks
import image from '../images/navbar.png'
import SearchBarId from "./SearchBarId";
import './style-sheets/navBar.css'

export default function NavbarId(){
    
    const dispatch = useDispatch() 
    

    useEffect(()=>{
        dispatch(getDogs())
      },[dispatch])
 
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
            <SearchBarId/>
            </div>
        </nav>

    )
}