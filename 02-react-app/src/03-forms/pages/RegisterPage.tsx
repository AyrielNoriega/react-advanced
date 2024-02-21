import { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/styles.css';

export const RegisterPage = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const { name, email, password1, password2 } = registerData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name);
        setRegisterData({
            ...registerData,
            [event.target.name]: event.target.value
        });

        // o asi
        // setRegisterData( prev => ({
        //     ...prev,
        //     [event.target.name]: event.target.value
        // }));
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <div>
            <h1>RegisterPage</h1>

            <form noValidate onSubmit={ onSubmit }>
                <input
                    name='name'
                    onChange={ onChange }
                    placeholder="Name"
                    type="text"
                    value={ name }
                />
                <input
                    name='email'
                    onChange={ onChange }
                    placeholder="Email"
                    type="email"
                    value={ email }
                />
                <input
                    name='password1'
                    onChange={ onChange }
                    placeholder="Password"
                    type="password"
                    value={ password1 }
                />
                <input
                    name='password2'
                    onChange={ onChange }
                    placeholder="Repeat Password"
                    type="password"
                    value={ password2 }
                />

                <button type="submit">Create</button>
            </form>
        </div>
    );
};
