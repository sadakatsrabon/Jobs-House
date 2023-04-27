import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BeakerIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'


const Header = () => {
    return (
        <div className='flex justify-around mt-4 '>
            <h2><Link title='Home Page' className='text-2xl font-bold flex ' to="/"><CurrencyDollarIcon className="h-6 w-6 mt-2 text-blue-500 mr-2" />JobsHouse</Link></h2>
            <div className='space-x-8 text-center bg-slate-500 text-white p-4 rounded-lg md:flex flex-row'>
                <NavLink title='Here you can see the grph chart of assignment marks which is gained by sadakat hossain srabon (1-7)' className={({ isActive }) => (isActive ? 'text-blue-400' : '')} to="/statics">Statics</NavLink>
                <NavLink title='Your applied jobs list is here' className={({ isActive }) => (isActive ? 'text-blue-400' : '')} to="/appliedjob">Applied Jobs</NavLink>
                <NavLink title='See the answer script of PH-Questions by Sadakat Hossain Srabon' className={({ isActive }) => (isActive ? 'text-blue-400' : '')} to="/blog">Blog</NavLink>
            </div>
            <Link to="jobcart"><button className='bg-sky-500 p-2 rounded-md text-white'>Start Applying</button></Link>
        </div>
    );
};

export default Header;