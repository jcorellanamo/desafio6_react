import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const userEmail = "admin@gmail.com";

  const handleLogout = () => {
    console.log("Sesión cerrada");
    navigate('/login');
  };

  return (
    <div className="container mt-2">
      <h1>Perfil de Usuario</h1>
      <p>Email: {userEmail}</p>
      <button onClick={handleLogout} className="btn btn-danger mt-3">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
