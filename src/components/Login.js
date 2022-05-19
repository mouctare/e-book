import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../scss/Login.scss"
import logo from './logo.jpg';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmit  = (event) => {
    event.preventDefault();
    console.log("formulaire soumit");
  
  }
  return (
    <div className="login-container">
      <div>
      <div>
            <img src={logo} alt="Logo" />
        </div>
        <div className="title">
            Bienvenue sur Sharebook!
        </div>
        <div className="form-container">
           <form onSubmit={onSubmit}>
             <span>Mail: </span>
             <input type="text"  className="form-control" name="email" 
             value = {email}
            onChange = {(e) => setEmail(e.target.value)}
             />
             <span>Password: </span>
             <input type="password"  className="form-control" name="password" 
             value = {password}
             onChange = {(e) => setPassword(e.target.value)}
            />
            <div>
              <input type="submit" className="btn btn-primary" value="OK"/>
            </div>
           </form>
        </div>
        <div><Link to="/addUser">M'inscrire</Link></div>
      </div>
    </div>
  )
}
