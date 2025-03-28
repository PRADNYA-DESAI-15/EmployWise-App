import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const login = async (email, password) => {
    return await axios.post(`${API_URL}/login`, { email, password });
};

export const fetchUsers = async (page) => {
    return await axios.get(`${API_URL}/users?page=${page}`);
};

export const updateUser  = async (id, userData) => {
    return await axios.put(`${API_URL}/users/${id}`, userData);
};

export const deleteUser  = async (id) => {
    return await axios.delete(`${API_URL}/users/${id}`);
};