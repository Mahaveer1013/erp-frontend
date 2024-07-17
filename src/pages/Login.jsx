import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <section className='login'>
            <img src="https://www.toppersno1.com/wp-content/uploads/2021/05/2017-03-09.jpg" alt="bg" />
            <form className='login-form-div' onSubmit={handleSubmit}>
                <h1>Login Portal</h1>
                <div className="part">
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id='username'
                        placeholder='Enter Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        aria-label="Username"
                    />
                </div>
                <div className="part">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-label="Password"
                    />
                </div>
                <input type="submit" value='Login' />
            </form>
        </section>
    );
};

export default Login;
