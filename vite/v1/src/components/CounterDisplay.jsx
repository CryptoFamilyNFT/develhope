/* eslint-disable react/prop-types */
const CounterDisplay = ({ children }) => {
    return (
        <div style={{ fontSize: '24px', color: children % 2 === 0 ? 'blue' : 'red' }}>
            {children}
        </div>
    );
};

export default CounterDisplay;