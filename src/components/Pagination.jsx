

const Pagination = ({ totalPosts, postsPerPage, currentPage, setCurrentPage }) => {
    let pages = [];

    for (let i = 1; i <= Math.floor(totalPosts/postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="sm:flex sm:justify-center sm:items-center mt-5 mb-5">
            {
                pages.map((page, index) => {
                    return <button className={`mr-2 rounded-sm border-1 px-2 ${page === currentPage ? 'bg-gradient-to-r from-[#FFFAFA] to-[#FF5151]' : ''}`} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
                })
            }
        </div>
    )
        
}

export default Pagination