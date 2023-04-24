import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-around mt-4 '>
            <h2><Link title='Home Page' className='text-2xl font-bold ' to="/">JobsHouse</Link></h2>
            <div className='space-x-8 hidden md:flex'>
                <NavLink title='Here you can see the grph chart of assignment marks which is gained by sadakat hossain srabon (1-7)' className={({ isActive }) => (isActive ? 'text-blue-400' : '')} to="/statics">Statics</NavLink>
                <NavLink title='Your applied jobs list is here' className={({ isActive }) => (isActive ? 'text-blue-400' : '')} to="/appliedjob">Applied Jobs</NavLink>
                <NavLink title='See the answer script of PH-Questions by Sadakat Hossain Srabon' className={({ isActive }) => (isActive ? 'text-blue-400' : '')} to="/blog">Blog</NavLink>
            </div>
            <button className='bg-sky-500 p-2 rounded-md text-white'>Start Applying</button>
        </div>
    );
};

export default Header;