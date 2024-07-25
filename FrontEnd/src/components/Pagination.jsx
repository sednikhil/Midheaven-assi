import React from 'react';

const Pagination = ({ page, pages, setPage }) => {
    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (page < pages) setPage(page + 1);
    };

    return (
        <div>
            <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
            <span>{page} of {pages}</span>
            <button onClick={handleNextPage} disabled={page === pages}>Next</button>
        </div>
    );
};

export default Pagination;
