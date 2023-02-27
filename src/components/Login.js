import React, { useState, useContext } from 'react';
import { AccountContext }  from './Account';
// import Status from './Status';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // const [loggedIn, setLoggedIn] = useState(false);
    const {authenticate} = useContext(AccountContext);
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        authenticate(email, password)
        .then(data=>{
            console.log("Logged in...", data);
            // setLoggedIn(true);
            navigate("/dashboard");
        })
        .catch(error=>{
            console.log(error);
            console.log(Object.values(error)[0]);
            if ((Object.values(error)[0]).includes("NotConfirmed")){
            setError("Email Not Confirmed");
            }
            else
            setError("Incorrect Username or Password");
        })
    }

    return(<div className="login-container">
        <div style={{"fontSize": "0.8rem", "color": "red"}}>{error}</div>
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className='auth-label'>
                    <label htmlFor='email'>Email</label>
                </div>
                {/* <div className='auth-input'> */}
                    <input value={email} onChange={(event) => setEmail(event.target.value)}/>
                {/* </div> */}
                <div className='auth-label'>
                    <label htmlFor='password'>Password</label>
                </div>
                {/* <div className='auth-input'> */}
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                {/* </div> */}

                <div className='auth-btn'>
                    <button type="submit">Log In</button>
                </div>
            </form>
            
        </div>
        <h6>Don't have an account? <a href="/signup">Create account</a></h6>
        </div>
    );
};

export default Login;