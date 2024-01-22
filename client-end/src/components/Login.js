// Import React and other hooks
import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { userAccess } from '../api/apicalls';

// Define the Login component
const Login = ({ onLogin }) => {
  // State for managing username, password, error message, and loading state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle user login
  const handleLogin = async () => {
    try {
      // Check if username and password are provided
      if (!username || !password) {
        setError('Missing username and password.');
        return;
      }

      // Call the userAccess API function for login
      const response = await userAccess({
        username,
        password
      }, 'login');

      // Handle the response from the API
      if (response.status === 'success') {
        const userData = response.player;
        // Call the onLogin function with user data
        onLogin(userData);
      } else {
        // Set an error message if login fails
        setError('Player does not exist or wrong password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Set an error message if an error occurs during login
      setError('Player does not exist or wrong password');
    }
  };

  // Function to handle click on input fields and hide error message
  const handleInputClick = () => {
    setError('');
  };

  // Render the Login component UI
  return (
    <Grid textAlign='center' style={{ height: '100vh', padding: '15px' }} verticalAlign='top'>
      <Grid.Column style={{ maxWidth: 450 }}>
        {/* Header */}
        <Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
        </Header>

        {/* Login Form */}
        <Form size='large' onSubmit={handleLogin}>
          <Segment stacked>
            {/* Username Input */}
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onClick={handleInputClick}
              required
            />

            {/* Password Input */}
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onClick={handleInputClick}
              required
            />

            {/* Login Button */}
            <Button color='teal' fluid size='large' loading={loading} id='loginButton'>
              Login
            </Button>
          </Segment>
        </Form>

        {/* Sign Up Message */}
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>

        {/* Display error message if there is an error */}
        {error && <Message negative>{error}</Message>}
      </Grid.Column>
    </Grid>
  );
};

// Export the Login component
export default Login;
