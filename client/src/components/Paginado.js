import React from "react";
import './style-sheets/paginado.css'

export default function Paginado({dogsPerPage, allDogs, paginado, currentPage}){
    
    
        const pagesNumber = []
        
        for(let i=1; i<= Math.ceil(allDogs/dogsPerPage); i++){
            pagesNumber.push(i)
        }
    
        return (
        <nav className='container_paginado'>
            <div className='cubo'></div>
            <div className='paginado'>
                <button className='arrow' onClick={() =>paginado(currentPage === 1? currentPage : currentPage -1)}>⇚</button>
                {pagesNumber &&
                pagesNumber.map(number =>(
                    <div  onClick={() => paginado(number)} className={currentPage === number ?'number_active' : 'number'} key={number}>
                    <a>{number}</a>
                    </div>
                ))}
                <button className='arrow' onClick={() =>paginado(currentPage === pagesNumber.length ? currentPage : currentPage + 1)} >⇛</button>
            </div>
            <div className='cubo'></div>
        </nav>
    )
}