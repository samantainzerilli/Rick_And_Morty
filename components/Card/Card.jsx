import { Link } from "react-router-dom";
import style from "./Card.module.css"
import { Connect, connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/action";
import { useState, useEffect } from "react";

 function Card({id, name, status, species, gender, origin, image, onClose, addFavorite, removeFavorite, myFavorites}) {
   const [isFav, setIsFav]= useState (false);
    const routes= '/'
  const handleFavorite=()=>{
   if(isFav){
      setIsFav(false);
      removeFavorite(id);

   }else{
      setIsFav(true);
      addFavorite({
         id, name, status, species, gender, origin, image, onClose, addFavorite, removeFavorite,
      })

   }
  }

  

  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);
   
   return (
      <div className={style.position}>
         <Link to={`/detail/${id}`} className={style.link}>
         <h2>{name}</h2>
          </Link>
         <div className={style.container}>
        <img className={style.image} src={image} alt={name} />
        <div className={style.overlay}>
        <div className={style.text}>
        <h3>{species}</h3>
        <h3>{gender}</h3>
        <h3>{status}</h3>
        <h3>{origin}</h3>
        <div className={style.buttons}>
    {isFav ? (
      <button  className={style.favBoton} onClick={handleFavorite}>❤️</button>
    ) : (
      <button  className={style.favBoton} onClick={handleFavorite}>🤍</button>
    )}
    <button className={style.closeButton} onClick={() => onClose(id)}>
      X
    </button>
  </div>
        </div>
       </div>
      </div>
   </div>
   );
}

const mapDispatchToProps=(dispatch)=>{
   return{
      addFavorite:(character)=>{dispatch(addFavorite(character))},
      removeFavorite:(id)=>{dispatch(removeFavorite(id))}
   }
   
}

const mapStateToProps=(state)=>{
   return{
      myFavorites:state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
