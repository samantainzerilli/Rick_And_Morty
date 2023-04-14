import { useState } from "react";
import validation from "../Validation/Validation";
import style from './Form.module.css'


const Form= ({login})=>{
    const [errors, setErrors]= useState({
        email: '',
        password: ''
     })

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)

    }

    return (
        <div>
          <div className={style.contenedor}>
          </div>
          <div className={style.formulario}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" style={{color:'white'}}> Email:</label>
              <input type="text" name="email" value={userData.email} onChange={handleChange} />
              <p style={{color:'white'}}> {errors.email} </p>
              <label htmlFor="password" style={{color:'white'}}> Password:</label>
              <input type="text" name="password" value={userData.password} onChange={handleChange} />
              <p style={{color:'white'}}>{errors.password} </p>
              <button className={style.boton}>LOGIN</button>
            </form>
          </div>
        </div>
      );
}
export default Form;