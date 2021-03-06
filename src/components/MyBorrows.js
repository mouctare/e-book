import React, { useEffect, useState } from 'react'
import { Book } from './Book';

export default function MyBorrows() {

  const [myBorrows, setMyBorrows] = useState([]);


   useEffect(() => {
  
      setMyBorrows([
          {
              lender: "toto",
              borrower: "tata",
              book: {
                  name: "tintin",
                  category: {
                      label: "BD"
                  }
              }
          }
      ])
  }, [])
  
  const closeBorrow = (borrowId) => {
  }
  
  return (
      <div className="container">
          <h1>Mes emprunts</h1>
          <div className="list-container">
              {myBorrows.map((borrow) => {
                  return (
                      <div className="borrow-container">
                          <Book
                              title={borrow.book.title}
                              category={borrow.book.category.label}
                              lender={borrow.lender.firstName + " " + borrow.lender.lastName}
                              askDate={borrow.askDate}
                              closeDate={borrow.closeDate}>
                          </Book>
                          <div className="text-center">
                              {borrow.closeDate ? "" : <button className="btn btn-primary btn-sm" onClick={() => closeBorrow(borrow.id)}>Clore</button>}
                          </div>
                      </div>
                  )
              })}
          </div>
          {myBorrows.length === 0 ? <div>Vous n'avez pas d'emprunt</div> : null}
      </div>
  )
}