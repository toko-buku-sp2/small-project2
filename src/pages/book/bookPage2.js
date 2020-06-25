// Belum Disesuaikan
import React from 'react';
import Book from '../../components/book';

const BookPage = ()=>{
    const books=[{
    id:4,
    title:"ini judul",
    isbn:"null",
    authorName:"ini author",
    synopsis:"ini sinopsis",
    publicationDate:"14-05-2020 07:00:00",
    price:80000,
    bookStatus:"FOR_SELL"
},{
    id:5,
    title:"ini judul",
    isbn:"null",
    authorName:"ini author",
    synopsis:"ini sinopsis",
    publicationDate:"14-05-2020 07:00:00",
    price:80000,
    bookStatus:"FOR_SELL"
},{
    id:6,
    title:"ini judul",
    isbn:"null",
    authorName:"ini author",
    synopsis:"ini sinopsis",
    publicationDate:"14-05-2020 07:00:00",
    price:80000,
    bookStatus:"FOR_SELL"
},{
    id:7,
    title:"ini judul",
    isbn:"null",
    authorName:"ini author",
    synopsis:"ini sinopsis",
    publicationDate:"14-05-2020 07:00:00",
    price:80000,
    bookStatus:"FOR_SELL"
},]
return (
    <div className="App">
      <header className="App-header">
        <div className="container m-3">
        <h1 className="signup-header">Cilsy</h1>
        </div>
        <div className="container">
          <div className="row">
            {books && books.map((val, key) => 
              <Book key={key} book={val}/> )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default BookPage