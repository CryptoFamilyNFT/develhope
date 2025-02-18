/* eslint-disable react/prop-types */
const CounterDisplay = ({ counter, children }) => {
    return (
        <div style={{ fontSize: '24px', color: counter % 2 === 0 ? 'blue' : 'red' }}>
            {children}
        </div>
    );
};

export default CounterDisplay;