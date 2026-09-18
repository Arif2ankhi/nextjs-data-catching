import React from 'react';

const BookCard = ({book}) => {
    const {id, title, author, description} = book;
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
    </div>
  </div>
</div>
    );
};

export default BookCard;