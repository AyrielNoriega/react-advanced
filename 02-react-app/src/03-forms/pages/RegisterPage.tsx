import { FormEvent } from 'react';

import { useForm } from '../hooks';

import '../styles/styles.css';

export const RegisterPage = () => {

    const { name, email, password1, password2, onChange,onResetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.target);
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
                    className={ `${ name.trim().length <= 0 && 'has-error' }` }
                />
                { name.trim().length <= 0 && <span>Este campo es necesario</span> }

                <input
                    name='email'
                    onChange={ onChange }
                    placeholder="Email"
                    type="email"
                    value={ email }
                    className={ `${ !isValidEmail(email) && 'has-error' }` }
                />
                { !isValidEmail(email) && <span>Este campo es necesario</span> }

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
                <button type="button" onClick={ onResetForm }>Reset</button>
            </form>
        </div>
    );
};
