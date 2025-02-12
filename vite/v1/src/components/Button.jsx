/* eslint-disable react/prop-types */
export const Button = ({children, onClick}) => {

    return (
        <button onClick={onClick}>{children}</button>
    )
}