import React from "react";
import '../components/style-sheets/card.css'

export default function DogCard({id, name, image, weight_max, weight_min, height_max, height_min, life_span, temperaments, createdDb}){

    return(
        <div>
        <div className="card_title">{ name }</div>
        <div className="card" >
            <div className='card_img_container'>
            <img className='card_img' src={image} alt='dog' width='100px'/>
            </div>
            <div className='text_container'>
                <div className='props_title'>Weight</div>
                <div className='props_description'>from {weight_min} kg to {weight_max} kg</div>
                <div className='props_title'>Height</div>
                <div className='props_description'>from {height_min} cm to {height_max} cm</div>
                <div className='props_title'>Life Span</div>
                <div className='props_description'>{life_span} </div>
                <div className='props_title'>Temperaments</div>
                    
                   
                    <div className="temperaments">
                       {    temperaments.map( (e, i, a) =>{
                            if(a.length -1 === i ) return e.name
                            else return e.name + ' - '})
                        }
                
                    </div>
            </div>
            </div>  
        </div>
    
    )
}

