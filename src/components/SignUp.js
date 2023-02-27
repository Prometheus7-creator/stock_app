import React, { useState } from 'react';
import UserPool from './UserPool';
import { CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import PasswordChecklist from "react-password-checklist"
import { useNavigate } from 'react-router-dom';

const SignUp = ({setCurrPage}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState(false);
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        let attributeList = [];
        // let attri_name = new CognitoUserAttribute({'Name':'name', 'Value': name});
        // attributeList.push(attri_name);
        UserPool.signUp(email, password, attributeList, null, (err, data) => {
            if(err){
                console.log(err);
                setError("Invalid email or password");
            } else{
                setVerify(true);
            }
        });
    }

    const verifyUser = (e) => {
        e.preventDefault();
        const user = new CognitoUser({
          Username: email,
          Pool: UserPool,
        });
        
        user.confirmRegistration(otp, true, (err, data) => {
          if (err) {
            alert("Couldn't verify account");
          } else {
            alert('Account verified successfully');
            navigate("/login");
          }
        });
    }

    return(
        <div className="signup-container">
            {!verify?
            <>
            <div style={{"fontSize": "0.8rem", "color": "red"}}>{error}</div>
            <div className="signup-form">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className='auth-label'>
                    <label htmlFor='name'>Name</label>
                </div>
                <input value={name} onChange={(event) => setName(event.target.value)}/>
                <div className='auth-label'>
                    <label htmlFor='email'>Email</label>
                </div>
                <input value={email} onChange={(event) => setEmail(event.target.value)}/>
                <div className='auth-label'>
                    <label htmlFor='password'>Password</label>
                </div>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <div className='password-checklist'>
                <PasswordChecklist
                    rules={["minLength", "specialChar", "number", "capital", "lowercase"]}
                    minLength={8}
                    value={password}
                    onChange={(isValid)=>{console.log(isValid)}}
                />
                </div>
                <div className='auth-btn'>
                    <button type="submit">Sign Up</button>
                </div>
            </form></div></>: 
            <form onSubmit={verifyUser}>
                <div className='auth-label'>
                    <label htmlFor='name'>Email OTP</label>
                </div>
                <input value={otp} onChange={(event) => setOtp(event.target.value)}/>
                <div className='auth-btn'>
                    <button type="submit">Verify Account</button>
                </div>
            </form>
            }
            <h6>Already have an account? <a href="/login">Log In</a></h6>
        </div>
    );
};

export default SignUp;