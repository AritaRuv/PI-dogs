import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { createDog, getDogs, getTemperaments } from '../actions/index.js';
import { useDispatch, useSelector } from "react-redux";
import { validateError } from "./validations/validationCreateDog.js";
import Navbar from './NavbarS'
import './style-sheets/createDog.css'



export function CreateDog(){
    
    const dispatch = useDispatch()
    const history = useHistory()
    const allDogs = useSelector((state)=> state.allDogs)
    const temperaments = useSelector((state) => state.temperaments)
    const [errors, setError] = useState({})
    const [validate, setValidate] = useState(false)
    const [input, setInput] = useState({
        name: '',
        image: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        life_span: '',
        temperaments: []
    })

    useEffect(()=>{
      dispatch(getDogs())
      dispatch(getTemperaments())
    }, [dispatch])

    const handleChange =(e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setError(validateError({
            ...input,
            [e.target.name]: e.target.value
        }))
        if(!errors.name && !errors.height_min && !errors.height_max && !errors.weight_min && !errors.weight_max  && !errors.weight  && !errors.height ){
          setValidate(true)
        }else setValidate(false)
    }
    const handleDelete = (el) => {
      setInput({
        ...input,
        temperaments: input.temperaments.filter(e =>{ 
          return e !== el.target.value})
      })
    }
    const handleSelect = (e) => {
        if(!input.temperaments.includes(e.target.value)){
          setInput({
            ...input,
            temperaments:[...input.temperaments, e.target.value]  
        })
        }
    }
    const handleSubmit = (e) => {

          const nameF = allDogs.filter(dog => dog.name === input.name)
          if(nameF[0]) return alert('This breed already existis, please change the name')
          
          dispatch(createDog(input),[])
          e.preventDefault();
          alert('Dog breed created')
          setInput({
              name: '',
              image: '',
              height_min: '',
              height_max: '',
              weight_min: '',
              weight_max: '',
              life_span: '',
              temperaments: []
          })
          history.push(`/home`)
    }
    
    return(
      <div className="a">
        <Navbar/>
        
          <div className='container_form'>
            <form className='form' >
            <h2 className='h1'>Create your Breed!</h2>
              <div className='div'>
                <label className='label'>Name</label>
                <input className='input'
                  onChange={(e) =>handleChange(e)}
                type='text'
                value={input.name}
                name='name'
                />
                {errors.name && (
                <div className='p_error'>{errors.name}</div>
                )}
              </div>
              <div className='div_wh'>
                <label className='label'>Height</label>
                <div className='d'>
                  <input
                    placeholder='Min'
                    onChange={(e) =>handleChange(e)}
                    type='number'
                    value={input.height_min}
                    name='height_min'
                    className='input_wh'
                   />
                  <input
                    placeholder='Max'
                    onChange={(e) =>handleChange(e)}
                    type='number'
                    value={input.height_max}
                    name='height_max'
                    className='input_wh'
                  />
              </div>
              <div className='errors'>
              {
                  errors.height_max && (
                    <div className='p_error'>{errors.height_max}</div>
                  )}
                {
                  errors.height && (
                    <div className='p_error'>{errors.height}</div>
                  )}
                                  {
                  errors.height_min && (
                    <div className='p_error'>{errors.height_min}</div>
                  )}
              </div>
                

            </div> 
            <div className='div_wh'>
              <label className='label'>Weight</label>
                <div className='d'>
                  <input
                    placeholder='Min'
                onChange={(e) =>handleChange(e)}
                type='number'
                value={input.weight_min}
                name='weight_min'
                className='input_wh'
                  />

                  <input
                    placeholder='Max'
                    onChange={(e) =>handleChange(e)}
                    type='number'
                    value={input.weight_max}
                    name='weight_max'
                    className='input_wh'
                  />

                </div>
                <div className='errors'>
                  {errors.weight_min && (
                    <div className='p_error'>{errors.weight_min}</div>
                  )}

                  {errors.weight_max && (
                    <div className='p_error'>{errors.weight_max}</div>
                  )}

                  {errors.weight && (
                    <div className='p_error'>{errors.weight}</div>
                  )}
                  
                </div>
                
            </div>
            <div className='div'>
              <label className='label'>Life span</label>
              <input
                onChange={(e) =>handleChange(e)}
                type='number'
                value={input.life_span}
                name='life_span'
                className='input'
                />
            </div>
            <div className='div'>
              <label className='label'>Image</label>
              <input
                onChange={(e) =>handleChange(e)}
                type='text'
                value={input.image}
                name='image'
                className='input'
              />
            </div>
            <div className='form_temperaments'>
              <label className='label'>Temperaments</label>
              <select className='form_select' onChange={(e) => handleSelect(e)}>
                {
                temperaments.map((temp, i) => <option key={i} value={temp.name}> {temp.name}</option>)
                }
              </select>
            </div >
            <div className='div_temp'>
            {
              input.temperaments.map( (temp, i) => {
               return (
                <div className='temp_button' key={i}>
                <span>{temp}</span>
                <button className='temp_buttonx' value={temp} type="button" onClick={(e) => handleDelete(e)}>X</button>
              </div>)})
            }
            <div className='errors'>
                  {errors.temperaments && (
                    <div className='p_error'>{errors.temperaments}</div>
                  )}
            </div>
            </div>
            <div className='div-button'>
            <button className='button'  type='submit' disabled={!validate} onClick={(e)=>handleSubmit(e)} >Create </button>   
            </div>    
                       
          </form>
          
          </div>  
      </div>
    )}