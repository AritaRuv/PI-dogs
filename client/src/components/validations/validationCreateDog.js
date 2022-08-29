

export function validateError(input){
    let errors = {}

    if(!input.name ){
        errors.name ='Name required'
    }else if(input.name.length<3){
        errors.name ='The name of the bread should be longer'
    }
    
    if(!input.height_min){
        errors.height_min ='Height min required'
    }else if(input.height_min<=0){
        errors.height_min ='Height min should be more than 0'
    }

    if(!input.height_max){
        errors.height_max ='Height max required'
    }else if(input.height_max<=0){
        errors.height_max ='Height max should be more than 0'
    } 
    if(!input.weight_min){
        errors.weight_min ='Weight min required'            
    }else if(input.weight_min<=0){
        errors.weight_min ='Weight min should be more than 0' 
    } 

    if(!input.weight_max) {
        errors.weight_max ='Weight max required'    
    }else if(input.weight_max <= 0){
        errors.weight_max ='Weight max should be more than 0'
    } 

    if(input.weight_max <= ('0' + input.weight_min)){
        errors.weight= 'Weight max shoud be bigger than weight min'    
    }

    if(input.height_max <= ('0' + input.height_min)){
        errors.height= 'Height max should be bigger than height min'    
    }
    return errors
        
}