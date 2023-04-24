import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const companies = useLoaderData()

    console.log(companies);

    return (
        <div className='mx-auto mt-20'>
            <div>
                <div className=' md:flex'>
                    <div>
                        <h1 className='text-4xl font-bold'>One Step<br />Closer To Your<br /><span className='text-indigo-400'>Dream Job</span></h1>
                        <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <button className='bg-violet-600 p-2 w-36 rounded-md text-white'>Get Start</button>
                    </div>
                    <img src="/images/All Images/IMG_20210121_182422-removebg-preview.png" alt="" />
                </div>

                {/* job features section */}

                <div>
                    <div>
                        <h2 className='text-center text-4xl font-semibold mb-10'>Featured Jobs</h2>
                        <div className='grid grid-cols-2'>
                            {companies.map(company =>
                                <div key={company.id} className='border-solid border-inherit border p-4 mb-5 ml-6'>
                                    <img className='w-20' src={company.logo} alt="Companies logo" />
                                    <h3>{company.jobTitle}</h3>
                                    <h2>{company.name}</h2>
                                    <div className='flex'><button className='border border-solid px-2'>Remote</button>
                                    <button className='border border-solid px-2 ml-2'>Fulltime</button></div>
                                    <button className='bg-sky-600 w-32'>Details</button>
                                </div>)}
                                <button className='bg-slate-500 w-32 h-10 rounded-md mx-auto mt-7'>All Jobs</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;