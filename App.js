import './App.css';
import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


//const URL_BASE= 'https://be-a-rym.up.railway.app/api/character'
//const APY_KEY='f90eaa3b8a95.5106888823f5980622af'

const email= "samantainzerilli@gmail.com"
const password= "123sam"
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const location= useLocation();
   const navigate=useNavigate();
    const [characters,setCharacters]=useState([]);
   const [acces, setAccess]=useState(false);

   const login = async(userData)=> {
      try {
         const { email, password } = userData;
         const {data}= await  axios(URL + `?email=${email}&password=${password}`)

        
     
            const { access } = data;
            setAccess(access);
            access && navigate('/home');
         
      } catch (error) {
         console.log(error.message)
      }
    
   }
   

   useEffect (()=>{
      !acces && navigate('/')
   }, [acces])

   const onSearch= async(id)=> {
      try {
         const{data}= await   axios(`http://localhost:3001/rickandmorty/character/${id}`)
    
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
             }
      } catch (error) {
         alert('¡No hay personajes con este ID!');

      }

   }

   const onClose= (id)=>{
      const charactersFiltered= characters.filter(character=>character.id !== id)
      setCharacters(charactersFiltered);
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
