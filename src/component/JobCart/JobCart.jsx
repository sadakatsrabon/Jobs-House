/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const JobCart = () => {
    // console.log(jobData)
    // console.log(props)
    const [companies, setCompanies] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data =>setCompanies(data))
            // console.log(companies);
    })
    return (
        <div>z
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
        </div>
    );
};

export default JobCart;