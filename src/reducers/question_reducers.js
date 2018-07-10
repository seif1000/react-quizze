import quizQuestions  from './questions';
import {FIRST_QUEST} from '../action/index';

 

const initialState = {
     
     questions:quizQuestions,
     firstQuestion:quizQuestions[0],
     count:null,
  
}


export default function (state = initialState,action){
    switch (action.type) {
        case FIRST_QUEST:
           if(action.payload.type==='T'){
            return {
                ...state,
                firstQuestion:quizQuestions[action.payload.id],
                count:state.count +1,
                

            } 
        }
          
            return {
                ...state,
                firstQuestion:quizQuestions[action.payload.id],
               
            } 
           
            
            
         
    
        default:
           return state
    }
    
    
     
}