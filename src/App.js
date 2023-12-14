import React, { useState, useEffect } from 'react';
import UserDisplay from './UserDisplay';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchRandomUser();
  }, []);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    return (
        <div className="container">
            <div className="button-container">
                {userData && <button onClick={fetchRandomUser}>Get Random User</button> }
            </div>
            <div className="user-display-container">
                {userData && <UserDisplay user={userData} />}
            </div>
        </div>
    );

}

export default App;
