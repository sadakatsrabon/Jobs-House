import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const [jobData, setJobData] = useState([]);
    useEffect(() => {
        fetch('jobdata.json')
            .then(res => res.json())
            .then(data => setJobData(data));
        // console.log(jobData)
    })

    const companies = useLoaderData();

    // console.log(companies);
    return (
        <div className='mx-auto mt-20 '>
            <div className='bg-gray-100 w-full mx-auto'>
                <div className='md:flex'>
                    <div className='p-4 ml-10'>
                        <h1 className='text-4xl font-bold'>One Step<br />Closer To Your<br /><span className='text-indigo-400'>Dream Job</span></h1>
                        <p>Explore thousands of job opportunities with all br the  information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='bg-violet-600 mt-2 p-2 w-36 rounded-md text-white'>Get Start</button>
                    </div>
                    <img className='px-10 pb-8' src="/images/All Images/IMG_20210121_182422-removebg-preview.png" alt="" />
                </div>


            </div>
            {/* Job category list section  */}

            <div>
                <div className='text-center my-10'>
                    <h2 className='text-4xl font-semibold mb-2'>Job Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-4'>
                {jobData.map(singleData =>(
                    <div key={singleData.id} className=' w-40 h-40 rounded-md p-4 mx-auto my-10 bg-slate-100'>
                    <img src={singleData.logo} alt="" />
                    {singleData.category}
                    {singleData.avilableJobs}

                    </div>
                ))}
                </div>
            </div>

            {/* job features section */}
            <div>
                <div className='w-full  mx-auto mt-10'>
                    <h2 className='text-center text-4xl font-semibold mb-2'>Featured Jobs</h2>
                    <p className='text-center mb-10'><small>Explore thousands of job opportunities with all the   you need. Its your future</small></p>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 '>
                        {companies.map(company =>
                            <div key={company.id} className='border-solid border-inherit border p-8 mb-5 ml-6'>
                                <img className='w-20' src={company.logo} alt="Companies logo" />
                                <h3>{company.jobTitle}</h3>
                                <h2>{company.name}</h2>
                                <div className='flex my-2'><button className='border border-solid px-2'>Remote</button>
                                    <button className='border border-solid px-2 ml-2'>Fulltime</button></div>
                                <div className='flex'>
                                    <p className='mr-2'>{company.location}</p>
                                    <p className='mb-2'>Salary:{company.salary}</p>
                                </div>
                                <Link to={`jobdetails/${company.id}`}><button  className='bg-sky-600 w-32 h-7 rounded-md'>Job Details</button></Link>
                            </div>)}
                    </div>
                    <div className='text-center'>
                        <button  className='bg-slate-500 w-32 h-10 rounded-md'>All Jobs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;