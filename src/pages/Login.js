import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleLogin}>
        <label>
          Usuario:
          <input type="text" name="username" required />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
