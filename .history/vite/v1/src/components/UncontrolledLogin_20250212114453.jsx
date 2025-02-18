import { useRef } from 'react';

const UncontrolledLogin = () => {
    const formRef = useRef(null);

    const onLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = form.password.value;
        const remember = form.remember.checked; // torna true o false
        console.log('Data:', {username, password, remember});
    };

    const loginWithFormData = () => {
        const form = formRef.current;
        const formData = new FormData(form);
        const username = formData.get('username');
        const password = formData.get('password');
        const remember = formData.get('remember'); // torna on or null
        console.log('Data:', {username, password, remember});
    };

    return (
        <form ref={formRef} onSubmit={onLogin}>
            <div>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
            </div>
            <div>
                <label>
                    Remember me:
                    <input type="checkbox" name="remember" />
                </label>
            </div>
            <button type="submit">Login</button>
            <button type="button" onClick={loginWithFormData}>Login with FormData</button>
        </form>
    );
};

export default UncontrolledLogin;