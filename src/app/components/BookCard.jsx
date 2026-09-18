"use client"
import Link from 'next/link';
import React, { use, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const BookCard = ({book}) => {
    const {id, title, author, description} = book;

const user = use(UserContext);
console.log('From userprovider', user);

    return (
        <div className="card bg-base-100 shadow-sm">
  <figure>
   {/* {book.image} */}
  </figure>
  <div className="card-body">
    <h2 className="card-title">{book.title}</h2>
    <p>{book.description}</p>
    <p>{book.author}</p>
    {/* <p>{book.id}</p> */}
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
      <Link href= {`/books/${id}`}>
      <button className="btn btn-primary">Show Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default BookCard;