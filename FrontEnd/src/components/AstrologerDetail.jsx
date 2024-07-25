import React, { useState, useEffect } from 'react';
import { getAstrologerById, deleteAstrologer } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

const AstrologerDetail = () => {
    const [astrologer, setAstrologer] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchAstrologer();
    }, []);

    const fetchAstrologer = async () => {
        try {
            const response = await getAstrologerById(id);
            setAstrologer(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteAstrologer(id);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    if (!astrologer) return <div>Loading...</div>;

    return (
        <div>
            <h1>{astrologer.name}</h1>
            <p>Expertise: {astrologer.expertise}</p>
            <p>Experience: {astrologer.experience}</p>
            <p>Rating: {astrologer.rating}</p>
            <p>Description: {astrologer.description}</p>
            <p>Charges: {astrologer.charges}</p>
            <p>Language: {astrologer.language.join(', ')}</p>
            <img src={astrologer.image} alt={astrologer.name} />
            <button onClick={() => navigate(`/update/${astrologer._id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default AstrologerDetail;
