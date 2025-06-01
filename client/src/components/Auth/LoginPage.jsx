import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Auth from "../../helpers/Auth";
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    Auth.post("/api/users/login", form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        console.log(res);
        alert("Login successful!");
        navigate("/docs");
      })
      .catch((err) => {
        console.log(err);
      });
  };

return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div style={styles.passwordContainer}>
          <input
            style={styles.passwordInput}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span style={styles.eye} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁'}
          </span>
        </div>
        <button type="submit" style={styles.button}>Login</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  form: {
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '300px',
    boxSizing: 'border-box',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    boxSizing: 'border-box',
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
    margin: '10px 0',
  },
  passwordInput: {
    width: '100%',
    padding: '10px',
    paddingRight: '40px',
    boxSizing: 'border-box',
  },
  eye: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '18px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default LoginPage;
  



  