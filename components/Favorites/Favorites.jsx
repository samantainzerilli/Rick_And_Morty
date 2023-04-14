import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/action";
import style from "./Favorites" 

const Favorites= ()=>{
    const favorites=useSelector(state=>state.myFavorites);
    const dispatch=useDispatch();
    
    const handlerOrder=(event)=>{
        dispatch(orderCards(event.target.value))
    }
    const handleFilter=(event)=>{
        dispatch(filterCards(event.target.value))
    }
    return(
    <>
    <div>
        <select onChange={handlerOrder}>
            <option value="order" disabled="disabled">Order By</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter}>
        <option value="filter" disabled="disabled">Filter By</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknow">Unknow</option>
        </select>
    </div>
        {favorites.map(({id, name, species, gender,  image, onClose})=>{
                return  (
                
                    <Card 
                    key= {id}
                    id= {id} 
                    name={name} 
                    species={species} 
                    gender={gender}
                    image={image}
                    onClose={onClose}
                     />
                     
                );
            })}
    </>
    )
}

export default Favorites;