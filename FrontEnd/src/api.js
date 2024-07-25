import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getAstrologers = (filters = {}) => axios.get(`${API_URL}/astrologers`, { params: filters });
export const getAstrologerById = (id) => axios.get(`${API_URL}/astrologers/${id}`);
export const createAstrologer = (data) => axios.post(`${API_URL}/astrologers`, data);
export const updateAstrologer = (id, data) => axios.put(`${API_URL}/astrologers/${id}`, data);
export const deleteAstrologer = (id) => axios.delete(`${API_URL}/astrologers/${id}`);
