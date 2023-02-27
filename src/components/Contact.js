import React, { useState, useContext } from 'react';

const Contact = () => {

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    // const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        
    }

    return(<div className="contact-container">
        <div style={{"fontSize": "0.8rem", "color": "red"}}>{error}</div>
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <h2>Contact</h2>
                <div className='auth-label'>
                    <label htmlFor='email'>Email</label>
                </div>
                {/* <div className='auth-input'> */}
                    <input value={email} onChange={(event) => setEmail(event.target.value)}/>
                {/* </div> */}

                <div className='auth-label'>
                    <label htmlFor='subject'>Subject</label>
                </div>
                <input value={subject} onChange={(event) => setSubject(event.target.value)}/>
                <div className='auth-label'>
                    <label htmlFor='Message'>Message</label>
                </div>
                {/* <div className='auth-input'> */}
                    <input name="message" type="text" value={message} onChange={(event) => setMessage(event.target.value)}/>
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