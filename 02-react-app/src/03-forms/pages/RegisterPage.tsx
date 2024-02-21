import '../styles/styles.css';

export const RegisterPage = () => {
    return (
        <div>
            RegisterPage

            <form action="">
                <input
                    type="text"
                    placeholder="Name"
                />
                <input
                    type="email"
                    placeholder="Name"
                />
                <input
                    type="password"
                    placeholder="Password"
                />
                <input
                    type="password"
                    placeholder="Repeat Password"
                />

                <button type="submit">Create</button>
            </form>
        </div>
    )
}
