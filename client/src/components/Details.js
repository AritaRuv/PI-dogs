import React from "react";
import { useEffect } from "react";
import { getDetail } from '../actions/index.js';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavbarId from "./NavbarId";
import './style-sheets/details.css'
import Loading from "./Loading.js";

export function Details(props){
   
    console.log(props)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() =>{
        dispatch(getDetail(id))
    },[dispatch, id])
    const myDog = useSelector((state) => state.details)

    return(
        <div className='background' >
            <NavbarId/>
            {
                
                myDog.length > 0 ?
                
                <div className='details_container'>
                    <h4 className='name'>{myDog[0].name}</h4>
                <div className='details_card'>
                    
                    <div className='container_img'>
                    <img className='details_img' src={myDog[0].img? myDog[0].img: myDog[0].image} alt='dog'/>
                    </div>
                    <div className='details_text'>
                    <div className='text_style'>Height</div>
                    <div className='props'>min {myDog[0].height_min} cm - max {myDog[0].height_max} cm</div>
                    <div className='text_style'>Weight</div>
                    <div  className='props'>min {myDog[0].weight_min} kg - max {myDog[0].weight_max} kg</div>
                    <div className='text_style'>Life Span</div>
                    <div  className='props'>{myDog[0].life_span}</div> 
                    <div className='text_style'>Temperaments</div>
                    <div  className='props'>
                        {myDog[0].temperaments.map((e,i,a) =>{ 
                           return a.length -1 === i ? e.name : e.name + ' - ' })}
                    
                    </div>
                    </div>
                
                </div>
                </div>: <p>Loading...</p>
                

                
            }
        </div>
    )}