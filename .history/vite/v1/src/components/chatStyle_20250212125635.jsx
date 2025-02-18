export const styles = {
    chatContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
    },
    messages: {
        flex: 1,
        overflowY: 'auto',
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    message: {
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '5px',
    },
    received: {
        backgroundColor: '#f1f1f1',
        alignSelf: 'flex-start',
        maxWidth: '70%'
    },
    sent: {
        backgroundColor: '#007bff',
        color: '#fff',
        alignSelf: 'flex-end',
        maxWidth: '70%',

    },
    inputContainer: {
        display: 'flex',
    },
    input: {
        flex: 1,
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginRight: '10px',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    },
};