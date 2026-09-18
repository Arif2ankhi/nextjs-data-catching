import React from 'react';


export const generateStaticParams =async() => {
    const res = await fetch ('http://localhost:5000/books');
    const books = await res.json();

    return books.map(book => ({bookId: book.id}))
}

const BookDetailPage = async({params}) => {

    const {bookId} = await params;

    const res = await fetch (`http://localhost:5000/books/${bookId}`);
    const book = await res.json();

    return (
        <div>
                <h2>{book.title}</h2>
                <h2>{book.description}</h2>
                <p>{book.author}</p>
                <p>£{book.price}</p>
        </div>
    );
};

export default BookDetailPage;