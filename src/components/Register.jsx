import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registration');
  };

  return (
    <div>
      <button onClick={handleRegisterClick} className="register-btn">
        REGISTER
      </button>
    </div>
  );
};

export default Register;
