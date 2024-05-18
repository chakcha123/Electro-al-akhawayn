
import React , { useState }from 'react'
import {  useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
// import { Inertia } from '@inertiajs/inertia';

const ProductManagement = () => {

    const { data, setData, post, errors } = useForm({
        name: '',
        description: '',
        image: '',
        price: 0,
        quantity_in_stock:0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route('products.create' ,data));
    };

    return (
        <div>

            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md my-10">
                <h2 className="text-xl font-semibold mb-4">Create Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e)=>setData('name',e.target.value)}
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            value={data.description}
                            onChange={(e)=>setData('description',e.target.value)}
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows="3"
                            required
                        ></textarea>
                        <InputError message={errors.description} className="mt-2" />
                    </div>
                    <div className="mb-4 flex justify-between">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 float-right">Quantity</label>
                    </div>

                    <div className="mb-4 flex ">
                        <input
                            type="number"
                            id="price"
                            value={data.price}
                            onChange={(e)=>setData('price',e.target.value)}

                            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-6/13"
                            min="0"
                            step="0.01"
                            required
                        />
                        <InputError message={errors.price} className="mt-2" />
                        <input
                            type="number"
                            id="quantity_in_stock"
                            value={data.quantity_in_stock}
                            onChange={(e)=>setData('quantity_in_stock',e.target.value)}

                            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-6/13"
                            min="0"
                            required
                        />
                        <InputError message={errors.quantity_in_stock} className="mt-2" />
                    </div>
                    <div className="flex items-center mt-1">
                        <input
                            type="file"
                            id="image"
                            className="sr-only"
                            accept="image/*"
                            onChange={(e) => setData('image', e.target.files[0])}
                        />
                        <InputError message={errors.image} className="mt-2" />
                        <label htmlFor="image" className="cursor-pointer my-4 ">
                            <p className='text-sm font-medium text-gray-700'>Select Image</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>

                        </label>
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        Create
                    </button>
                </form>
            </div>

        </div>
    )
}

export default ProductManagement

