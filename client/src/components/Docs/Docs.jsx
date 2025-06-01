import React, { useEffect, useState } from 'react';

const Docs = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser?.username) {
            setUsername(storedUser.username);
        }
    }, []);

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <div style={styles.user}>Hello, {username} 👋</div>
            </div>

            <div style={styles.content}>
                <div style={styles.card}>
                    <div style={styles.docName}>Doc1</div>
                    <button style={styles.button}>Join</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: {
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
    },
    header: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '16px',
        backgroundColor: '#f0f0f0',
        borderBottom: '1px solid #ddd',
    },
    user: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        padding: '20px 30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    docName: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    button: {
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Docs;