import React, { useEffect, useRef } from 'react'; // Added useEffect and useRef
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Login.css';

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    )
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Create a ref for the name input to focus it
  const emailInputRef = useRef(null);

  // --- Equivalent of componentDidMount and componentWillUnmount ---
  useEffect(() => {
    // Focus the email input field on mount
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const onSubmit = (data) => {
    debugger;
    console.log('Form data:', data);
    alert('Form submitted!\n' + JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register('email')}
          ref={emailInputRef}
          className="login-input"
        />
        {errors.email && <p className="login-error">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register('password')}
          className="login-input"
        />
        {errors.password && <p className="login-error">{errors.password.message}</p>}

        <input type="submit" value="Login" className="login-btn" />
      </form>
    </div>
  );
};

export default Login;