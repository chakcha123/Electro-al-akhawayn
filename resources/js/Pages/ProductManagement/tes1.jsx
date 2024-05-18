import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const AddProduct = () => {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: 0,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post('/products', values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={values.name} onChange={handleChange} />
      <textarea name="description" value={values.description} onChange={handleChange}></textarea>
      <input type="number" name="price" value={values.price} onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
