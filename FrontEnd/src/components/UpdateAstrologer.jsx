import React, { useState, useEffect } from 'react';
import { getAstrologerById, updateAstrologer } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import '../pages/UpdateAstrologer.css';

const UpdateAstrologer = () => {
    const [formData, setFormData] = useState({
        name: '',
        expertise: '',
        experience: '',
        rating: '',
        description: '',
        charges: '',
        language: '',
        image: null
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchAstrologer();
    }, []);

    const fetchAstrologer = async () => {
        try {
            const response = await getAstrologerById(id);
            const { name, expertise, experience, rating, description, charges, language, image } = response.data;
            setFormData({ 
                name, 
                expertise, 
                experience, 
                rating, 
                description, 
                charges, 
                language: language.join(', '), 
                image 
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const data = new FormData();
        for (let key in formData) {
            data.append(key, formData[key]);
        }

        try {
            await updateAstrologer(id, data);
            navigate(`/astrologer/${id}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="update-astrologer">
            <h1>Update Astrologer</h1>
            <form onSubmit={handleSubmit}>
                <input className="form-input" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input className="form-input" name="expertise" placeholder="Expertise" value={formData.expertise} onChange={handleChange} required />
                <input className="form-input" name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
                <input className="form-input" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} required />
                <input className="form-input" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
                <input className="form-input" name="charges" placeholder="Charges" value={formData.charges} onChange={handleChange} required />
                <input className="form-input" name="language" placeholder="Language (comma separated)" value={formData.language} onChange={handleChange} required />
                <input className="form-file" type="file" name="image" onChange={handleFileChange} />
                <button className="submit-button" type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateAstrologer;
