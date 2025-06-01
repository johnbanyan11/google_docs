import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ username, email, password }));
    toast.success('Registration successful!');
    setTimeout(() => navigate('/login'), 1000);
  };
 return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          style={styles.input}
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <div style={styles.passwordContainer}>
          <input
            style={styles.passwordInput}
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <span style={styles.eye} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁'}
          </span>
        </div>

        <div style={styles.passwordContainer}>
          <input
            style={styles.passwordInput}
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
          <span style={styles.eye} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁'}
          </span>
        </div>

        <button type="submit" style={styles.button}>Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
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
export default RegistrationPage;


  

