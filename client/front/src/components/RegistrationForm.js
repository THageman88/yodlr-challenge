import React, { useState } from 'react';
import axios from 'axios';


const RegistrationForm = () => {
    const [email, setEmail] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post('/users', { email, state: 'pending' });
        setEmail('');
      } catch (err) {
        console.error(err);
      }
    };
  
    return (
      <div className="reg-wrapper">
        <h1 className="reg-title"> Register here!!</h1>
        <form onSubmit={handleSubmit}>
          <div id="register-form">
            <label className="form-label">Email:</label>
            <input type="email" className="form-input" value={email} onChange={e => setEmail(e.target.value)} />
            <button type="submit" className="form-button">Submit</button>
          </div>
        </form>
      </div>
    );
  };

export default RegistrationForm;
