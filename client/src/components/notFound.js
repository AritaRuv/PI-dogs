import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom"; 

export default function NotFound(){
    return(
        <div>
            <Navbar/>
            <div>Breed not found</div>
            <div>Do yoy want to create it?</div>
            <li><Link to='/dog'><div className='button_navbar'>Create</div></Link></li>
        </div>
    )
}