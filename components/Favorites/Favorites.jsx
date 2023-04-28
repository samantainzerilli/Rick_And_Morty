import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/action";
import style from "./Favorites.module.css";

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
        <select className={style.color} onChange={handlerOrder}>
            <option value="order" disabled="disabled">Order By</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
        <select className={style.color} onChange={handleFilter}>
        <option value="filter" disabled="disabled">Filter By</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknow">Unknow</option>
        </select>
    </div>
        {favorites.map(fav=>{
                return  (
                
                    <Card 
                    key= {fav.id}
                    id= {fav.id} 
                    name={fav.name} 
                    image={fav.image}
                    onClose={fav.onClose}
                     />
                     
                );
            })}
    </>
    )
}

export default Favorites;