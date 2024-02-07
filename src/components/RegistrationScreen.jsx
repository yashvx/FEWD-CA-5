// RegistrationScreen.jsx

import React, { useState } from 'react';

const RegistrationScreen = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
 const [isFormSubmit,setIsFormSubmit] = useState(false);
 const [isNameValid,setIsNameValid]=useState(false);
 const [isEmailValid,setIsEmailValid]=useState(false);
 const [isPasswordValid,setIsPasswordValid]=useState(false);
 const [isRepeatPasswordValid,setIsRepeatPasswordValid]=useState(false);

  // State to manage form validation
  const [isFormValid, setIsFormValid] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  // Validate form when input changes
  const validateForm = () => {
    setIsNameValid(formData.name.length >= 3 && formData.name.length <= 30);
    console.log(isNameValid)
    setIsEmailValid(formData.email.includes('@'));
    setIsPasswordValid(formData.password.length >= 3 && /[!@#$%^&*(),.?":{}|<>]/.test(formData.password));
    setIsRepeatPasswordValid(formData.password === formData.repeatPassword)

    
    setIsFormValid(
      isNameValid && isEmailValid && isPasswordValid && isRepeatPasswordValid
    );

      
  };

  


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here (e.g., sending data to a server)
     setIsFormSubmit(true);
     validateForm();
    // For demonstration purposes, log the form data
    console.log('Form Data:', formData);
  };

  return (
    <div className='registration-screen'>
        {
        /* {console.log(isNameValid && isEmailValid && isPasswordValid && isRepeatPasswordValid,"J",isNameValid,isEmailValid,isPasswordValid,isRepeatPasswordValid) */
         isNameValid && isEmailValid && isPasswordValid && isRepeatPasswordValid?<h1 className='success'>Registration SuccessFull!</h1>:""
        }
      <h2 className='register-head'>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label className='name'>
          Name:
        </label>
        <input className='name-input'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={validateForm}
            required
          />
        {isFormSubmit && !isNameValid ?<p className='name-alert'>Name is not valid</p>:""}

        <label className='email'>
          Email:
        </label>
        <input className='email-input'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={validateForm}
            required
          />

        {isFormSubmit && !isEmailValid ?<p className='email-alert'>Email is not valid</p>:""}

        <label className='password'>
          Password:
        </label>
        <input className='password-input'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={validateForm}
            required
          />

        {isFormSubmit && !isPasswordValid ?<p className='password-alert'>Password is not valid</p>:""}

        <label className='repeat-password'>
          Repeat Password:
        </label>
        <input className='rpt-pswrd-input'
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleInputChange}
            onBlur={validateForm}
            required
          />

        {isFormSubmit && !isRepeatPasswordValid ?<p className='rpt-pswrd-alert'>Password is not valid</p>:""}

        <button type="submit" className='sign-up'>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegistrationScreen;
