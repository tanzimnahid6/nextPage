import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SingleBook from './SingleBook';
import Loading from './Loading';

const Book = () => {
    const navigation = useNavigation()
    const books = useLoaderData()
    const allBooks = books.books
    
    if(navigation.state==='loading'){
        return <Loading></Loading>
    }
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 justify-items-center'>
            {
                allBooks.map(book=><SingleBook key={book.isbn13} book={book}></SingleBook>)
            }
        </div>
    );
};

export default Book;