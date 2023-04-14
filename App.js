import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


const URL_BASE= 'https://be-a-rym.up.railway.app/api/character'
const APY_KEY='f90eaa3b8a95.5106888823f5980622af'

function App() {
   const [characters,setCharacters]=useState([]);
   const location= useLocation();
   const navigate=useNavigate();
   const [acces, setAcces]=useState(false);

   const email= "samantainzerilli@gmail.com"
   const password= "123sam"

   const login= (userData)=>{
      if(userData.email === email && userData.password===password){
         setAcces(true);
         navigate("/home")
      }
   }

   useEffect (()=>{
      !acces && navigate('/')
   }, [acces])

   const onSearch=(id)=> {
      axios(`${URL_BASE}/${id}?key=${APY_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose= (id)=>{
      const charactersFiltered= characters.filter(character=>character.id !== (id))
      setCharacters(charactersFiltered)
   }

 
   return (
      <div className='App'>
         {location.pathname==='/'? <Form login= {login} /> : <Nav onSearch= {onSearch} />}

         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/detail/:id' element= {<Detail/>}/>
         </Routes>
         
     
         
      </div>
   );
}

export default App;
