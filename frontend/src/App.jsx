import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

    const [name,setName] =useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submit = (e)=>{
      e.preventDefault();

      axios.post("http://localhost:3000/register",{name,email,password})
      .then((user)=>{
        console.log(user);
        alert(user.data);
        setName="";
        setEmail="";
        setPassword="";
      })
      .catch((err)=>{
        console.log("error founded",err)
      })
    }

  return (
    <div>
      <form onSubmit={submit} >
          <h2>Register</h2>
         <div className="input-group">
              <h4>Name</h4>
              <input type="text" placeholder='Enter your name' required value={name} onChange={(e)=>setName(e.target.value)} />
         </div>

         <div className="input-group">
              <h4>Email</h4>
              <input type="email" placeholder='Enter your email' required value={email} onChange={(e)=>setEmail(e.target.value)} />
         </div>

         <div className="input-group">
              <h4>Password</h4>
              <input type="password" placeholder='Enter your password'required value={password} onChange={(e)=>setPassword(e.target.value)}/>
         </div>

         <button className='register-btn'>Register</button>
        
          <div className="login">
          <p>Already have an account</p>
          <button>Login</button>
          </div>
         
      </form>
      
    </div>
  )
}

export default App
