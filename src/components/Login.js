import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Login.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Age is required')
    .min(1, 'Age must be at least 1')
    .max(120, 'Age must be less than or equal to 120'),
  email: yup.string().email('Invalid email').required('Email is required'),
  comments: yup.string().max(500, 'Comments must be at most 500 characters'),
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

  const onSubmit = (data) => {
    alert('Form submitted!\n' + JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register('name')}
          className="login-input"
        />
        {errors.name && <p className="login-error">{errors.name.message}</p>}

        <input
          type="number"
          placeholder="Age"
          {...register('age')}
          className="login-input"
        />
        {errors.age && <p className="login-error">{errors.age.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register('email')}
          className="login-input"
        />
        {errors.email && <p className="login-error">{errors.email.message}</p>}

        <textarea
          placeholder="Comments"
          {...register('comments')}
          className="login-input"
          rows={4}
        />
        {errors.comments && <p className="login-error">{errors.comments.message}</p>}

        <input type="submit" value="Submit" className="login-btn" />
        <input type="button" value="Reset" className="login-btn" onClick={() => reset()} />
      </form>
    </div>
  );
};

export default Login;