import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./action"

const initialState={
    myFavorites:[],
    allCharacters:[]
}
const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'ADD_FAVORITE':
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        
      case 'REMOVE_FAVORITE':
        return { ...state, myFavorites: action.payload };
        
        case FILTER:
            const allCharsFiltered=state.allCharacters.filter(char=>char.gender === action.payload)
            return{
                ...state,
                myFavorites:allCharsFiltered
            }
        case ORDER:
             return {
                ...state,
                myFavorites:
                action.payload==="Ascendente"
                ? state.allCharacters.sort((a,b)=>a.id-b.id)
                : state.allCharacters.sort((a,b)=>b.i-a.id)

            }

        default:
            return {...state};
    }
}

export default rootReducer;