import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './style-sheets/searchBar.css'

export default function SearchBarId(){
    const [id, setId] = useState('')

    function handleInputChange(e){
        e.preventDefault()
        //e.target.value es el valor del input
        setId(e.target.value)    
    }


return(
    <div className='searchbar_container'>
        <div className='input_container'>
            <input type='text' className='input__field w-100' placeholder='Input text' value={id} onChange={(e)=> handleInputChange(e)}/>
            <label className='input__label'> ID</label>
        </div>
        <Link to={'/dogs/'+ id}> <button className='button_search' type='submit'>Search</button> </Link>
    </div>
    )}
    




