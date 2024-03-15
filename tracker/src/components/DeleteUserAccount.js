import React from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri'; 
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom'; 

function DeleteUserAccount() {
  const navigate = useNavigate();

  const handleDeleteUserAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const userEmail = decodedToken.sub;
        const response = await axios.delete('http://localhost:8086/api/user/delete', {
          params: {
            email: userEmail
          }
        });
        alert('Your account has been deleted successfully.');
        console.log('Response:', response.data); 
        navigate('/login');
      } catch (error) {
        console.error('Error deleting user account:', error);
        alert('Error deleting user account.');
      }
    }
  };

  return (
    <div>
      <button className="btn" onClick={handleDeleteUserAccount}>
        <RiDeleteBin2Line /> Delete Account {/* Rendering trash icon */}
      </button>
    </div>
  );
}

export default DeleteUserAccount;
