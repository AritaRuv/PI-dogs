import {
    GET_DOGS, 
    GET_DOGS_NAME, 
    GET_TEMPERAMENTS, 
    FILTER_BY_ORIGIN, 
    FILTER_BY_SIZE, 
    ORDER_BY_NAME, 
    ORDER_BY_WEIGHT, 
    FILTER_TEMPS, 
    GET_DOGS_ID, 
    DELETE_DOG_ID, 
    CLEAN_DETAILS 
} from '../actions/index.js'

const initialState = {
    dogs : [],
    allDogs : [],
    details : [],
    temperaments : []
}

function rootReducer (state = initialState, action){
    
    switch(action.type){
        case GET_DOGS:
            return{
                 ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case GET_DOGS_NAME:
            const name = action.payload
            if(Array.isArray(name)){
                return{
                    ...state,
                    dogs: name
            }}else{
                return{
                    ...state,
                    dogs: '1'
            }  
            }
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload
            }
        case GET_DOGS_ID:
            return{
                ...state,
                details: action.payload
            }
        case CLEAN_DETAILS:
            return{
                ...state,
                details: action.payload
            }
        case FILTER_BY_SIZE:
            
            const allDogsF = state.allDogs
            const small = allDogsF.filter(e => e.height_max < 32)
            const medium = allDogsF.filter(e => e.height_max >= 32 &&  e.height_max <= 50 )
            const large = allDogsF.filter(e => e.height_max > 50 )
            const sizeFilteredF = () => {
                if(action.payload === 'all') return allDogsF
                else if(action.payload === 'small') return small
                else if(action.payload === 'medium') return medium
                else return large 
            }
            const sizeFiltered = sizeFilteredF()

            return{
                ...state,
                dogs: sizeFiltered
            }
        case FILTER_BY_ORIGIN:

            const allDogs = state.allDogs
            const originFiltered = action.payload === 'created' ? allDogs.filter(e => e.createdDb) : allDogs.filter(e => !e.createdDb )
            console.log(originFiltered)

            if(originFiltered.length === 0){
                alert('No dogs created')
                return{
                    ...state,
                    dogs: allDogs
                }
            } else{
                return{
                    ...state,
                    dogs: action.payload === 'all' ? allDogs : originFiltered
                }
            }
        case ORDER_BY_NAME:
            const allDogsO = state.dogs
            console.log(allDogsO)
            const sorted_asc = allDogsO.sort(function (a,b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1
                    }
                    if(b.name > a.name){
                        return -1
                    }
                    return 0
                })
            const orderByName = action.payload === 'asc' ? sorted_asc : sorted_asc.reverse()

            return{
                ...state,
                dogs: orderByName
            }
        case ORDER_BY_WEIGHT:
            const allDogsTmin = state.dogs.filter(d => d.weight_min)
            const allDogsTmax = state.allDogs.filter(d => d.weight_max)
            
            const sorted_lighter = allDogsTmin.sort(function (a,b){
                    return a.weight_min - b.weight_min
            })
            const sorted_hevier = allDogsTmax.sort(function (a,b){
                return b.weight_max - a.weight_max
            })
            
            const orderByWeight = action.payload === 'lighter' ? sorted_lighter : sorted_hevier

            return{
                ...state,
                dogs: orderByWeight
            }
        case FILTER_TEMPS:
            
            const allDogsTemp = state.allDogs
            const temperamentsFiltered = allDogsTemp.filter(d => {
                return d.temperaments.some( temp => temp.name === action.payload)
            })

            return{
                ...state,
                dogs: action.payload === 'all' ? allDogsTemp : temperamentsFiltered
            }
        case 'POST_DOG':
            return{
                ...state
            }
        case DELETE_DOG_ID:
            return {
                ...state
            }

        default: return state
    }

}

export default rootReducer