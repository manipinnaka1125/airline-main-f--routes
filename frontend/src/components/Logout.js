import{ useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    // Clear any user session or authentication token
    // For example, if using localStorage:
    localStorage.removeItem('authToken');

    // Redirect the user directly to the login page
    window.location.replace('/login'); // Assuming '/login' is your login page route
  }, []);

  // This component doesn't render anything because the redirection happens automatically
  return null;
}

export default Logout;
