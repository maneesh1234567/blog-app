import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button as MUIButton } from '@mui/material';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  price: yup.number().typeError('Price must be a number').required('Price is required').min(0, 'Price must be at least 0'),
  email: yup.string().email('Invalid email').required('Email is required'),
  comments: yup.string().required('Comments are required'),
  brand: yup.string().required('Brand is required'),
  model: yup.string().required('Model is required'),
  color: yup.string().required('Color is required'),
  category: yup.string().required('Category is required'),
  discount: yup.number().typeError('Discount must be a number').required('Discount is required').min(0, 'Discount must be at least 0'),
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
    <form
      onSubmit={handleSubmit(submitHandler)}
      style={{
        display: 'flex',
        flexDirection: 'column', // Change to column
        gap: '1rem',
        alignItems: 'stretch', // Stretch fields to full width
        flexWrap: 'wrap'
      }}
    >
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
        label="Price"
        variant="outlined"
        size="small"
        type="number"
        {...register('price')}
        error={!!errors.price}
        helperText={errors.price?.message}
        style={{ background: '#fff' }}
      />
      <TextField
        label="Brand"
        variant="outlined"
        size="small"
        {...register('brand')}
        error={!!errors.brand}
        helperText={errors.brand?.message}
        style={{ background: '#fff' }}
      />
      <TextField
        label="Model"
        variant="outlined"
        size="small"
        {...register('model')}
        error={!!errors.model}
        helperText={errors.model?.message}
        style={{ background: '#fff' }}
      />
      <TextField
        label="Color"
        variant="outlined"
        size="small"
        {...register('color')}
        error={!!errors.color}
        helperText={errors.color?.message}
        style={{ background: '#fff' }}
      />
      <TextField
        label="Category"
        variant="outlined"
        size="small"
        {...register('category')}
        error={!!errors.category}
        helperText={errors.category?.message}
        style={{ background: '#fff' }}
      />
      <TextField
        label="Discount"
        variant="outlined"
        size="small"
        type="number"
        {...register('discount')}
        error={!!errors.discount}
        helperText={errors.discount?.message}
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
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <MUIButton type="submit" variant="contained" color="primary">
          Add
        </MUIButton>
      </div>
    </form>
  );
};

export default DynamicForm;
