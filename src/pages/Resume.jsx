function Resume() {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Resume</h1>
            <a href="/Resume.pdf" download="Jake_Higham_Resume.pdf">
                <button style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    color: '#fff',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>Download PDF</button>
            </a>
        </div>
    );
}
