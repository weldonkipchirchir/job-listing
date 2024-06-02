/* eslint-disable react/prop-types */
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='flex justify-center items-center gap-4 dark:text-white text-xl absolute bottom-3 right-2/4 left-2/4'>
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={currentPage === number ? `bg-primary px-2 rounded-sm text-white` : ''}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
