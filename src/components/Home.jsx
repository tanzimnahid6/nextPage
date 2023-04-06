import React from 'react';
import { HiShoppingCart } from "react-icons/hi";
import lottie from '../assets/lottie.json'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex justify-between w-full mt-24 h-[calc(100vh-52px)] '>
           <div>
           <div className="badge badge-warning ">ON SALE!</div>
                <div className='text-4xl font-bold my-5'>A reader lives a <br /> thousand lives <span className='text-blue-500'> before he dies</span> </div>
                <div className='text-xl leading-normal mb-5'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</div>
                <div className='flex gap-4'>
                <Link to='/book' className='btn btn-info gap-3 flex w-52 text-white text-xl'>
                    <button>Visite Store</button>
                    <span> <HiShoppingCart></HiShoppingCart> </span> 
                </Link>
                <Link to='/about' className='text-xl border p-3 rounded-lg'>Learn More</Link>
                </div>
           </div>
           <div className='w-full'>
             <Lottie animationData={lottie} loop={true} />
           </div>
        </div>
    );
};

export default Home;