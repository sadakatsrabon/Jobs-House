import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Errors = () => {
    const { error, status } = useRouteError();
    console.log(error.message);
    return (
        <div>
            <img className='mx-auto w-32' src={"https://th.bing.com/th/id/OIP.fWdQXZCgnfStjhzbRhKOYQHaGn?pid=ImgDet&w=717&h=640&rs=1"} alt="Image" />
            <h3 className='text-center text-3xl font-semibold'>SORRY BOSS !! CAN NOT FOUND THIS PAGE</h3>
            <div className='mt-uto bg-yellow-500'>
                <h2 className='text-6xl text-center'>OPPS!!</h2>
                <h1 className='mb-2 text-9xl bg-red-600 w-80 text-center mx-auto rounded-full'>{status || 404}</h1>
                <h2 className='text-center'>Error = {error.message}</h2>
            </div>
            <div className='text-center mt-6'>
                <Link to="/"><button className=' bg-indigo-400 w-48 h-10 text-white font-semibold rounded-lg'>Return Home</button></Link>
            </div>
        </div>
    );
};

export default Errors;