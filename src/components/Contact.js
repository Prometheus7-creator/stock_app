import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import NavBar from './Navbar';

const Contact = () => {

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    // const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        emailjs.sendForm('service_yygvh5r', 'template_v9wphi4', event.target, 'YHXbCEd5OXCguk-1u')
        .then((response)=>{
            window.location.reload();
            console.log(response);
        }, (error)=>{
            console.log(error.text);
            setError("Email couldn't be send");
        })
    }

    return(<div className="contact-container">
        <NavBar/>
        <div style={{"fontSize": "0.8rem", "color": "red"}}>{error}</div>
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <h2>Contact</h2>
                <div className='auth-label'>
                    <label htmlFor='email'>Email</label>
                </div>
                {/* <div className='auth-input'> */}
                    <input name="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                {/* </div> */}

                <div className='auth-label'>
                    <label htmlFor='subject'>Subject</label>
                </div>
                <input name="subject" value={subject} onChange={(event) => setSubject(event.target.value)}/>
                <div className='auth-label'>
                    <label htmlFor='Message'>Message</label>
                </div>
                {/* <div className='auth-input'> */}
                    <textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)}/>
                {/* </div> */}

                <div className='auth-btn'>
                    <button type="submit">Send</button>
                </div>
            </form>
            
        </div>
        </div>
    );
};

export default Contact;