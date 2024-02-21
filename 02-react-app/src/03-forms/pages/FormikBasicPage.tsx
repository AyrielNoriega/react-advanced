import '../styles/styles.css';

export const FormikBasicPage = () => {
    return (
        <div>
            <h1>FormikBasicPage</h1>

            <form noValidate>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name='firstName'
                />
                <span>first name is required</span>

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name='lastName'
                />
                <span>last name is required</span>

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name='email'
                />
                <span>email is required</span>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
