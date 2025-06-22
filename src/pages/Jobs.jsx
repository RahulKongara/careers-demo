import { useState } from 'react'
import useFetchJobs from "../components/useFetchJobs";
import Job from '../components/Job';
import Pagination from '../components/Pagination';
import { BarLoader } from 'react-spinners'

const Jobs = () => {
    const [currPage, setCurrPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);
    const { jobs, loading, error } = useFetchJobs();

    const lastPostIndex = currPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currJobs = jobs.slice(firstPostIndex, lastPostIndex);


    return (
        <div className="container mt-30 md:w-[1120px]">
            {loading && <BarLoader color={"green"} loading={loading} size={150} aria-label='Loading Spinner' data-testid='loader' />}
            {error && <h1>Error. Try refreshing...</h1>}
            <div className="md:flex md:flex-wrap md:flex-row md:gap-4 md:items-start sm:flex sm:flex-col sm:justify-center sm:items-center">
                {currJobs.map(job => (
                    <div className="w-[400px] sm:w-[524px] md:w-[524px]">
                        <Job key={job.id} job={job} />
                    </div>
                ))}
            </div>
            <Pagination totalPosts={jobs.length} postsPerPage={currJobs.length} currentPage={currPage} setCurrentPage={setCurrPage} />
        </div>
    )
}

export default Jobs