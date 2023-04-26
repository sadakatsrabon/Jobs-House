/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const {id} = useParams();
    const allData = useLoaderData()
    const [details , setDetails] = useState();
    useEffect(()=>{
        if(allData.length){
            const details = allData.find(d=>d.id === id)
            setDetails(details)
        }
    }, [allData])
    console.log(details);
    return (
        <div>
            <img src={details?.logo} alt="" />
            {details?.salary}
        </div>
    );
};

export default JobDetails;