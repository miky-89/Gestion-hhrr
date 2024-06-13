// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la Plataforma de Gestión de Recursos Humanos</h1>
      <Link to="/login">Iniciar Sesión</Link>
    </div>
  );
};

export default Home;
