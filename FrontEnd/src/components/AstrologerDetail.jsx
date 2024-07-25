import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getAstrologerById, deleteAstrologer } from '../api';
//import './astrologerdetails.css'; // Add your CSS for styling
import '../pages/AstrologerDetails.css';

const AstrologerDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [astrologer, setAstrologer] = useState(null);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const fetchAstrologer = async () => {
            try {
                const response = await getAstrologerById(id);
                setAstrologer(response.data);
            } catch (error) {
                console.error('Error fetching astrologer:', error);
            }
        };

        fetchAstrologer();
    }, [id]);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const handleDelete = async () => {
        try {
            await deleteAstrologer(id);
            navigate('/'); // Redirect to the home page after deletion
        } catch (error) {
            console.error('Error deleting astrologer:', error);
        }
    };

    const handleEdit = () => {
        navigate(`/update/${id}`); // Navigate to edit page
    };

    if (!astrologer) return <p>Loading...</p>;

    const descriptionToShow = showMore ? astrologer.description : (astrologer.description.length > 1000 ? astrologer.description.substring(0, 1000) + '...' : astrologer.description);

    return (
        <div className="astrologer-details-container">
            <nav className="navbar">
                <Link to="/" className="navbar-home-button">Home</Link>
                <button onClick={handleEdit} className="navbar-edit-button">Edit</button>
                <button onClick={handleDelete} className="navbar-delete-button">Delete</button>
            </nav>
            <div className="astrologer-details-box">
                <img
                    src={astrologer.image ? `http://localhost:3000/${astrologer.image}` : '/default.png'}
                    alt={astrologer.name}
                    className="astrologer-details-image"
                />
                <div className="astrologer-details-content">
                    <h1 className="astrologer-details-name">{astrologer.name}</h1>
                    <p className="astrologer-details-expertise"><strong>Expertise:</strong> {astrologer.expertise}</p>
                    <p className="astrologer-details-experience"><strong>Experience:</strong> {astrologer.experience} years</p>
                    <p className="astrologer-details-rating"><strong>Rating:</strong> {astrologer.rating}</p>
                    <p className="astrologer-details-charges"><strong>Charges:</strong> ${astrologer.charges}</p>
                    <p className="astrologer-details-language"><strong>Languages:</strong> {astrologer.language}</p>
                    <p className="astrologer-details-description">
                        <strong>Description:</strong> {descriptionToShow}
                    </p>
                    {astrologer.description.length > 1000 && (
                        <button onClick={toggleShowMore} className="show-more-button">
                            {showMore ? 'Show Less' : 'Show More'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AstrologerDetails;
