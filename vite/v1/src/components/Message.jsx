/* eslint-disable react/prop-types */
function Message({ age }) {
    return <p>{age > 18 ? "You are an adult!" : "You are very young!"}</p>;
}

export default Message;