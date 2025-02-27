import { useState } from 'react';

const useTracker = () => {
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return {
        formState,
        handleInputChange
    };
};

export default useTracker;