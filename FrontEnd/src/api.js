import axios from 'axios';

const API_URL = 'http://localhost:3000/astrologers/';

export const getAstrologers = async (page = 1, limit = 5, name = '', expertise = '', experience = '') => {
    return await axios.get(API_URL, {
        params: {
            page,
            limit,
            name,
            expertise,
            experience
        }
    });
};

export const getAstrologerById = (id) => axios.get(`${API_URL}/${id}`);
export const createAstrologer = (data) => axios.post(`${API_URL}/`, data);
export const updateAstrologer = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteAstrologer = (id) => axios.delete(`${API_URL}/${id}`);
