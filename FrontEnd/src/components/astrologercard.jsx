import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/AstrologerCard.css';

const AstrologerCard = ({ astrologer }) => {
    return (
        <div className="astrologer-card">
            <Link to={`/astrologer/${astrologer._id}`} className="astrologer-card-link">
                <img
                    src={astrologer.image ? `http://localhost:3000/${astrologer.image}` : '/default.png'}
                    alt={astrologer.name}
                    className="astrologer-card-image"
                />
                <div className="astrologer-card-content">
                    <h2 className="astrologer-card-name">{astrologer.name}</h2>
                    <p className="astrologer-card-expertise">Expertise: {astrologer.expertise}</p>
                    <p className="astrologer-card-experience">Experience: {astrologer.experience} years</p>
                    <p className="astrologer-card-rating">Rating: {astrologer.rating}</p>
                    <p className="astrologer-card-charges">Charges: ${astrologer.charges}</p>
                    <p className="astrologer-card-language">Languages: {astrologer.language}</p>
                </div>
            </Link>
        </div>
    );
};

export default AstrologerCard;
