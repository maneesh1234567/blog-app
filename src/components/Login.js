import React, { useEffect, useRef } from 'react'; // Added useEffect and useRef
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

  // Create a ref for the name input to focus it
  const nameInputRef = useRef(null);

  // --- Equivalent of componentDidMount and componentWillUnmount ---
  useEffect(() => {
    // This code runs ONCE after the component has mounted to the DOM

    // Example 1: Focus the name input field
    if (nameInputRef.current) {
      nameInputRef.current.focus();
      console.log('Name input focused on mount.');
    }

    // Example 2: Log a message on mount
    console.log('Login component has mounted!');

    // Example 3: (Hypothetical) Set up an event listener
    const handleResize = () => {
      console.log('Window resized while Login component is active.');
    };
    window.addEventListener('resize', handleResize);
    console.log('Resize event listener added.');


    // The function returned here is the "cleanup" function.
    // It runs when the component is about to unmount (like componentWillUnmount)
    // OR before the effect runs again if dependencies change (not applicable here due to []).
    return () => {
      // Example 2 Cleanup: Log a message on unmount
      console.log('Login component will unmount!');

      // Example 3 Cleanup: Remove the event listener
      window.removeEventListener('resize', handleResize);
      console.log('Resize event listener removed.');

      // If you had timers (setTimeout, setInterval), you'd clear them here:
      // clearTimeout(timerId);
      // clearInterval(intervalId);
    };
  }, []); // The empty dependency array `[]` means this effect runs only once on mount and cleans up on unmount.

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
          type="text"
          placeholder="Name"
          {...register('name')}
          ref={nameInputRef} // Assign the ref to the input
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