import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser  } from '../api';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetchUsers(page);
            setUsers(response.data.data);
            setTotalPages(response.data.total_pages);
        };
        getUsers();
    }, [page]);

    const handleDelete = async (id) => {
        await deleteUser (id);
        setUsers(users.filter(user => user.id !== id));
    };

    // Filter users based on the search query
    const filteredUsers = users.filter(user => {
        return (
            user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div className="container mt-4">
            <h2>User List</h2>
            <input
                type="text"
                placeholder="Search by name or email"
                className="form-control mb-3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td><img src={user.avatar} alt={user.first_name} width="50" /></td>
                            <td>
                                <Link to={`/edit/${user.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                                <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-between">
                <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1} className="btn btn-secondary">Previous</button>
                <span> Page {page} of {totalPages} </span>
                <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages} className="btn btn-secondary">Next</button>
            </div>
        </div>
    );
};

export default Users;