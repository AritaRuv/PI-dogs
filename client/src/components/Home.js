import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';//hooks
import { getDogs, getTemperaments, filterDogsBySize, filterDogsByOrigin, orderByName, orderByWeight, filterTemps } from '../actions';
import DogCard from './Cards';
import Paginado from './Paginado';
import Navbar from './Navbar';
import Loading from './Loading'
import image from '../images/homeImage.jpg'
import notFound from '../images/404.jpg'
import './style-sheets/home.css'

export default function Home(){

    const dispatch = useDispatch() //constante para ir despachando acciones

    const allDogs = useSelector((state) =>state.dogs)
    const allTemperaments = useSelector((state) => state.temperaments)

    const [/*order*/, setOrder]= useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, /*setDogsPerPage*/] = useState(8)

   
    const indexOfLastDog = currentPage/*1*/ * dogsPerPage /*8*/
    const indexOfFirstDog = indexOfLastDog - dogsPerPage
    const currentDog = allDogs?.slice(indexOfFirstDog, indexOfLastDog)
    const paginado = (pageNumber) => setCurrentPage(pageNumber)

    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs())
    }
    
    function handleFilterSize(e){
        
        dispatch(filterDogsBySize(e.target.value))
       
    }

    function handleFilterOrigin(e){
        e.preventDefault() 
        dispatch(filterDogsByOrigin(e.target.value))
        setCurrentPage(1)
    }

    function handleFilterTemps(e){
        e.preventDefault()
        dispatch(filterTemps(e.target.value))
        setCurrentPage(1)    
    }

    function handleOrderName(e){
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handleOrderWeight(e){
        e.preventDefault()
        dispatch(orderByWeight(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }
   
    useEffect(()=>{
       dispatch(getDogs())
       dispatch(getTemperaments())
     },[dispatch])



    return (
        <div className='background'>
            <Navbar
            setCurrentPage={setCurrentPage} />
            <Paginado
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            paginado={paginado}
            currentPage={currentPage}/>
            <div className='image_home'>
                <img src={image} alt='home' className='img'/>
            </div>
            <div className='container_filters'>
                <div className='orders'>
                    <select className='select' onChange={e => {handleOrderName(e)}}>
                    <option hidden>Alphabetical Order</option>
                    <option className='option' value='asc'>A - Z</option>
                    <option className='option' value='desc'>Z - A</option>
                    </select>
                    <select className='select' onChange={e => {handleOrderWeight(e)}}>
                    <option hidden>Weight Order</option>
                    <option value='lighter'>Lighter</option>
                    <option value='heavier'>Heavier</option>
                    </select>
                </div>  
                <div className='filters'>
                    <select className='select' onChange={e => {handleFilterSize(e)}}>
                        <option hidden>Filter by Size</option>
                        <option value='all'>All</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                    <select className='select' onChange={e => {handleFilterOrigin(e)}}>
                        <option hidden>Filter by Origin</option>
                        <option value='all'>All</option>
                        <option value='created'>Created</option>
                        <option value='api'>Existing</option> 
                    </select>
                    <select className='select' onChange={e => {handleFilterTemps(e)}}>
                        <option hidden>Filter by Temperament</option>
                        <option value='all' >All</option>
                {
                    allTemperaments.map(temp =>{
                   return <option value={temp.name} key={temp.name}>{temp.name}</option>
                })
                }
                    </select>
                    <button className='refresh'onClick={e => {handleClick(e)}}>
               Refresh
                    </button>   
                </div>
            </div> 
          
            <div className='all_cards'>

            {   currentDog.length > 0 
                ? currentDog !== '1' 
                ? currentDog.map(e =>{
                    return(
                        <div key={e.id}>
                        <Link className='link' to={'/dogs/'+e.id}>
                        <DogCard
                        name={e.name}
                        image={e.image ? e.image : <img src='../images/dogs.jpg' alt='dogs-default'/>}
                        weight_max={e.weight_max}
                        weight_min={e.weight_min}
                        height_max={e.height_max}
                        height_min={e.height_min}
                        life_span={e.life_span}
                        temperaments={e.temperaments}
                        />
                        </Link>
                        </div>
                      
                        )
                }):<div><img src={notFound} alt='not-found'/></div>
                :<Loading/>
            }
            </div>
 
        </div>
    )

}