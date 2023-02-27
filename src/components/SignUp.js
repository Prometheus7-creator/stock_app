import React, { useState } from 'react';
import UserPool from './UserPool';
import { CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import PasswordChecklist from "react-password-checklist"

const SignUp = ({setCurrPage}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState(false);
    const [otp, setOtp] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        let attributeList = [];
        let attri_name = new CognitoUserAttribute({'Name':'name', 'Value': name});
        attributeList.push(attri_name);
        UserPool.signUp(email, password, attributeList, null, (err, data) => {
            if(err){
                console.log(err);
            } else{
                console.log(data);
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
        console.log(user);
        user.confirmRegistration(otp, true, (err, data) => {
          if (err) {
            console.log(err);
            alert("Couldn't verify account");
          } else {
            console.log(data);
            alert('Account verified successfully');
            setCurrPage("Log In");
          }
        });
    }

    return(
        <div className="signup-container">
            {!verify?
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
            </form></div>: 
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