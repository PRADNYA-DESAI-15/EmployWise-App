import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUsers, updateUser  } from '../api';

/**
 * EditUser  component allows editing user details.
 */
const EditUser  = () => {
    const { id } = useParams(); // Get the user ID from the URL parameters
    const [user, setUser ] = useState({ first_name: '', last_name: '', email: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Fetch user data when the component mounts
    useEffect(() => {
        const getUser  = async () => {
            try {
                const response = await fetchUsers(1);
                const foundUser  = response.data.data.find(u => u.id === parseInt(id));
                if (foundUser ) {
                    setUser ({ first_name: foundUser .first_name, last_name: foundUser .last_name, email: foundUser .email });
                } else {
                    setError('User  not found');
                }
            } catch (err) {
                setError('Failed to fetch user data.');
            }
        };
        getUser ();
    }, [id]);

    // Handle input changes
    const handleChange = (e) => {
        setUser ({ ...user, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser (id, user); // Send the updated user data to the API
            navigate('/users'); // Redirect to the user list after successful update
        } catch (err) {
            setError('Failed to update user.');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Edit User</h2>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        className="form-control"
                        value={user.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        className="form-control"
                        value={user.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update User</button>
            </form>
        </div>
    );
};

export default EditUser ;