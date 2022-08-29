import React from 'react';
import {Link} from 'react-router-dom';
import '../components/style-sheets/landingPage.css';


export default function LandigPage(){
    return(
        <div className='container'>
          
            <div className='button-div'>
            <Link to ='/home'>
                <button className='button'>Ingresar</button>
            </Link>
            </div>
        </div>
          
            
        
    )
}