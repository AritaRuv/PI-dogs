import React from "react";
import { useEffect } from "react";
import { getDetail, deleteDog } from '../actions/index.js';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import NavbarId from "./NavbarId";
import './style-sheets/details.css'
import Loading from "./Loading.js";
import notFound from '../images/404.jpg'

export function Details(){
    
    const myDog = useSelector((state) => state.details)
    const history = useHistory()
    const dispatch = useDispatch()
    const { id } = useParams()

    const handleDelete = (id) => {
        dispatch(deleteDog(id))
        history.push('/home')
    }

    useEffect(() =>{
        dispatch(getDetail(id))
    },[dispatch, id])


    return(
        <div className='background' >
            <NavbarId />
            {    myDog?.length > 0 
                ?Array.isArray(myDog) 
                ?
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
                            <div className='props'>min {myDog[0].weight_min} kg - max {myDog[0].weight_max} kg</div>
                            <div className='text_style'>Life Span</div>
                            <div className='props'>{myDog[0].life_span}</div> 
                            <div className='text_style'>Temperaments</div>
                            <div className='props'>
                        {myDog[0].temperaments.map((e,i,a) =>{ 
                           return a.length -1 === i ? e.name : e.name + ' - ' })}
                        </div>
                        {
                           myDog[0].createdDb ? <button className='button_delete' onClick={()=>handleDelete(id)}>Delete Breed</button> : null
                        }
                    </div>                
                </div>

            </div>
                :<div><img src={notFound} alt='not-found'/></div>
                :
                <div className='loading'>
                    <Loading/>
                </div>                            
            }
        </div>
    )}