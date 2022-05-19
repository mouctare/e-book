import React, { useEffect, useState } from 'react'
import {useNavigate, useParams}  from'react-router-dom';
import "../scss/AddBook.scss"
import AddBookService from '../services/AddBookService';
import CategoryService from '../services/CategoryService';
import { axios } from 'axios';

export default function AddBook() {
  const [bookData, setBookData] = useState({title: '', categoryId: 0})
  const [categories, setCategories] = useState([]);
  const {bookId} = useParams();
  const history = useNavigate();

    
    useEffect(() =>{
     axios.get('/categories').then(response =>{
      setCategories(response.data)
      // Quand on remonte la categorie on met à jour celle ci dans le livre
      setBookData({
        title: '',
        categoryId: response.data[0].id
      })
    }).then(() =>{
      if(bookId){
        axios.get(`/books/${bookId}`).then(response =>{
          //Ici, on set la categorie
          setBookData({
            title: response.data.title,
            categoryId: response.data.category.id
          })
        })
      }
    })

  }, [bookId])

  
  const handleChange  = (event) => {
    const currentState = {...bookData};
    currentState[event.target.name] = event.target.value;
    setBookData(currentState)
     

  }

  const onSubmit  = (event) => {
    event.preventDefault();
    
    if(bookId){
       axios.put(`/books/${bookId}`,    {
         ...bookData
       })
       .then((response) => {
        history.push('/myBooks')
    }).catch(error => {
        console.log(error)
    })
  
    }else{
     AddBookService.createBook({
       ...bookData
     }).then((response) =>{
      history.push('/myBooks')
      }).catch(error => {
          console.log(error)
      })
    
    }
    

}
  return (
    <div className="container-add-book">
        <h1>Ajouter un livre</h1>
        <form onSubmit={onSubmit}>
            <div>
                <label>Nom du livre</label>
                <input name="title" value={bookData.title} type="text" onChange={handleChange} className="form-control"></input>
            </div>
            <div>
                <label>Catégorie du livre</label>
                <select name="categoryId" value={bookData.categoryId} onChange={handleChange} className="form-control">
               {/*    Ici, on map le tableau de category dans le select et on retourne une option */}
                  {categories.map(category => (
                     <option value={category.id} key={category.id}>{category.label}</option>
                  ))}
                </select>
            </div>
            <div className="container-submit">
                <input type="submit" value='Valider' className="btn btn-primary"></input>
            </div>

        </form>
    </div>
)
}
