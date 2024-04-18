import React, { useState } from 'react';


export default function About() {
  const [field, setField] = useState({
    firstName: '',
    lastName: '',
    number: '',
    email: ''
  });
  const [validation, setValidation] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (field.firstName && field.lastName && field.number && field.email) {
      setValidation(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {validation && submitted && <div className="success-message">Registration successful</div>}
        <div className="form-field">
          <input
            type="text"
            placeholder="First name"
            className="input-field"
            onChange={(e) => setField({ ...field, firstName: e.target.value })}
            value={field.firstName}
          />
          {submitted && !field.firstName && <span className="error-message">First name is required.</span>}
        </div>
        <div className="form-field">
          <input
            type="text"
            placeholder="Last name"
            className="input-field"
            onChange={(e) => setField({ ...field, lastName: e.target.value })}
            value={field.lastName}
          />
          {submitted && !field.lastName && <span className="error-message">Last name is required.</span>}
        </div>
        <div className="form-field">
          <input
            type="number"
            placeholder="Contact number"
            className="input-field"
            onChange={(e) => setField({ ...field, number: e.target.value })}
            value={field.number}
          />
          {submitted && !field.number && <span className="error-message">Number is required.</span>}
        </div>
        <div className="form-field">
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            onChange={(e) => setField({ ...field, email: e.target.value })}
            value={field.email}
          />
          {submitted && !field.email && <span className="error-message">Email is required.</span>}
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
}