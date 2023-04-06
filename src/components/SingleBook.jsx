import React from 'react';

const SingleBook = ({book}) => {
    console.log(book);
    const {image,title,price,isbn13,subtitle} = book
    return (
        <div className='cursor-pointer shadow-lg relative overflow-hidden transition duration-500 transform hover:-translate-y-3'>
            <img className='w-full object-cover' src={image} alt={title} />
            <div className='text-xl rounded bg-opacity-75 opacity-0 hover:opacity-100  bg-blue-500 text-white inset-0 p-8 absolute top-0 flex flex-col gap-8 transition duration-500 '>
                <h1 className='text-center'>{title}</h1>
                <h2 className='text-center'>{subtitle}</h2>
                <p className='mt-auto text-center'>{price}</p>
            </div>
        </div>
    );
};

export default SingleBook;