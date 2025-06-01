import React, { useEffect, useState } from 'react';

const Docs = () => {
    const [username, setUsername] = useState('');
    const [showEditor, setShowEditor] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('username');
        if (storedUser) {
            setUsername(storedUser);
        }
    }, []);

    if (showEditor) {
        return (
            <div style={styles.editorContainer}>
                <div style={styles.editorHeader}>
                    <button onClick={() => setShowEditor(false)} style={styles.backButton}>
                        ← Back
                    </button>
                    <div style={styles.user}>Hello, {username} 👋</div>
                </div>
                <textarea
                    style={styles.editor}
                    placeholder="Start typing your document here..."
                />
            </div>
        );
    }

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <div style={styles.user}>Hello, {username} 👋</div>
                <button onClick={() => setShowEditor(true)} style={styles.addButton}>
                    + Add Document
                </button>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: '#f0f0f0',
        borderBottom: '1px solid #ddd',
    },
    user: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    addButton: {
        padding: '8px 16px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
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
    editorContainer: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    editorHeader: {
        padding: '16px',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #ccc',
    },
    backButton: {
        padding: '6px 12px',
        backgroundColor: '#6c757d',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    editor: {
        flex: 1,
        padding: '20px',
        fontSize: '16px',
        lineHeight: '1.5',
        fontFamily: 'Arial, sans-serif',
        border: 'none',
        outline: 'none',
        resize: 'none',
    },
};

export default Docs;
