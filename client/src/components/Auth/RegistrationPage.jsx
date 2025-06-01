import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from "../../helpers/Auth.jsx";

const RegistrationPage = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = form;

        if (!username || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const user = { username, email, password };

        auth.post('/api/users/signup', user).then((res) => {
            console.log(res);
            alert('Registration successful!');
            navigate('/login');
        }).catch((err) => {
            console.log(err);
        })

    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Register</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p style={styles.error}>{error}</p>}

                    <label>Username</label>
                    <input style={styles.input} type="text" name="username" value={form.username} onChange={handleChange} />

                    <label>Email</label>
                    <input style={styles.input} type="email" name="email" value={form.email} onChange={handleChange} />

                    <label>Password</label>
                    <input style={styles.input} type="password" name="password" value={form.password} onChange={handleChange} />

                    <label>Confirm Password</label>
                    <input style={styles.input} type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />

                    <button type="submit" style={styles.button}>Register</button>
                </form>
                <p style={styles.link}>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

const styles = {
    page: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f5f5f5' },
    container: { width: '100%', maxWidth: '400px', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' },
    heading: { textAlign: 'center' },
    input: { width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc' },
    button: { width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' },
    error: { color: 'red', marginBottom: '10px' },
    link: { textAlign: 'center', marginTop: '10px' }
};

export default RegistrationPage;