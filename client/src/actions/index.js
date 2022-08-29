import axios from 'axios';

export const GET_DOGS = 'GET_DOGS';
export const GET_DOGS_NAME = 'GET_DOGS_NAME';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const FILTER_BY_SIZE = 'FILTER_ BY_SIZE';
export const FILTER_BY_ORIGIN = 'FILTER_ BY_ORIGIN';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';
export const FILTER_TEMPS = 'FILTER_TEMPS';
export const GET_DOGS_ID = 'GET_DOGS_ID';


//FUNCION ASINCRONA
export function getDogs(){
    
    return async function(dispatch){
        try{
            var json = await axios.get('http://localhost:3001/dogs')
            return dispatch({
                type: GET_DOGS,
                payload: json.data
            })
        
        }catch(error){
            console.log(error)
    }}}

export function getNameDogs(name){
    return async function(dispatch){
        try {
            var json = await axios.get(`http://localhost:3001/dogs?name=${name}`)
            return dispatch({
                    type: GET_DOGS_NAME,
                    payload: json.data
                })

            } catch (error) {
          console.log(error)
    }}}

export function getDetail(id){
        return async function(dispatch){
            try{
                var json = await axios.get(`http://localhost:3001/dogs/${id}`)
                return dispatch({
                    type: GET_DOGS_ID,
                    payload: json.data
                })
            }catch (error) {
            console.log(error)
    }}}
    
export function getTemperaments(){
        return async function(dispatch){
           try {
                const json = await axios.get('http://localhost:3001/temperaments');
                return dispatch({
                    type: GET_TEMPERAMENTS,
                    payload: json.data
                });
    } catch (error) {
        console.log(error)
    }}}

export function filterDogsBySize(payload){
        return{
            type: FILTER_BY_SIZE,
            payload
    }}
        
export function filterDogsByOrigin(payload){
        return{
            type: FILTER_BY_ORIGIN,
            payload
    }}

export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }}

export function orderByWeight(payload){
    return{
        type: ORDER_BY_WEIGHT,
        payload
    }}

export function filterTemps(payload){
    return{
        type:FILTER_TEMPS,
        payload 
    }}
          
export function createDog(payload){
    return async function (dispatch){
        try {
            var json = await axios.post('http://localhost:3001/dog', payload)
            return json
        } catch (error) {
            console.log(error)
    }}}


