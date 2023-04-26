/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { id } = useParams();
    const allData = useLoaderData()
    const [details, setDetails] = useState();
    useEffect(() => {
        if (allData.length) {
            const details = allData.find(d => d.id === id)
            setDetails(details)
        }
    }, [allData])
    console.log(details);
    return (
        <div className='mt-20 mx-auto'>
            <h3 className='text-xl font-bold text-center'>Job Details</h3>
            
            <div className='flex mt-10'>
                <div className='w-2/3 ml-20'>
                    <p className='mb-6'> <span className='font-bold'>Job Descriprion:</span> {details?.jobDescription}</p>
                    <p className='mb-6'> <span className='font-bold'>Job Responsibility:</span> {details?.jobResponsibility} </p>
                    <p className='mb-6'> <span className='font-bold'>Educational Requirment:</span> {details?.educationalRequirements}</p>
                    <p className='mb-6'> <span className='font-bold'>Experience:</span> {details?.experience}</p>
                </div>
                <div className='w-52 ml-6 bg-slate-100 p-4 rounded-md'>
                    <h1 className='font-bold mb-4'>Job Details</h1>
                    <hr className='w-40 mx-auto' />
                    <p className=''><span className='font-semibold'>Salary:</span> {details?.salary}</p>
                    <p className=''><span className='font-semibold'>Job Title:</span> {details?.jobTitle}</p>

                    <h5 className='font-bold mt-2 mb-4'>Contact information</h5>
                    <hr className='w-40 mx-auto' />

                    <p className=''><span className='font-semibold'>Phone:</span> {details?.phone}</p>
                    <p className=''><span className='font-semibold'>Email:</span> {details?.email}</p>
                    <p className=''><span className='font-semibold'>Address:</span> {details?.location}</p>
                    <div className='flex justify-center mt-6'>
                    <button className='bg-slate-600 text-white w-48 h-8 rounded-lg'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;