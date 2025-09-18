import React from 'react';

function UserCard({ user }) {
  // Fallback if user data is missing
  if (!user || !user.username || !user.address || !user.company) {
    console.log('Invalid user data:', user);
    return (
      <div className="card mb-3 user-card">
        <div className="card-body">No user data available</div>
      </div>
    );
  }

  const avatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${user.username}&mood=happy`;
  console.log('Avatar URL for', user.username, ':', avatarUrl);

  return (
    <div className="card mb-3 user-card">
      <div className="card-body d-flex align-items-center">
        <div className='card mr-5 text-center'> 
            <img
            src={avatarUrl}
            alt={`${user.username}'s avatar`}
            className="rounded-circle mb-2 avatar-img"
            onError={(e) => console.log(`Failed to load avatar for ${user.username}:`, e)}
            />
        </div>
        <div className='card'>
            <h1 className="card-title">{user.name}</h1>
            <p className="card-text">
            <strong>Email:</strong> {user.email}<br />
            <strong>Phone:</strong> {user.phone}<br />
            <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}<br />
            <strong>Website:</strong> {user.website}<br />
            <strong>Company:</strong> {user.company.name}
            </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;