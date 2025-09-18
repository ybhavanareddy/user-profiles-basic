import React, { useState, useEffect } from 'react';
import './App.css';
import UserCard from './UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching users...');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log('Users fetched:', data);
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">User Profiles</h1>
      {isLoading ? (
        <div className="spinner"></div>
      ) : users.length === 0 ? (
        <p className="text-center">No users loaded. Check the console for errors.</p>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div className="col-12" key={user.id}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default App;