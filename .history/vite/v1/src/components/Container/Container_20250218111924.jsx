/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const styles = {
    container: {
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
    },
    containerTitle: {
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    containerChildren: {
        marginTop: '10px',
    },
};

const Container = ({ title = "Container", children }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={styles.container}>
            <h2 onClick={toggleCollapse} style={styles.containerTitle}>
                {title}
            </h2>
            {!collapsed && <div style={styles.containerChildren}>{children}</div>}
        </div>
    );
};

export default Container;