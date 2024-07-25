import React, { useState, useEffect } from 'react';
import { getAstrologers } from '../api';
import { Link } from 'react-router-dom';
import AstrologerCard from '../components/astrologercard';
import Navbar from '../components/Navbar';
import './Home.css'; // Add your CSS for styling

const Home = () => {
    const [astrologers, setAstrologers] = useState([]);
    const [filters, setFilters] = useState({
        name: '',
        expertise: '',
        experience: ''
    });
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        fetchAstrologers();
    }, [filters, page]);

    const fetchAstrologers = async () => {
        try {
            const response = await getAstrologers(page, 5, filters.name, filters.expertise, filters.experience);
            if (response.data && response.data.astrologers) {
                setAstrologers(response.data.astrologers);
                setPages(response.data.pages || 1); // Default to 1 if pages is undefined
            } else {
                setAstrologers([]); // Handle case where astrologers data is not available
                setPages(1); // Default to 1 page if not provided
            }
        } catch (error) {
            console.error('Error fetching astrologers:', error);
            setAstrologers([]); // Fallback to empty array on error
            setPages(1); // Default to 1 page on error
        }
    };

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (page < pages) setPage(page + 1);
    };

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    return (
        <div>
            <Navbar onFilterClick={toggleFilter} />
            {showFilter && (
                <div className="filter-container">
                    <input
                        name="name"
                        placeholder="Name"
                        value={filters.name}
                        onChange={handleChange}
                    />
                    <input
                        name="expertise"
                        placeholder="Expertise"
                        value={filters.expertise}
                        onChange={handleChange}
                    />
                    <input
                        name="experience"
                        placeholder="Experience"
                        value={filters.experience}
                        onChange={handleChange}
                    />
                </div>
            )}
            <div className="astrologer-cards-container">
                {astrologers.length > 0 ? (
                    astrologers.map(astrologer => (
                        <AstrologerCard key={astrologer._id} astrologer={astrologer} />
                    ))
                ) : (
                    <p>No astrologers found</p>
                )}
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
                <span> Page {page} of {pages} </span>
                <button onClick={handleNextPage} disabled={page === pages}>Next</button>
            </div>
        </div>
    );
};

export default Home;
