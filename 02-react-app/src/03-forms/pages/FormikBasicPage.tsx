import { useFormik } from "formik";

import '../styles/styles.css';

export const FormikBasicPage = () => {

    const { handleChange, values, handleSubmit } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
            
        }
    });

    return (
        <div>
            <h1>FormikBasicPage</h1>

            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name='firstName'
                    onChange={ handleChange }
                    value={ values.firstName }
                />
                <span>first name is required</span>

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name='lastName'
                    onChange={ handleChange }
                    value={ values.lastName }
                />
                <span>last name is required</span>

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name='email'
                    onChange={ handleChange }
                    value={ values.email }
                />
                <span>email is required</span>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
