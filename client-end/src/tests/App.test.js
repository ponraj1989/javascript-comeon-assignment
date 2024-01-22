import '@testing-library/jest-dom';
import 'jsdom-global/register';  
import React from 'react';
import { render, screen, fireEvent, waitFor, act  } from '@testing-library/react';
import Login from '../components/Login';

describe('Login Component', () => {
  it('renders login form', () => {

    jest.useFakeTimers();
    render(<Login onLogin={() => {}} />);
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  it('renders login form and handles login correctly', async () => {
    render(<Login onLogin={(handleLogin) => {}} />);
 
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'rebecka' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'secret' } });
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { id: 'loginButton' }));
    });
 
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: 'Login' })).toBeInTheDocument();
    });

  });
  
});
