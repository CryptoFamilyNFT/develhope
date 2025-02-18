/* eslint-disable react/prop-types */
export const Color = ({ color }) => {
    const { id, name } = color;

    return (
        <li key={id}>{name}</li>
    );
};

export const Colors = ({ colors }) => {
    return (
        <ul>
            {colors.map(color => (
                <Color key={color.id} color={color} />
            ))}
        </ul>
    );
};