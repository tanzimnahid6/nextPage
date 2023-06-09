import React, { useState } from 'react';
import { useLoaderData,useNavigation } from 'react-router-dom';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const BookDetails = () => {
    const data = useLoaderData()
  
    const {title,subtitle,authors,year,image,publisher,desc,rating,price} = data
    const navigation=useNavigation()
    if(navigation.state==='loading'){
        return <Loading></Loading>
    }
    const navigate = useNavigate()


    const [description,setDescription] = useState(true)
    return (
        <div className='md:flex justify-between border border-sky-500 m-16'>
            <div className='w-full border border-sky-800 m-16'>
                 <img className='w-full' src={image} alt="" />
            </div>
            <div className='w-full p-8  border border-sky-500 m-16'>
               <div className="badge badge-warning">BRAND NEW !</div>
               <p className='text-3xl font-extrabold my-3'>{title}</p>
               <p>Authors:{authors}</p>
               <p>Publisher:{publisher}</p>
               <p>Year:{year}</p>
               <p>Ratting:{rating}</p>

               <h1 className='my-5'>{description?desc.substring(0,80):desc}...<span onClick={()=>setDescription(!description)} className='font-bold text-blue-500 cursor-pointer'>{description?'Read More':'Read Less'}</span></h1>

               <div className='flex gap-6 items-center'>
                   <button onClick={()=>navigate('/')} className="btn btn-info text-white px-5 ">Buy Now</button>
                   <p className='font-bold'>{price}</p>
               </div>
            </div>
        </div>
    );
};

export default BookDetails;