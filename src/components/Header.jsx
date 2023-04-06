import React from 'react';
import { FaPage4 } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex bg-gray-200 justify-between px-5 py-3 rounded-sm text-xl font-bold sticky top-0 z-10'>
            <Link  to="/" className='flex items-center gap-2'>
                <span><FaPage4></FaPage4></span>
                <h1>NextPage</h1>
           </Link>
            <div className='flex gap-5'>
                <NavLink to="/" className={({isActive})=>(isActive?'text-blue-500':'')} >Home</NavLink>
                <NavLink to="/book" className={({isActive})=>(isActive?'text-blue-500':'')} >Book</NavLink>
                <NavLink to="/about" className={({isActive})=>(isActive?'text-blue-500':'')} >About Us</NavLink>
            </div>
        </div>
    );
};

export default Header;