import React, { useState } from 'react';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    // Validaciones básicas
    if (!email || !password) {
      setError('Por favor, rellena todos los campos.');
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

  return (
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
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Guardar el valor del password en el estado
            required
          />
        </div>
        <button type="submit">Entrar</button>
        <p className="signup-text">¿No tienes cuenta? <a href="#">Regístrate</a></p>
      </form>
    </div>
  );
}

export default Login;