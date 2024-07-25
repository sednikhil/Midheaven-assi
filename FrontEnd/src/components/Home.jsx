import React, { useState, useEffect } from 'react';
import { getAstrologers } from '../api';
import { Link } from 'react-router-dom';

const Home = () => {
    const [astrologers, setAstrologers] = useState([]);
    const [filters, setFilters] = useState({
        name: '',
        expertise: '',
        experience: ''
    });

    useEffect(() => {
        fetchAstrologers();
    }, [filters]);

    const fetchAstrologers = async () => {
        try {
            const response = await getAstrologers(filters);
            setAstrologers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h1>Astrologers</h1>
            <div>
                <input name="name" placeholder="Name" value={filters.name} onChange={handleChange} />
                <input name="expertise" placeholder="Expertise" value={filters.expertise} onChange={handleChange} />
                <input name="experience" placeholder="Experience" value={filters.experience} onChange={handleChange} />
            </div>
            <ul>
                {astrologers.map(astrologer => (
                    <li key={astrologer._id}>
                        <Link to={`/astrologer/${astrologer._id}`}>{astrologer.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/create">Add New Astrologer</Link>
        </div>
    );
};

export default Home;
