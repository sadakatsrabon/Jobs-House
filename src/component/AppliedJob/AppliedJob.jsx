import  { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

const AppliedJob = () => {
    const [companies, setCompanies] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCompanies(data))
        console.log(companies);
    })
    return (
        <div className=' mt-10'>
            <div className=''>
                {companies.map(company =>
                    <div key={company.id} className=' flex h-44'>
                        <div className='rounded-lg border-solid border-inherit border p-8 mb-5 ml-6 flex w-3/4'>
                            <div className='my-auto mr-8 border-solid border-inherit border p-4 rounded-sm h-28 w-28'>
                                <img className='w-20 flex align-middle' src={company.logo} alt="Companies logo" />
                            </div>
                            <div>
                                <h3>{company.jobTitle}</h3>
                                <h2>{company.name}</h2>
                                <div className='flex my-2'><button className='border border-solid px-2'>Remote</button>
                                    <button className='border border-solid px-2 ml-2'>Fulltime</button></div>
                                <div className='flex'>
                                    <p className='mr-2'>{company.location}</p>
                                    <p className='mb-2'>Salary:{company.salary}</p>
                                </div>
                            </div>
                            <div className=''>
                                <Link to={`jobdetails/${company.id}`}><button className='bg-sky-600 w-32 h-7 rounded-md mt-10 ml-32 '>Job Details</button></Link>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default AppliedJob;