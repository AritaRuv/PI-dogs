import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getNameDogs } from "../actions";
import './style-sheets/searchBar.css'

export default function SearchBar({setCurrentPage}){
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e){
        e.preventDefault()
        //e.target.value es el valor del input
        setName(e.target.value)    
    }

    async function handleSubmit(e){
        e.preventDefault()
        if(name === '') return alert('no name')
        await dispatch(getNameDogs(name))
        setName('')
        setCurrentPage(1)
        //name es mi estado local
    }

return(
    <div className='searchbar_container'>
    <div className='input_container'>
    <input type='text' className='input__field w-100' placeholder='Input text' value={name} onChange={(e)=> handleInputChange(e)}/>
    <label className='input__label'> Breed</label>
    </div>
    <button className='button_search' type='submit' onClick={(e)=>handleSubmit(e)}>Search</button>
    </div>
    )}
    




