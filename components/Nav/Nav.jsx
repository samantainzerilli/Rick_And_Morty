import SearchBar from "../SearchBar/SearchBar"
import { Link, NavLink } from "react-router-dom";
import style from "./Nav.module.css"
const Nav= ({onSearch}) =>{
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button className={style.boton}><NavLink to= '/about'>ABOUT</NavLink></button>
            <button className={style.boton}><NavLink to= '/'>LOGOUT</NavLink></button>
            <button className={style.boton}><NavLink to= '/home'>HOME</NavLink></button>
            <button className={style.boton}><NavLink to= '/favorites'>FAVORITES</NavLink></button>
        </nav>
    )


}
export default Nav;