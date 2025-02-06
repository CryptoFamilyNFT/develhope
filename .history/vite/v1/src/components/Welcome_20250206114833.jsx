/* eslint-disable react/prop-types */
import {Age} from "./Age";
export const Welcome = ({name, age}) => {
    return (
        <>
            <p>Welcome <strong>{name}!</strong> </p>
            <Age>{age}</Age>
        </>
)
}