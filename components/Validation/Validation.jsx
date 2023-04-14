const validation=(userData)=>{
    const errors={};

    if(!/^\S+@\S+\.\S+$/.test(userData.email)){
        errors.email= 'El email ingresado no es valido';
    }
    if(!userData.email){
        errors.email= 'Debe ingresar un email'
    }
    if(userData.email.length > 35){
        errors.email='El email no debe superar los 35 caracteres'
    }
    if(!userData.password.match(/\d/)){
        errors.password= 'La constraseña debe contener al menos un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password= 'La constraseña debe tener al menos entre 6 y 10 caracteres'
    }
    return errors;
}
export default validation;