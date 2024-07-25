import React, { useState } from 'react';
import { createAstrologer } from '../api';
import { useNavigate } from 'react-router-dom';

const CreateAstrologer = () => {
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
    const navigate = useNavigate();

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
            const response = await createAstrologer(data);
            navigate(`/astrologer/${response.data._id}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Create Astrologer</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input name="expertise" placeholder="Expertise" value={formData.expertise} onChange={handleChange} required />
                <input name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
                <input name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} required />
                <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
                <input name="charges" placeholder="Charges" value={formData.charges} onChange={handleChange} required />
                <input name="language" placeholder="Language (comma separated)" value={formData.language} onChange={handleChange} required />
                <input type="file" name="image" onChange={handleFileChange} />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateAstrologer;
