import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            <h2>Detail is here what you want to see.</h2>
        </div>
    );
};

export default JobDetails;