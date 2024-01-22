// Import React and necessary libs 
import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';  
import Game from './components/Game';  
import Logo from './components/Logo';  
import { userAccess } from './api/apicalls';
 
const App = () => {
  // State to manage user information
  const [user, setUser] = useState(null);

  // Effect to retrieve user data from localStorage on component mount
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, []);

  // Function to handle user login
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      const response = await userAccess({
        username: user.name.split(' ')[0].toLowerCase()
      }, 'logout');

      if (response.status === 'success') {
        localStorage.removeItem('userData');
        setUser(null);
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // Render the component hierarchy based on user authentication status
  return (
    <div>
      <Logo /> 
      {user ? (
        <Game user={user} onLogout={handleLogout} /> // Render the Game component if user is logged in
      ) : (
        <Login onLogin={handleLogin} /> // Render the Login component if user is not logged in
      )}
    </div>
  );
};

// Export the App component
export default App;
