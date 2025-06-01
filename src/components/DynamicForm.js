import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button as MUIButton } from '@mui/material';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  age: yup.number().typeError('Age must be a number').required('Age is required').min(1, 'Age must be at least 1'),
  email: yup.string().email('Invalid email').required('Email is required'),
  comments: yup.string().required('Comments are required'),
});

const DynamicForm = ({ onSubmit, defaultValues = {} }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const submitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <TextField
        label="Name"
        variant="outlined"
        size="small"
        {...register('name')}
        error={!!errors.name}
        helperText={errors.name?.message}
        style={{ background: '#fff' }}
      />
      <TextField
        label="Age"
        variant="outlined"
        size="small"
        type="number"
        {...register('age')}
        error={!!errors.age}
        helperText={errors.age?.message}
        style={{ background: '#fff' }}
      />
      <TextField
        label="Email"
        variant="outlined"
        size="small"
        type="email"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        style={{ background: '#fff' }}
      />
      <TextField
        label="Comments"
        variant="outlined"
        size="small"
        multiline
        rows={2}
        {...register('comments')}
        error={!!errors.comments}
        helperText={errors.comments?.message}
        style={{ background: '#fff' }}
      />
      <MUIButton type="submit" variant="contained" color="primary">
        Add
      </MUIButton>
    </form>
  );
};

export default DynamicForm;
