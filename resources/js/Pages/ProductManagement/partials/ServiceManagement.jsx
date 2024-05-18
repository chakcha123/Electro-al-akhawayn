
import React from 'react'
import { useEffect } from 'react';
import {  useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';



const ServiceManagement = ({id}) => {
// console.log(id)

    const { data, setData, post, errors } = useForm({
        name: '',
        sid: '',
        description: '',
        price: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route('services.create' ,data));
    };
    useEffect(() => {
        const ID = Number(id)+1
        setData('sid', 's_' + ID)
        }
    , []);

    return (
        <div>

            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md my-10">
                <h2 className="text-xl font-semibold mb-4">Create Service</h2>
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
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            id="price"
                            onChange={(e)=>setData('price',e.target.value)}
                            className="mt-1 p-2 block w-full border-graonChange={handleChange}y-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-6/13"
                            min="0"
                            step="0.01"
                            required
                        />
                    <InputError message={errors.price} className="mt-2" />
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ServiceManagement
