import React from "react";
import './style-sheets/paginado.css'

export default function Paginado({dogsPerPage, allDogs, paginado}){
    
    
        const pagesNumber = []
        
        for(let i=1; i<= Math.ceil(allDogs/dogsPerPage); i++){
            pagesNumber.push(i)
        }
    return (
        <nav className='container_paginado'>
            <div className='cubo'></div>
            <div className='paginado'>
                {pagesNumber &&
                pagesNumber.map(number =>(
                    <div className='number' key={number}>
                    <a onClick={() => paginado(number)}>{number}</a>
                    </div>
                ))}
            </div>
            <div className='cubo'></div>
        </nav>
    )
}