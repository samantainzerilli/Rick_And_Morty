import { useState } from "react";
import style from './SearchBar.module.css';
import { MdSearch } from 'react-icons/md';

export default function SearchBar({onSearch}) {
   const [id, setId]=useState('')
   const handleChange= (event)=> {
      setId(event.target.value)
   }
   return (
      <div>
         <input className={style.contenedor} type='search' value={id} onChange={handleChange} />
         <button className={style.boton} onClick={()=> {onSearch(id); setId('')} }>
  <MdSearch className={style.icono} />
</button>
      </div>
   );
}
