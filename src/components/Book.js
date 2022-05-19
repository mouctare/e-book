import React from 'react'
import bookImg from './book.png';
import "../scss/Book.scss"

export class Book extends React.Component {
  render() {
      return (
        <div className="book">
        <div className="book-image">
            <img src={bookImg} alt="Book" />
        </div>
        <div>Titre : {this.props.title}</div>
        <div>Catégorie: {this.props.category}</div>
    </div>
   )
      
  }
}