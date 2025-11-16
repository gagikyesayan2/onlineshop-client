import React from 'react';


const SignIn = () =>{
   
    const sendSignInForm = (e) =>{
       e.preventDefault();
       
    }
    
return(
    <div onClick={(e) => sendSignInForm(e)} className="signUp">
        <form action="">
            <label htmlFor="">Email</label>
            <input type="email" />   
            <label htmlFor="">Password</label>
            <input type="password" />  
            <button>Submit</button>
        </form>    
    </div>
)

}

export default SignIn;