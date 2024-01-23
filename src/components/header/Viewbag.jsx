import React, { useState } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      // Update existing user
      const updatedUser = {
        name,
        email,
      };
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = updatedUser;
      setUsers(updatedUsers);
      setEditing(false);
      setEditingIndex(null);
    } else {
      // Add new user
      const newUser = {
        name,
        email,
      };
      setUsers([...users, newUser]);
    }
    setName('');
    setEmail('');
  };

  const handleEdit = (index) => {
    const userToEdit = users[index];
    setName(userToEdit.name);
    setEmail(userToEdit.email);
    setEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-gray-700 mb-5">User Management</h1>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="flex mb-2">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            className="border border-gray-400 rounded p-2 mr-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-400 rounded p-2 mr-2"
            required
          />
          <button
            type="submit"
            className={`bg-${editing ? 'blue' : 'green'}-500 text-white rounded px-4 py-2`}
          >
            {editing ? 'Update' : 'Add'}
          </button>
        </div>
      </form>
      <table className="w-full border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Email</th>
            <th className="border-b p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border-b p-2">{user.name}</td>
              <td className="border-b p-2">{user.email}</td>
              <td className="border-b p-2">
                <button
                  className="bg-yellow-500 text-white rounded px-2 py-1 mr-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white rounded px-2 py-1"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;