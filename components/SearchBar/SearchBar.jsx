import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId]=useState('')
   const handleChange= (event)=> {
      setId(event.target.value)
   }
   return (
      <div>
         <input type='search' value={id} onChange={handleChange} />
         <button className={style.boton} onClick={()=> {onSearch(id); setId('')} }>Agregar</button>
      </div>
   );
}
