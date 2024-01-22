import React from 'react'; // Import the React library
import './index.css'; // Import a CSS file for styling
import App from './App'; // Import the main React component of the application
import reportWebVitals from './reportWebVitals'; // Import a function for reporting web vitals
import 'semantic-ui-css/semantic.min.css'; // Import the Semantic UI CSS file for styling

// Import the createRoot function from react-dom/client
import { createRoot } from 'react-dom/client';

// Listen for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
  // Get the root element with id 'root'
  const rootElement = document.getElementById('root');

  // Throw an error if the root element is not found
  if (!rootElement) {
    throw new Error("Root element with id 'root' not found in the document.");
  }

  // Create a React root using the createRoot function
  const root = createRoot(rootElement);

  // Render the main App component into the root element
  root.render(<App />);
});

// Call the reportWebVitals function to collect and report web vitals metrics
reportWebVitals();
