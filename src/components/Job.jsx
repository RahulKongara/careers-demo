import React, { useState } from 'react'
import { Collapse } from '@material-tailwind/react'
import ReactMarkdown from 'react-markdown'

const Job = ({ job }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="card rounded-2xl shadow-xl/20 p-4 sm:w-[524px]">
            <div className="content flex justify-between">
                <div className="left">
                    <h1>{job.title} - <span className='font-light text-black'>{job.company}</span></h1>
                    <p className='mb-2'>{new Date(job.created_at).toLocaleDateString()}</p>
                    <div className="tag flex">
                        <p className='border-1 rounded-xl px-2 py-0.5 mr-1 w-auto bg-purple-500 text-white'>{job.employment_type}</p>
                        <p className='border-1 rounded-xl px-2 py-0.5 w-auto bg-purple-500 text-white'>{job.location}</p>
                    </div>
                    <p className='text-black mt-4'>{job.description}</p>

                </div>
                <div className="right font-light text-teal-600">{job.job_category}</div>
            </div>
            <button onClick={() => setOpen(prevOpen => !prevOpen)} className='mt-4 p-2 rounded-lg custom-gradient-btn'>{open ? 'Hide details!' :'View detials!'}</button>
            <div className="btn-div">
                <Collapse open={open}>
                    <div className="collapse-div mt-4">
                        <h3><span className='font-bold'>Company: </span>{job.company} | Location: {job.location}</h3>
                        <p><span className='font-bold'>Salary:</span> $<span>{job.salary_from} - ${job.salary_to}</span></p>
                        <p className='font-bold'>Qualifications: </p><ReactMarkdown children={job.qualifications} />
                        <p><span className='font-bold'>Contact: </span>{job.contact}</p>
                        <p><span className='font-bold'>Openings: </span>{job.number_of_opening}</p>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default Job