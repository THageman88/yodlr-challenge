import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('/users');
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div class="admin-container">
      <h1>Admin Page</h1>
      <ul class="user-list">
        {users.map((user) => (
          <li class="user-list-item" key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
