import React, { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import video from './Assets/videobkgd.mp4';
import Registro from './registro.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    // Validaciones básicas
    if (!email || !password) {
      setError('Por favor, llena todos los campos.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Si pasa las validaciones, puedes hacer el login
    setError(''); // Limpiar cualquier error anterior
    alert('Inicio de sesión exitoso');
  };

  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="background-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="title">Destino's Travel</h1>

      <div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Guardar el valor del email en el estado
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type={passwordShown ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Guardar el valor del password en el estado
              required
            />
            <FontAwesomeIcon
              icon={passwordShown ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
              className="toggle-password-icon"
            />
          </div>
          <button type="submit">Entrar</button>

          {/* <div className="App">
            {isLogin ? <Login /> : <Registro />}  {/* Cambia entre login y registro }
            <button onClick={toggleForm}>
              {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
            </button> 
          </div> */}
          <Router>
            <Link to='/registro' onClick={toggleForm} className='signup-text'>
              {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
            </Link>
      
            <Routes>
              <Route path='/registro' element={isLogin ? <Login /> : <Registro />}/>
            </Routes>
          </Router>
          
        </form>
      </div>
    </div>

  
    
  );
}

export default Login;
