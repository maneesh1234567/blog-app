import React, { useEffect, useRef } from 'react';
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
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*\d).+$/, 'Password must contain at least one number'),
});


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const emailInputRef = useRef(null);
        const [loginMessage, setLoginMessage] = React.useState('');

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

        const onSubmit = (data) => {
          console.log('Form submitted:', data);
          setLoginMessage('Login successful!');
          setTimeout(() => setLoginMessage(''), 2000); // Hide after 2s
          reset();
        };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { 
                ref: emailInputRef 
              })}
              className={`login-input${errors.email ? ' input-error' : ''}`}
              autoComplete="username"
            />
        {errors.email && <p className="login-error">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register('password')}
          className={`login-input${errors.password ? ' input-error' : ''}`}
          autoComplete="current-password"
        />
        {errors.password && <p className="login-error">{errors.password.message}</p>}
        <div className="login-message-area">
          {loginMessage && <div className="login-message">{loginMessage}</div>}
        </div>
        <button type="submit" className="login-btn">Login</button>
        
      </form>
    </div>
  );
};

export default Login;