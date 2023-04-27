import  { useState } from 'react';
import JobCart from '../JobCart/JobCart';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
// console.log(props);
    const jobData = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const [jobCartsToShow, setJobCartsToShow] = useState(jobData.slice(0, 4));
    

    const toggleShowAll = () => {
        setShowAll(!showAll);
        setJobCartsToShow(showAll ? jobData : jobData.slice(0, 4));
    }
    // console.log(jobData);

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

                    <JobCart jobData={jobCartsToShow}></JobCart>

                    <div className='text-center'>
                        <button onClick={toggleShowAll}  className='bg-slate-500 w-32 h-10 rounded-md'>All Jobs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Home;