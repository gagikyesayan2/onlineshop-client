import React from 'react';


const SignUp = () =>{
   
    const sendSignUpForm = (e) =>{
       e.preventDefault();
       
    }
    
return(
    <div onClick={(e) => sendSignUpForm(e)} className="signUp">
        <form action="">
            <label htmlFor="">Email</label>
            <input type="email" />   
            <label htmlFor="">Password</label>
            <input type="password" />  
            <label htmlFor="">Repeat password</label>
            <input type="password" /> 
            <button>Submit</button>
        </form>    
    </div>
)

}

export default SignUp;