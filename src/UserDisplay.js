import React from 'react';

function UserDisplay({ user }) {
    return (
        <div className="user-display">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            <p className="name">{user.name.first} {user.name.last}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Location:</strong> {user.location.country} {user.location.city}, {user.location.state}</p>
        </div>
    );
}

export default UserDisplay;
