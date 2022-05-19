import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../scss/AddUser.scss"
import AddUserService from '../services/AddUserService';

export default function AddUser() {
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFristName] = useState("");
  const [password, setPassword] = useState("");


  
  const onSubmit = (event) => {
    event.preventDefault();

    const user = {email, firstName, lastName, password}

    AddUserService.createUser(user).then((response) =>{
    
      console.log(response.data)

   }).catch(error => {
      console.log(error)
  })
}
  

 
  return (
    <div className="add-user-container">
      <div>
        <h1>M'inscrire</h1>
        <div>
          <form onSubmit={onSubmit}>
            <div>
              <label>email</label>
              <input name="email" type="text" className="form-control" 
               value = {email}
               onChange = {(e) => setEmail(e.target.value)}
               />
            </div>
            <div>
              <label>nom</label>
              <input name="lastName" type="text" className="form-control" 
              value = {lastName}
               onChange = {(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label>prenom</label>
              <input name="firstName" type="text" className="form-control" 
              value = {firstName}
               onChange = {(e) => setFristName(e.target.value)}
               />
            </div>
            <div>
              <label>password</label>
              <input name="password" type="password" className="form-control" 
              value = {password}
               onChange = {(e) => setPassword(e.target.value)}
               />
            </div>
            <div className="container-valid text-center">
              <input type="submit" value="Valider" className="btn btn-primary"/>
            </div>
          </form>
        </div>
        <div><Link to="/">Retour à l'accueil</Link></div>
      </div>
    </div>
  )
}

