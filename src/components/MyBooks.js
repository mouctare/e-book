import React, { useEffect, useState } from 'react';
import { Book } from './Book';
import { Link } from 'react-router-dom';
import "../scss/MyBook.scss"
import MyBookService from '../services/MyBookService';
  

export default function MyBooks () {
    
  const [myBooks, setMyBooks] = useState([]);


  const getBooks = () =>{
    MyBookService.getBooks().then((response)=>{
      setMyBooks(response.data)
      console.log(response.data);
    }).catch(error =>{
      console.log(error);
    })
  }

  useEffect(() => {
    getBooks();

  }, [])
  
  

     return(
      <div className="container">
        <h1>Mes livres</h1>
        <div className="list-container">
          {myBooks.length === 0 ? "Vous n'avez pas déclaré de livres" : null}
          {myBooks.map((book) => (<div key={book.id} className="mybook-container">
            <Book title={book.title} category={book.category.id}></Book>
            <div className="container-buttons">
              <Link to={`/addBook/${book.id}`}>
                <button className="btn btn-primary btn-sm">Modifier</button>
              </Link>
              <button className="btn btn-primary btn-danger">Supprimer</button>
            </div>
          </div>))}
        </div>
        <Link to="/addBook"><button className="btn btn-primary btn-sm">Nouveau livre</button></Link>
      </div>)

    }

